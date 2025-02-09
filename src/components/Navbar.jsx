import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  Home as HomeIcon,
  AttachMoney as MoneyIcon,
  Cloud as WeatherIcon,
  Agriculture as FarmIcon,
  LocalLibrary as ResourcesIcon
} from '@mui/icons-material';

export default function Navbar() {
  const theme = useTheme();
  
  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { 
      name: 'Market Prices', 
      path: '/market-prices', 
      icon: <MoneyIcon />,
      color: '#FFD700' // Gold color
    },
    { name: 'Weather', path: '/weather', icon: <WeatherIcon /> },
    { name: 'Smart Crop Planning', path: '/smart-crop-planning', icon: <FarmIcon /> },
    { name: 'Resources', path: '/resources', icon: <ResourcesIcon /> }
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 4 }}>
          Farm Wisdom
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={RouterLink}
              to={item.path}
              startIcon={item.icon}
              sx={{
                color: item.color || 'inherit',
                '&:hover': {
                  backgroundColor: item.color ? `${item.color}22` : 'inherit',
                },
                textTransform: 'none',
                fontWeight: item.color ? 600 : 400
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
