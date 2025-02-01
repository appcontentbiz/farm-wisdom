import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import BloopersGrid from '../components/Bloopers/BloopersGrid';

function BloopersPage() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Farm Life Bloopers
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 4 }}>
          Enjoy these hilarious moments from around the farm! Click on any card to watch the video.
        </Typography>
        <BloopersGrid />
      </Box>
    </Container>
  );
}

export default BloopersPage;
