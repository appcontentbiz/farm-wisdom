import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress
} from '@mui/material';
import {
  Map,
  DirectionsCar,
  Phone,
  Info,
  Close,
  Inventory
} from '@mui/icons-material';
import { storeLocatorService } from '../../services/enterprise';

const StoreLocator = () => {
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState(10);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [inventory, setInventory] = useState(null);
  const [showInventory, setShowInventory] = useState(false);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          await searchStores(coords);
        },
        (error) => {
          setError('Error getting location: ' + error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  };

  const searchStores = async (coordinates) => {
    try {
      setLoading(true);
      setError(null);
      const response = await storeLocatorService.findNearbyStores(coordinates, radius);
      setStores(response.data);
    } catch (err) {
      setError('Error finding stores');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const viewStoreInventory = async (store) => {
    try {
      setLoading(true);
      setError(null);
      const response = await storeLocatorService.getStoreInventory(store.id);
      setInventory(response.data);
      setSelectedStore(store);
      setShowInventory(true);
    } catch (err) {
      setError('Error loading store inventory');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getDirections = (store) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${store.latitude},${store.longitude}`,
      '_blank'
    );
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Find Nearby Garden Centers & Farm Supply Stores
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter address or city"
            />
            <TextField
              type="number"
              label="Radius (miles)"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              sx={{ width: 150 }}
            />
            <Button
              variant="contained"
              onClick={getCurrentLocation}
              startIcon={<Map />}
            >
              Find Stores
            </Button>
          </Box>

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <List>
            {stores.map((store) => (
              <ListItem
                key={store.id}
                divider
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: 1,
                  py: 2
                }}
              >
                <ListItemText
                  primary={store.name}
                  secondary={
                    <>
                      {store.address}
                      <br />
                      {store.distance.toFixed(1)} miles away
                      <Box sx={{ mt: 1 }}>
                        {store.categories.map((category) => (
                          <Chip
                            key={category}
                            label={category}
                            size="small"
                            sx={{ mr: 0.5, mb: 0.5 }}
                          />
                        ))}
                      </Box>
                    </>
                  }
                />
                <ListItemSecondaryAction sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    edge="end"
                    onClick={() => window.open(`tel:${store.phone}`, '_self')}
                  >
                    <Phone />
                  </IconButton>
                  <IconButton edge="end" onClick={() => getDirections(store)}>
                    <DirectionsCar />
                  </IconButton>
                  <IconButton edge="end" onClick={() => viewStoreInventory(store)}>
                    <Inventory />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Dialog
        open={showInventory}
        onClose={() => setShowInventory(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {selectedStore?.name} - Current Inventory
          <IconButton
            sx={{ position: 'absolute', right: 8, top: 8 }}
            onClick={() => setShowInventory(false)}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {inventory && (
            <List>
              {inventory.categories.map((category) => (
                <div key={category.name}>
                  <Typography variant="h6" gutterBottom>
                    {category.name}
                  </Typography>
                  <List>
                    {category.items.map((item) => (
                      <ListItem key={item.id} divider>
                        <ListItemText
                          primary={item.name}
                          secondary={
                            <>
                              Price: ${item.price.toFixed(2)}
                              <br />
                              Stock: {item.inStock ? 'In Stock' : 'Out of Stock'}
                            </>
                          }
                        />
                        <Chip
                          label={item.inStock ? 'In Stock' : 'Out of Stock'}
                          color={item.inStock ? 'success' : 'error'}
                        />
                      </ListItem>
                    ))}
                  </List>
                </div>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowInventory(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StoreLocator;
