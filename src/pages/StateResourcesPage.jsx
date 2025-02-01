import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import StateResourcesNav from '../components/StateResources/StateResourcesNav';

function StateResourcesPage() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Agricultural Resources by State
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 4 }}>
          Explore farmers' markets, growing seasons, and agricultural information across the United States
        </Typography>
        <StateResourcesNav />
      </Box>
    </Container>
  );
}

export default StateResourcesPage;
