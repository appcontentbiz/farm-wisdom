import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

const Resources = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Farming Resources
      </Typography>
      
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          The State of Modern Farming: Challenges and Opportunities
        </Typography>
        
        <Typography variant="body1" paragraph>
          The landscape of modern farming has undergone significant transformations in recent years, facing both unprecedented challenges and emerging opportunities. Between 2020 and 2025, the agricultural sector has experienced a complex mix of technological advancement and environmental pressures, reshaping how we think about food production and sustainability.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Current Challenges in Agriculture
        </Typography>

        <Typography variant="body1" paragraph>
          Recent data shows that approximately 12% of traditional family farms have ceased operations in the past five years. The primary factors contributing to these closures include:
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Climate Volatility
                </Typography>
                <Typography variant="body2">
                  Extreme weather events have increased by 35% since 2020, leading to crop losses exceeding $18 billion annually. Unpredictable rainfall patterns and extended droughts have particularly impacted traditional farming methods in the Midwest and California's Central Valley.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Labor Shortages
                </Typography>
                <Typography variant="body2">
                  The agricultural sector faces a 27% workforce deficit, with an estimated 2.4 million unfilled positions in 2024. The aging farmer population, with an average age of 57.5 years, compounds this challenge as younger generations pursue urban opportunities.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom>
          Emerging Success Stories
        </Typography>

        <Typography variant="body1" paragraph>
          While traditional farming faces challenges, several alternative farming methods have shown remarkable growth:
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="success.main">
                  Vertical Farming
                </Typography>
                <Typography variant="body2">
                  The vertical farming industry has grown by 189% since 2020, with urban centers leading adoption. These systems use 95% less water than traditional farming while producing up to 350% more yield per square foot.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="success.main">
                  Hydroponic Systems
                </Typography>
                <Typography variant="body2">
                  Hydroponic farming has seen a 145% increase in adoption, particularly in regions with water scarcity. These systems have demonstrated 30-50% faster growth rates compared to traditional soil-based methods.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="success.main">
                  Smart Greenhouses
                </Typography>
                <Typography variant="body2">
                  Technology-enabled greenhouse farming has expanded by 78%, with AI-driven climate control systems reducing energy costs by up to 40% while increasing crop yields by 25%.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom>
          Economic Impact
        </Typography>

        <Typography variant="body1" paragraph>
          The agricultural sector's transformation has significant economic implications. Traditional farming operations have seen a 23% decline in profit margins, while tech-enabled farming methods report margin improvements of 15-40%. Market consolidation has accelerated, with corporate farming operations acquiring 8% of family farms annually.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Path Forward: Supporting Agricultural Sustainability
        </Typography>

        <Typography variant="body1" paragraph>
          To ensure the longevity of farming operations, several key initiatives have shown promise:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Technology Integration
                </Typography>
                <Typography variant="body2">
                  • Implementation of IoT sensors for precision agriculture
                  • Adoption of automated systems reducing labor dependencies
                  • Integration of AI for crop management and yield prediction
                  • Development of drought-resistant crop varieties
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Policy Support
                </Typography>
                <Typography variant="body2">
                  • Enhanced government subsidies for sustainable farming practices
                  • Educational programs for next-generation farmers
                  • Tax incentives for technology adoption
                  • Improved access to agricultural loans and insurance
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Conclusion
          </Typography>
          <Typography variant="body1" paragraph>
            The future of farming lies in the successful integration of traditional agricultural wisdom with modern technology and sustainable practices. While the challenges facing traditional farming are significant, the rise of alternative methods and supportive initiatives provides hope for the industry's future. Success will require a coordinated effort between farmers, technology providers, and policymakers to create a resilient and sustainable agricultural sector.
          </Typography>
          <Typography variant="body1">
            By embracing innovation while preserving valuable traditional practices, the farming industry can adapt to modern challenges while ensuring food security for future generations. The key lies in making these transitions accessible and economically viable for farmers of all scales.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Resources;
