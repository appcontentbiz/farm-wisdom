import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const DashboardCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    boxShadow: theme.shadows[8],
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease-in-out',
  },
}));

const FarmDataDashboard = () => {
  // Placeholder data
  const placeholderData = {
    soil: {
      moisture: 0.35,
      temperature: 22.5,
      nitrogen: 1.2,
      phosphorus: 0.8,
      potassium: 1.1,
    },
    weather: {
      condition: 'Partly Cloudy',
      temperature: 24.5,
      humidity: 65,
      windSpeed: 12,
      precipitation: 0,
    },
    markets: [
      {
        id: 1,
        name: 'Local Farm Market',
        address: '123 Farm Road',
        distance: 2.5,
        hours: '8:00 AM - 6:00 PM',
        products: ['Vegetables', 'Fruits', 'Dairy'],
      },
      {
        id: 2,
        name: 'Community Farmers Market',
        address: '456 Garden Street',
        distance: 4.1,
        hours: '9:00 AM - 5:00 PM',
        products: ['Organic Produce', 'Honey', 'Eggs'],
      },
    ],
    resources: {
      soil: [
        {
          id: 'soil_1',
          provider: 'Community Garden A',
          location: '789 Green Ave',
          quantity: '500 kg',
          distance: 1.8,
          contact: '555-0123',
          available_until: '2025-02-21',
        },
      ],
      mulch: [
        {
          id: 'mulch_1',
          provider: 'City Parks Department',
          location: '321 Park Road',
          quantity: '1000 kg',
          distance: 3.2,
          contact: '555-0456',
          available_until: '2025-02-14',
        },
      ],
    },
  };

  return (
    <Box p={3}>
      <Alert severity="info" sx={{ mb: 3 }}>
        Note: This dashboard currently shows placeholder data. Real-time data service is coming soon.
      </Alert>
      
      <Grid container spacing={3}>
        {/* Soil Data */}
        <Grid item xs={12} md={6}>
          <DashboardCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Soil Conditions
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Moisture" 
                    secondary={`${placeholderData.soil.moisture * 100}%`} 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Temperature" 
                    secondary={`${placeholderData.soil.temperature}°C`} 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Nitrogen" 
                    secondary={`${placeholderData.soil.nitrogen} index`} 
                  />
                </ListItem>
              </List>
            </CardContent>
          </DashboardCard>
        </Grid>

        {/* Weather Data */}
        <Grid item xs={12} md={6}>
          <DashboardCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current Weather
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Condition" 
                    secondary={placeholderData.weather.condition} 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Temperature" 
                    secondary={`${placeholderData.weather.temperature}°C`} 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Humidity" 
                    secondary={`${placeholderData.weather.humidity}%`} 
                  />
                </ListItem>
              </List>
            </CardContent>
          </DashboardCard>
        </Grid>

        {/* Farm Markets */}
        <Grid item xs={12}>
          <DashboardCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Nearby Farm Markets
              </Typography>
              <List>
                {placeholderData.markets.map((market) => (
                  <React.Fragment key={market.id}>
                    <ListItem>
                      <ListItemText
                        primary={market.name}
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="text.primary">
                              {market.address}
                            </Typography>
                            <br />
                            {`${market.distance} km away • ${market.hours}`}
                            <br />
                            {`Products: ${market.products.join(', ')}`}
                          </>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </DashboardCard>
        </Grid>

        {/* Free Resources */}
        <Grid item xs={12}>
          <DashboardCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Free Resources
              </Typography>
              {Object.entries(placeholderData.resources).map(([type, offers]) => (
                <Box key={type} mb={2}>
                  <Typography variant="subtitle1" gutterBottom sx={{ textTransform: 'capitalize' }}>
                    {type}
                  </Typography>
                  <List>
                    {offers.map((offer) => (
                      <React.Fragment key={offer.id}>
                        <ListItem>
                          <ListItemText
                            primary={`${offer.provider} (${offer.distance} km away)`}
                            secondary={
                              <>
                                <Typography component="span" variant="body2" color="text.primary">
                                  {offer.location}
                                </Typography>
                                <br />
                                {`Quantity: ${offer.quantity}`}
                                <br />
                                {`Available until: ${offer.available_until}`}
                                <br />
                                {`Contact: ${offer.contact}`}
                              </>
                            }
                          />
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
              ))}
            </CardContent>
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FarmDataDashboard;
