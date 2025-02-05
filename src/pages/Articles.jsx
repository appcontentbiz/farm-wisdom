import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  Link,
  Divider,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Articles = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Farming Articles
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Permaculture: A Sustainable Approach to Modern Farming
        </Typography>
        
        <Typography variant="body1" paragraph>
          Permaculture represents a holistic approach to agriculture that emphasizes creating sustainable and self-sufficient ecosystems. This comprehensive guide explores the principles, benefits, and practical implementation of permaculture in modern farming.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Key Principles of Permaculture
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Earth Care
                </Typography>
                <Typography variant="body2">
                  Focusing on soil health, biodiversity, and natural resource conservation. Recent studies show that permaculture practices can increase soil organic matter by up to 30% within 3-5 years.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  People Care
                </Typography>
                <Typography variant="body2">
                  Ensuring food security, community resilience, and sustainable livelihoods. Permaculture farms report 40% higher community engagement compared to conventional farms.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom>
          Implementation Strategies
        </Typography>

        <Typography variant="body1" paragraph>
          Successful permaculture implementation requires careful planning and consideration of various factors:
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="success.main">
                  Design Principles
                </Typography>
                <Typography variant="body2">
                  • Zone planning for efficient energy use
                  • Water management and conservation
                  • Integration of diverse plant species
                  • Natural pest management systems
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="success.main">
                  Resource Management
                </Typography>
                <Typography variant="body2">
                  • Composting and soil building
                  • Rainwater harvesting
                  • Renewable energy integration
                  • Waste reduction strategies
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="success.main">
                  Ecosystem Development
                </Typography>
                <Typography variant="body2">
                  • Companion planting techniques
                  • Food forest establishment
                  • Wildlife habitat creation
                  • Beneficial insect attraction
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom>
          Research and Resources
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" paragraph>
            Recent studies and resources supporting permaculture practices:
          </Typography>
          <ul>
            <li>
              <Link href="https://www.sciencedirect.com/science/article/pii/S2211912419300027" target="_blank" rel="noopener noreferrer">
                Journal of Sustainable Agriculture Research <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
              </Link>
              : Comprehensive study on permaculture yields and soil health
            </li>
            <li>
              <Link href="https://www.permaculturenews.org/resources" target="_blank" rel="noopener noreferrer">
                Permaculture Research Institute <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
              </Link>
              : Educational resources and case studies
            </li>
          </ul>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          Getting Started
        </Typography>

        <Typography variant="body1" paragraph>
          Begin your permaculture journey with these steps:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Initial Assessment
                </Typography>
                <Typography variant="body2">
                  1. Evaluate your land and resources
                  2. Study local climate patterns
                  3. Set clear goals and objectives
                  4. Create a detailed site plan
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Implementation Plan
                </Typography>
                <Typography variant="body2">
                  1. Start with small, manageable projects
                  2. Focus on soil improvement
                  3. Establish water management systems
                  4. Gradually expand your design
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Articles;
