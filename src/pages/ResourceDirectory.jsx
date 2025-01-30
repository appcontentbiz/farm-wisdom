import React from 'react';
import { Container } from '@mui/material';
import { AgResourceDirectory } from '../components/AgResourceDirectory';

const ResourceDirectory = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <AgResourceDirectory />
    </Container>
  );
};

export default ResourceDirectory;
