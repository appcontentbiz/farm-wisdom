import React from 'react';
import { Container, Box, Typography, Tabs, Tab } from '@mui/material';
import { AgResourceDirectory } from '../components/AgResourceDirectory';
import FarmDataDashboard from '../components/FarmDataDashboard';

const ResourceDirectory = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="resource directory tabs">
          <Tab label="Resource Directory" />
          <Tab label="Real-Time Farm Data" />
        </Tabs>
      </Box>

      {activeTab === 0 ? (
        <AgResourceDirectory />
      ) : (
        <FarmDataDashboard />
      )}
    </Container>
  );
};

export default ResourceDirectory;
