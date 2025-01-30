import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  IconButton,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Language as WebsiteIcon,
  AccessTime as TimeIcon,
  Payment as PaymentIcon,
  Info as InfoIcon,
  NavigateNext as NavigateNextIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteEmptyIcon
} from '@mui/icons-material';
import * as stateResources from '../data/state-resources';

const ResourceTypes = {
  MARKETS: 'farmersMarkets',
  FOODBANKS: 'foodBanks',
  GLEANING: 'gleaningPrograms',
  DISTRIBUTION: 'distributionPartners'
};

const StateResourceDirectory = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const getResourcesByType = () => {
    if (!selectedState) return [];
    const state = stateResources[selectedState];
    const resourceType = Object.values(ResourceTypes)[selectedTab];
    return state[resourceType] || [];
  };

  const renderMarket = (market) => (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">{market.name}</Typography>
          <IconButton onClick={() => toggleFavorite(market.name)}>
            {favorites.includes(market.name) ? 
              <FavoriteIcon color="error" /> : 
              <FavoriteEmptyIcon />
            }
          </IconButton>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List dense>
              <ListItem>
                <ListItemIcon><LocationIcon /></ListItemIcon>
                <ListItemText primary={market.address} />
              </ListItem>
              <ListItem>
                <ListItemIcon><PhoneIcon /></ListItemIcon>
                <ListItemText primary={market.phone} />
              </ListItem>
              <ListItem>
                <ListItemIcon><TimeIcon /></ListItemIcon>
                <ListItemText primary={market.schedule} />
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" gutterBottom>Products:</Typography>
            <Box sx={{ mb: 2 }}>
              {market.products.map((product, idx) => (
                <Chip 
                  key={idx} 
                  label={product} 
                  size="small" 
                  sx={{ mr: 1, mb: 1 }} 
                />
              ))}
            </Box>
            
            <Typography variant="subtitle2" gutterBottom>Payment Options:</Typography>
            <Box>
              {market.paymentOptions.map((option, idx) => (
                <Chip 
                  key={idx} 
                  label={option} 
                  size="small" 
                  variant="outlined"
                  sx={{ mr: 1, mb: 1 }} 
                />
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            startIcon={<WebsiteIcon />}
            href={`https://${market.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </Button>
          <Button 
            variant="outlined"
            startIcon={<LocationIcon />}
            href={`https://maps.google.com/?q=${market.coordinates.lat},${market.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Map
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        State Resource Directory
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Select State"
            value={selectedState}
            onChange={handleStateChange}
          >
            {Object.keys(stateResources).map((state) => (
              <MenuItem key={state} value={state}>
                {stateResources[state].state}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            label="Search resources"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Farmers Markets" />
          <Tab label="Food Banks" />
          <Tab label="Gleaning Programs" />
          <Tab label="Distribution Partners" />
        </Tabs>
      </Box>

      <Box sx={{ mt: 3 }}>
        {!selectedState ? (
          <Typography variant="h6" color="text.secondary" align="center">
            Please select a state to view resources
          </Typography>
        ) : (
          getResourcesByType().map((resource, index) => (
            <Box key={index}>
              {selectedTab === 0 && renderMarket(resource)}
              {/* Add other resource type renderers here */}
            </Box>
          ))
        )}
      </Box>
    </Container>
  );
};

export default StateResourceDirectory;
