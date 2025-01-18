import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../styles/StoreLocations.css';

const StoreLocations = () => {
  const [zipCode, setZipCode] = useState('');
  const [stores, setStores] = useState([
    {
      id: 1,
      name: "Farm Supply Co.",
      address: "123 Rural Road",
      city: "Farmington",
      state: "IL",
      zip: "61531",
      phone: "(309) 555-0123",
      distance: "2.3"
    },
    {
      id: 2,
      name: "Agricultural Essentials",
      address: "456 Harvest Lane",
      city: "Cropville",
      state: "IL",
      zip: "61532",
      phone: "(309) 555-0456",
      distance: "3.8"
    },
    {
      id: 3,
      name: "Farmer's Friend Store",
      address: "789 Tractor Drive",
      city: "Fieldstown",
      state: "IL",
      zip: "61533",
      phone: "(309) 555-0789",
      distance: "5.1"
    }
  ]);

  const handleSearch = () => {
    // In a real application, this would make an API call to get stores near the zipcode
    console.log('Searching for stores near:', zipCode);
  };

  return (
    <Box className="store-locations-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Find a Store
      </Typography>
      
      <Box className="search-container">
        <TextField
          label="Enter ZIP Code"
          variant="outlined"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="zip-input"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          className="search-button"
        >
          Search
        </Button>
      </Box>

      <Grid container spacing={3} className="stores-grid">
        {stores.map((store) => (
          <Grid item xs={12} sm={6} md={4} key={store.id}>
            <Card className="store-card">
              <CardContent>
                <Typography variant="h6" component="h2">
                  {store.name}
                </Typography>
                <Box className="store-info">
                  <LocationOnIcon color="primary" />
                  <Box>
                    <Typography>{store.address}</Typography>
                    <Typography>{`${store.city}, ${store.state} ${store.zip}`}</Typography>
                    <Typography>{store.phone}</Typography>
                    <Typography color="primary">
                      {store.distance} miles away
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StoreLocations;
