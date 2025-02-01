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
  School as EducationIcon
} from '@mui/icons-material';
import NutritiousCrops from '../components/BeginnerFarmer/NutritiousCrops';

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
          {/* Add more tabs as needed */}
        </Tabs>

        <Box>
          <TabPanel value={tabValue} index={0}>
            <NutritiousCrops />
          </TabPanel>
          {/* Add more tab panels as needed */}
        </Box>
      </Paper>
    </Container>
  );
}
