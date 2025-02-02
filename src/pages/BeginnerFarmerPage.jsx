import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import {
  Agriculture as AgricultureIcon,
  LocalFlorist as CropsIcon,
  School as EducationIcon,
  Grass as SoilIcon,
  CalendarMonth as SeasonIcon,
  Build as StartupIcon
} from '@mui/icons-material';
import NutritiousCrops from '../components/BeginnerFarmer/NutritiousCrops';
import StartupGuide from '../components/BeginnerFarmer/StartupGuide';
import SeasonalPlanning from '../components/BeginnerFarmer/SeasonalPlanning';
import SoilManagement from '../components/BeginnerFarmer/SoilManagement';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ padding: '24px 0' }}>
      {value === index && children}
    </div>
  );
}

export default function BeginnerFarmerPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Beginner Farmer Guide
      </Typography>

      <Paper elevation={3}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab 
            icon={<CropsIcon />} 
            label="Nutritious Crops" 
            iconPosition="start"
          />
          <Tab 
            icon={<StartupIcon />} 
            label="Startup Guide" 
            iconPosition="start"
          />
          <Tab 
            icon={<SeasonIcon />} 
            label="Seasonal Planning" 
            iconPosition="start"
          />
          <Tab 
            icon={<SoilIcon />} 
            label="Soil Management" 
            iconPosition="start"
          />
        </Tabs>

        <Box>
          <TabPanel value={tabValue} index={0}>
            <NutritiousCrops />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <StartupGuide />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <SeasonalPlanning />
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <SoilManagement />
          </TabPanel>
        </Box>
      </Paper>
    </Container>
  );
}
