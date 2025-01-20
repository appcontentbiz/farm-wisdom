import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Tabs,
  Tab,
  Button,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import {
  CloudDownload as DownloadIcon,
  FilterList as FilterIcon,
} from '@mui/icons-material';
import { analyticsService } from '../../../services/enterprise/analytics';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const DetailedAnalyticsView = ({ farmId }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [exportFormat, setExportFormat] = useState('xlsx');

  useEffect(() => {
    fetchDetailedAnalytics();
  }, [farmId, activeTab]);

  const fetchDetailedAnalytics = async () => {
    setLoading(true);
    try {
      const analyticsData = await Promise.all([
        analyticsService.getLaborAnalytics(farmId),
        analyticsService.getSupplyChainAnalytics(farmId),
        analyticsService.getQualityControlAnalytics(farmId),
        analyticsService.getPestManagementAnalytics(farmId),
        analyticsService.getBiodiversityAnalytics(farmId),
      ]);

      setData({
        labor: analyticsData[0],
        supplyChain: analyticsData[1],
        qualityControl: analyticsData[2],
        pestManagement: analyticsData[3],
        biodiversity: analyticsData[4],
      });
    } catch (error) {
      console.error('Error fetching detailed analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      switch (exportFormat) {
        case 'xlsx':
          await analyticsService.exportToExcel(data, `farm-analytics-${farmId}.xlsx`);
          break;
        case 'pdf':
          await analyticsService.exportToPDF(data, `farm-analytics-${farmId}.pdf`);
          break;
        case 'csv':
          await analyticsService.exportToCSV(data, `farm-analytics-${farmId}.csv`);
          break;
        default:
          console.error('Unsupported export format');
      }
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  const renderLaborAnalytics = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Productivity Trends</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.labor?.productivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="efficiency" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Labor Costs Distribution</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.labor?.costs}
                  dataKey="value"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderSupplyChainAnalytics = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Inventory Levels</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data.supplyChain?.inventoryLevels}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="level" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Supplier Performance</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.supplyChain?.supplierPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="supplier" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderQualityControlAnalytics = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Product Quality Trends</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.qualityControl?.productQuality}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="quality" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Defect Analysis</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.qualityControl?.defectRates}
                  dataKey="value"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#82ca9d"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Detailed Analytics</Typography>
        <Box>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleExport}
            sx={{ mr: 2 }}
          >
            Export
          </Button>
          <IconButton>
            <FilterIcon />
          </IconButton>
        </Box>
      </Box>

      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3 }}
      >
        <Tab label="Labor" />
        <Tab label="Supply Chain" />
        <Tab label="Quality Control" />
        <Tab label="Pest Management" />
        <Tab label="Biodiversity" />
      </Tabs>

      {activeTab === 0 && renderLaborAnalytics()}
      {activeTab === 1 && renderSupplyChainAnalytics()}
      {activeTab === 2 && renderQualityControlAnalytics()}
      {/* Add similar sections for Pest Management and Biodiversity */}
    </Box>
  );
};

export default DetailedAnalyticsView;
