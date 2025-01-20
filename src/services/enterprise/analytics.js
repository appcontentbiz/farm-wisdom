import axios from 'axios';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

// Advanced Analytics Service for Enterprise Plus
class AnalyticsService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_BASE_URL;
  }

  // Yield Analytics
  async getYieldAnalytics(farmId, timeRange) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/yield`, {
        params: { farmId, timeRange }
      });
      return {
        historicalYield: response.data.historicalYield,
        predictedYield: response.data.predictedYield,
        yieldTrends: response.data.trends,
        recommendations: response.data.recommendations
      };
    } catch (error) {
      console.error('Error fetching yield analytics:', error);
      throw error;
    }
  }

  // Resource Utilization Analytics
  async getResourceAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/resources`, {
        params: { farmId }
      });
      return {
        waterUsage: response.data.waterUsage,
        energyConsumption: response.data.energyConsumption,
        laborEfficiency: response.data.laborEfficiency,
        resourceOptimization: response.data.optimization
      };
    } catch (error) {
      console.error('Error fetching resource analytics:', error);
      throw error;
    }
  }

  // Financial Analytics
  async getFinancialAnalytics(farmId, period) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/financial`, {
        params: { farmId, period }
      });
      return {
        revenue: response.data.revenue,
        expenses: response.data.expenses,
        profitMargins: response.data.profitMargins,
        roi: response.data.roi,
        cashFlow: response.data.cashFlow,
        projections: response.data.projections
      };
    } catch (error) {
      console.error('Error fetching financial analytics:', error);
      throw error;
    }
  }

  // Crop Performance Analytics
  async getCropAnalytics(farmId, cropId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/crops`, {
        params: { farmId, cropId }
      });
      return {
        growthRate: response.data.growthRate,
        healthMetrics: response.data.healthMetrics,
        diseaseResistance: response.data.diseaseResistance,
        qualityScores: response.data.qualityScores,
        optimizationSuggestions: response.data.suggestions
      };
    } catch (error) {
      console.error('Error fetching crop analytics:', error);
      throw error;
    }
  }

  // Weather Impact Analytics
  async getWeatherImpactAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/weather-impact`, {
        params: { farmId }
      });
      return {
        weatherPatterns: response.data.patterns,
        cropImpact: response.data.impact,
        riskAssessment: response.data.risk,
        mitigationStrategies: response.data.strategies
      };
    } catch (error) {
      console.error('Error fetching weather impact analytics:', error);
      throw error;
    }
  }

  // Soil Health Analytics
  async getSoilHealthAnalytics(farmId, plotId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/soil`, {
        params: { farmId, plotId }
      });
      return {
        nutrientLevels: response.data.nutrients,
        organicMatter: response.data.organicMatter,
        pH: response.data.pH,
        microorganisms: response.data.microorganisms,
        recommendations: response.data.recommendations
      };
    } catch (error) {
      console.error('Error fetching soil health analytics:', error);
      throw error;
    }
  }

  // Market Intelligence
  async getMarketAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/market`, {
        params: { farmId }
      });
      return {
        marketTrends: response.data.trends,
        demandForecast: response.data.forecast,
        pricePredictions: response.data.prices,
        competitorAnalysis: response.data.competitors,
        opportunities: response.data.opportunities
      };
    } catch (error) {
      console.error('Error fetching market analytics:', error);
      throw error;
    }
  }

  // Equipment Performance Analytics
  async getEquipmentAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/equipment`, {
        params: { farmId }
      });
      return {
        utilization: response.data.utilization,
        maintenance: response.data.maintenance,
        efficiency: response.data.efficiency,
        costAnalysis: response.data.costs,
        recommendations: response.data.recommendations
      };
    } catch (error) {
      console.error('Error fetching equipment analytics:', error);
      throw error;
    }
  }

  // Sustainability Metrics
  async getSustainabilityAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/sustainability`, {
        params: { farmId }
      });
      return {
        carbonFootprint: response.data.carbonFootprint,
        waterConservation: response.data.waterConservation,
        biodiversity: response.data.biodiversity,
        soilHealth: response.data.soilHealth,
        sustainabilityScore: response.data.score
      };
    } catch (error) {
      console.error('Error fetching sustainability analytics:', error);
      throw error;
    }
  }

  // Custom Report Generation
  async generateCustomReport(farmId, metrics) {
    try {
      const response = await axios.post(`${this.baseURL}/analytics/custom-report`, {
        farmId,
        metrics
      });
      return response.data;
    } catch (error) {
      console.error('Error generating custom report:', error);
      throw error;
    }
  }

  // Predictive Analytics
  async getPredictiveAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/predictive`, {
        params: { farmId }
      });
      return {
        yieldPredictions: response.data.yield,
        marketPredictions: response.data.market,
        weatherPredictions: response.data.weather,
        riskAssessment: response.data.risk,
        recommendations: response.data.recommendations
      };
    } catch (error) {
      console.error('Error fetching predictive analytics:', error);
      throw error;
    }
  }

  // Advanced Analytics Features
  
  // Labor Analytics
  async getLaborAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/labor`, {
        params: { farmId }
      });
      return {
        productivity: response.data.productivity,
        costs: response.data.costs,
        scheduling: response.data.scheduling,
        skillsMatrix: response.data.skillsMatrix,
        trainingNeeds: response.data.trainingNeeds,
        performanceMetrics: response.data.performanceMetrics
      };
    } catch (error) {
      console.error('Error fetching labor analytics:', error);
      throw error;
    }
  }

  // Supply Chain Analytics
  async getSupplyChainAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/supply-chain`, {
        params: { farmId }
      });
      return {
        supplierPerformance: response.data.supplierPerformance,
        inventoryLevels: response.data.inventoryLevels,
        deliveryMetrics: response.data.deliveryMetrics,
        costAnalysis: response.data.costAnalysis,
        riskAssessment: response.data.riskAssessment,
        optimizationOpportunities: response.data.optimization
      };
    } catch (error) {
      console.error('Error fetching supply chain analytics:', error);
      throw error;
    }
  }

  // Quality Control Analytics
  async getQualityControlAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/quality`, {
        params: { farmId }
      });
      return {
        productQuality: response.data.productQuality,
        defectRates: response.data.defectRates,
        complianceMetrics: response.data.compliance,
        inspectionResults: response.data.inspections,
        improvementSuggestions: response.data.suggestions
      };
    } catch (error) {
      console.error('Error fetching quality control analytics:', error);
      throw error;
    }
  }

  // Pest Management Analytics
  async getPestManagementAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/pest-management`, {
        params: { farmId }
      });
      return {
        pestIncidents: response.data.incidents,
        treatmentEffectiveness: response.data.effectiveness,
        preventiveMeasures: response.data.prevention,
        naturalPredators: response.data.predators,
        riskZones: response.data.riskZones
      };
    } catch (error) {
      console.error('Error fetching pest management analytics:', error);
      throw error;
    }
  }

  // Biodiversity Analytics
  async getBiodiversityAnalytics(farmId) {
    try {
      const response = await axios.get(`${this.baseURL}/analytics/biodiversity`, {
        params: { farmId }
      });
      return {
        speciesCount: response.data.speciesCount,
        habitatHealth: response.data.habitatHealth,
        pollinatorActivity: response.data.pollinators,
        ecosystemServices: response.data.ecosystemServices,
        conservationMetrics: response.data.conservation
      };
    } catch (error) {
      console.error('Error fetching biodiversity analytics:', error);
      throw error;
    }
  }

  // Export Functionality

  // Export to Excel
  async exportToExcel(data, filename = 'farm-analytics.xlsx') {
    try {
      const wb = XLSX.utils.book_new();
      
      // Convert each analytics section to worksheet
      Object.entries(data).forEach(([sheetName, sheetData]) => {
        const ws = XLSX.utils.json_to_sheet(this._flattenData(sheetData));
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
      });

      // Generate Excel file
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, filename);
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      throw error;
    }
  }

  // Export to PDF
  async exportToPDF(data, filename = 'farm-analytics.pdf') {
    try {
      const doc = new jsPDF();
      
      Object.entries(data).forEach(([section, sectionData], index) => {
        if (index > 0) doc.addPage();
        
        // Add section header
        doc.setFontSize(16);
        doc.text(section.charAt(0).toUpperCase() + section.slice(1), 14, 15);
        
        // Convert section data to table
        const tableData = this._prepareDataForPDF(sectionData);
        doc.autoTable({
          startY: 25,
          head: [['Metric', 'Value']],
          body: tableData,
          theme: 'grid'
        });
      });

      doc.save(filename);
    } catch (error) {
      console.error('Error exporting to PDF:', error);
      throw error;
    }
  }

  // Export to CSV
  async exportToCSV(data, filename = 'farm-analytics.csv') {
    try {
      const csvData = this._convertToCSV(data);
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, filename);
    } catch (error) {
      console.error('Error exporting to CSV:', error);
      throw error;
    }
  }

  // Helper methods for data formatting
  _flattenData(data) {
    return Object.entries(data).map(([key, value]) => ({
      metric: key,
      value: typeof value === 'object' ? JSON.stringify(value) : value
    }));
  }

  _prepareDataForPDF(data) {
    return Object.entries(data).map(([key, value]) => [
      key,
      typeof value === 'object' ? JSON.stringify(value) : value.toString()
    ]);
  }

  _convertToCSV(data) {
    const items = this._flattenData(data);
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(items[0]);
    const csv = [
      header.join(','),
      ...items.map(row => header.map(fieldName => 
        JSON.stringify(row[fieldName], replacer)).join(','))
    ].join('\r\n');
    return csv;
  }
}

export const analyticsService = new AnalyticsService();
