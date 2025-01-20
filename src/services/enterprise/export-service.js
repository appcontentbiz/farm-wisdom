import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import { Parser } from 'json2csv';
import * as xml2js from 'xml2js';
import JSZip from 'jszip';
import { Canvg } from 'canvg';

class ExportService {
  constructor() {
    this.customStyles = {
      pdf: {
        fontSize: 12,
        headerColor: '#4a90e2',
        rowColors: ['#f5f5f5', '#ffffff'],
        borderColor: '#e0e0e0'
      },
      excel: {
        headerStyle: {
          fill: { fgColor: { rgb: '4A90E2' } },
          font: { color: { rgb: 'FFFFFF' }, bold: true }
        },
        rowStyle: {
          fill: { fgColor: { rgb: 'F5F5F5' } }
        }
      }
    };
  }

  // Advanced Excel Export with Multiple Sheets and Styling
  async exportToExcel(data, options = {}) {
    try {
      const wb = XLSX.utils.book_new();
      const defaultOptions = {
        filename: 'analytics-report.xlsx',
        sheetNames: Object.keys(data),
        styling: this.customStyles.excel,
        password: '', // Optional password protection
        charts: true // Include charts if available
      };

      const exportOptions = { ...defaultOptions, ...options };

      exportOptions.sheetNames.forEach((sheetName) => {
        const ws = XLSX.utils.json_to_sheet(this._formatDataForExcel(data[sheetName]));
        this._applyExcelStyling(ws, exportOptions.styling);
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
      });

      if (exportOptions.password) {
        wb.Workbook = { ...wb.Workbook, protection: { workbookPassword: exportOptions.password } };
      }

      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      this._saveFile(excelBuffer, exportOptions.filename, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      throw error;
    }
  }

  // Advanced PDF Export with Custom Styling and Charts
  async exportToPDF(data, options = {}) {
    try {
      const defaultOptions = {
        filename: 'analytics-report.pdf',
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
        charts: true,
        styling: this.customStyles.pdf
      };

      const exportOptions = { ...defaultOptions, ...options };
      const doc = new jsPDF(exportOptions.orientation, exportOptions.unit, exportOptions.format);

      // Add cover page
      this._addPDFCoverPage(doc, exportOptions);

      // Add table of contents
      this._addPDFTableOfContents(doc, data);

      // Add content sections
      Object.entries(data).forEach(([section, sectionData], index) => {
        if (index > 0) doc.addPage();
        this._addPDFSection(doc, section, sectionData, exportOptions);
      });

      // Add charts if enabled
      if (exportOptions.charts) {
        await this._addPDFCharts(doc, data);
      }

      // Add footer with page numbers
      this._addPDFFooter(doc);

      doc.save(exportOptions.filename);
    } catch (error) {
      console.error('Error exporting to PDF:', error);
      throw error;
    }
  }

  // Export to Interactive HTML
  async exportToHTML(data, options = {}) {
    try {
      const defaultOptions = {
        filename: 'analytics-report.html',
        styling: true,
        interactive: true
      };

      const exportOptions = { ...defaultOptions, ...options };
      const html = this._generateHTML(data, exportOptions);
      const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
      saveAs(blob, exportOptions.filename);
    } catch (error) {
      console.error('Error exporting to HTML:', error);
      throw error;
    }
  }

  // Export to XML
  async exportToXML(data, options = {}) {
    try {
      const defaultOptions = {
        filename: 'analytics-report.xml',
        rootElement: 'analyticsReport'
      };

      const exportOptions = { ...defaultOptions, ...options };
      const builder = new xml2js.Builder({
        rootName: exportOptions.rootElement
      });
      const xml = builder.buildObject(data);
      const blob = new Blob([xml], { type: 'application/xml;charset=utf-8' });
      saveAs(blob, exportOptions.filename);
    } catch (error) {
      console.error('Error exporting to XML:', error);
      throw error;
    }
  }

  // Export to Advanced CSV
  async exportToCSV(data, options = {}) {
    try {
      const defaultOptions = {
        filename: 'analytics-report.csv',
        fields: null, // Auto-detect fields
        delimiter: ',',
        eol: '\n'
      };

      const exportOptions = { ...defaultOptions, ...options };
      const parser = new Parser(exportOptions);
      const csv = parser.parse(this._flattenData(data));
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
      saveAs(blob, exportOptions.filename);
    } catch (error) {
      console.error('Error exporting to CSV:', error);
      throw error;
    }
  }

  // Export Charts as Images
  async exportCharts(charts, options = {}) {
    try {
      const defaultOptions = {
        format: 'png', // png, jpeg, or svg
        quality: 1,
        scale: 2
      };

      const exportOptions = { ...defaultOptions, ...options };
      const exports = await Promise.all(
        charts.map(async (chart) => {
          const element = document.getElementById(chart.id);
          if (!element) return null;

          let dataUrl;
          switch (exportOptions.format) {
            case 'png':
              dataUrl = await toPng(element, exportOptions);
              break;
            case 'jpeg':
              dataUrl = await toJpeg(element, exportOptions);
              break;
            case 'svg':
              dataUrl = await toSvg(element, exportOptions);
              break;
            default:
              throw new Error(`Unsupported format: ${exportOptions.format}`);
          }

          return {
            name: chart.name,
            dataUrl
          };
        })
      );

      // Create zip file with all charts
      const zip = new JSZip();
      exports.forEach((exp) => {
        if (exp) {
          zip.file(`${exp.name}.${exportOptions.format}`, exp.dataUrl.split(',')[1], { base64: true });
        }
      });

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, `charts.zip`);
    } catch (error) {
      console.error('Error exporting charts:', error);
      throw error;
    }
  }

  // Helper Methods
  _formatDataForExcel(data) {
    return Array.isArray(data) ? data : this._flattenData(data);
  }

  _applyExcelStyling(worksheet, styling) {
    // Apply custom styling to Excel worksheet
    // Implementation details...
  }

  _addPDFCoverPage(doc, options) {
    // Add cover page with title, date, and logo
    // Implementation details...
  }

  _addPDFTableOfContents(doc, data) {
    // Generate and add table of contents
    // Implementation details...
  }

  _addPDFSection(doc, section, sectionData, options) {
    // Add section content with custom styling
    // Implementation details...
  }

  async _addPDFCharts(doc, data) {
    // Convert and add charts to PDF
    // Implementation details...
  }

  _addPDFFooter(doc) {
    // Add page numbers and footer information
    // Implementation details...
  }

  _generateHTML(data, options) {
    // Generate interactive HTML report
    // Implementation details...
  }

  _flattenData(data) {
    // Convert nested data structure to flat format
    return Object.entries(data).reduce((acc, [key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        const flattened = this._flattenData(value);
        return [...acc, ...flattened];
      }
      return [...acc, { key, value }];
    }, []);
  }

  _saveFile(buffer, filename, type) {
    const blob = new Blob([buffer], { type });
    saveAs(blob, filename);
  }
}

export const exportService = new ExportService();
