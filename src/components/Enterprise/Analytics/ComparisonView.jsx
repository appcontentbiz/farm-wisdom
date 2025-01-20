import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { analyticsService } from '../../../services/enterprise/analytics';

const ComparisonView = ({ farmId }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [comparisonType, setComparisonType] = useState('industry');
  const [region, setRegion] = useState('global');
  const [timeframe, setTimeframe] = useState('year');

  useEffect(() => {
    fetchComparisonData();
  }, [farmId, comparisonType, region, timeframe]);

  const fetchComparisonData = async () => {
    setLoading(true);
    try {
      // Fetch all comparison metrics
      const [
        yieldComparison,
        resourceComparison,
        financialComparison,
        qualityComparison,
        sustainabilityComparison,
      ] = await Promise.all([
        analyticsService.getYieldAnalytics(farmId, timeframe),
        analyticsService.getResourceAnalytics(farmId),
        analyticsService.getFinancialAnalytics(farmId, timeframe),
        analyticsService.getQualityControlAnalytics(farmId),
        analyticsService.getSustainabilityAnalytics(farmId),
      ]);

      setData({
        yield: yieldComparison,
        resource: resourceComparison,
        financial: financialComparison,
        quality: qualityComparison,
        sustainability: sustainabilityComparison,
      });
    } catch (error) {
      console.error('Error fetching comparison data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderOverallComparison = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Overall Performance Comparison</Typography>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={data.overall}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Your Farm"
              dataKey="farm"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Industry Average"
              dataKey="industry"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );

  const renderMetricComparison = (title, data, metrics) => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="farm" name="Your Farm" fill="#8884d8" />
            <Line
              type="monotone"
              dataKey="industry"
              name="Industry Average"
              stroke="#82ca9d"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
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
        <Typography variant="h4">Performance Benchmarking</Typography>
        <Box display="flex" gap={2}>
          <FormControl size="small">
            <InputLabel>Comparison</InputLabel>
            <Select
              value={comparisonType}
              label="Comparison"
              onChange={(e) => setComparisonType(e.target.value)}
            >
              <MenuItem value="industry">Industry Average</MenuItem>
              <MenuItem value="top">Top Performers</MenuItem>
              <MenuItem value="similar">Similar Farms</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel>Region</InputLabel>
            <Select
              value={region}
              label="Region"
              onChange={(e) => setRegion(e.target.value)}
            >
              <MenuItem value="global">Global</MenuItem>
              <MenuItem value="local">Local</MenuItem>
              <MenuItem value="regional">Regional</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel>Timeframe</InputLabel>
            <Select
              value={timeframe}
              label="Timeframe"
              onChange={(e) => setTimeframe(e.target.value)}
            >
              <MenuItem value="month">Last Month</MenuItem>
              <MenuItem value="quarter">Last Quarter</MenuItem>
              <MenuItem value="year">Last Year</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={() => analyticsService.exportToExcel(data, 'comparison-report.xlsx')}
          >
            Export Report
          </Button>
        </Box>
      </Box>

      {renderOverallComparison()}

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {renderMetricComparison('Yield Comparison', data.yield, ['yield', 'quality'])}
        </Grid>
        <Grid item xs={12} md={6}>
          {renderMetricComparison('Resource Efficiency', data.resource, ['water', 'energy'])}
        </Grid>
        <Grid item xs={12} md={6}>
          {renderMetricComparison('Financial Performance', data.financial, ['revenue', 'profit'])}
        </Grid>
        <Grid item xs={12} md={6}>
          {renderMetricComparison('Sustainability Score', data.sustainability, ['carbon', 'biodiversity'])}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComparisonView;
