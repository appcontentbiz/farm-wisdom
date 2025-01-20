import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Treemap,
  Sankey,
  Scatter,
  ScatterChart,
  TreemapChart,
  SankeyChart,
  Sunburst,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { HeatMapGrid } from '@nivo/heatmap';
import { Chord } from '@nivo/chord';
import { Calendar } from '@nivo/calendar';
import { NetworkFrame } from 'semiotic';

// Treemap Visualization for Resource Allocation
export const ResourceTreemap = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>Resource Allocation</Typography>
      <ResponsiveContainer width="100%" height={400}>
        <Treemap
          data={data}
          dataKey="value"
          ratio={4/3}
          stroke="#fff"
          fill="#8884d8"
        >
          <Tooltip />
        </Treemap>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

// Sankey Diagram for Supply Chain Flow
export const SupplyChainSankey = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>Supply Chain Flow</Typography>
      <ResponsiveContainer width="100%" height={400}>
        <Sankey
          data={data.nodes}
          links={data.links}
          nodePadding={50}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          link={{ stroke: '#77c878' }}
        >
          <Tooltip />
        </Sankey>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

// Bubble Chart for Crop Distribution
export const CropBubbleChart = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>Crop Distribution</Typography>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <XAxis dataKey="x" name="area" />
          <YAxis dataKey="y" name="yield" />
          <ZAxis dataKey="z" range={[64, 144]} name="volume" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter
            name="Crops"
            data={data}
            fill="#8884d8"
            shape="circle"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

// Heatmap for Soil Conditions
export const SoilHeatmap = ({ data }) => {
  const theme = useTheme();
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>Soil Conditions Heatmap</Typography>
        <Box height={400}>
          <HeatMapGrid
            data={data}
            margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
            xOuterPadding={0.1}
            yOuterPadding={0.1}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -45,
              legend: 'Field Sections',
              legendPosition: 'middle',
              legendOffset: 40
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Metrics',
              legendPosition: 'middle',
              legendOffset: -40
            }}
            cellOpacity={1}
            cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
            colors={{
              type: 'sequential',
              scheme: 'blues'
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

// Chord Diagram for Resource Dependencies
export const ResourceDependencies = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>Resource Dependencies</Typography>
      <Box height={400}>
        <Chord
          data={data}
          padAngle={0.02}
          innerRadiusRatio={0.96}
          ribbonOpacity={0.5}
          ribbonBorderWidth={1}
          enableLabels={true}
          labelRotation={-90}
          ribbonHoverOpacity={0.8}
          colors={{ scheme: 'nivo' }}
        />
      </Box>
    </CardContent>
  </Card>
);

// Calendar Heatmap for Activity Tracking
export const ActivityCalendar = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>Activity Calendar</Typography>
      <Box height={400}>
        <Calendar
          data={data}
          from={data[0].day}
          to={data[data.length - 1].day}
          emptyColor="#eeeeee"
          colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
          margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
        />
      </Box>
    </CardContent>
  </Card>
);

// Network Graph for Equipment Dependencies
export const EquipmentNetwork = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>Equipment Network</Typography>
      <Box height={400}>
        <NetworkFrame
          nodes={data.nodes}
          edges={data.edges}
          nodeStyle={(d) => ({
            fill: d.color,
            stroke: "white",
            strokeWidth: 1
          })}
          edgeStyle={(d) => ({
            stroke: "#888",
            strokeWidth: 1,
            opacity: 0.5
          })}
          nodeSizeAccessor={5}
          hoverAnnotation={true}
          networkType={{ type: "force", iterations: 500 }}
        />
      </Box>
    </CardContent>
  </Card>
);

// Export all visualizations as a component
const AdvancedVisualizations = ({ data }) => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>Advanced Analytics Visualizations</Typography>
    <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))' }}>
      <ResourceTreemap data={data.resources} />
      <SupplyChainSankey data={data.supplyChain} />
      <CropBubbleChart data={data.crops} />
      <SoilHeatmap data={data.soil} />
      <ResourceDependencies data={data.dependencies} />
      <ActivityCalendar data={data.activities} />
      <EquipmentNetwork data={data.equipment} />
    </Box>
  </Box>
);

export default AdvancedVisualizations;
