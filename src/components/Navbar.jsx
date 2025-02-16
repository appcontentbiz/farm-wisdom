import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Home as HomeIcon,
  AttachMoney as MoneyIcon,
  Cloud as WeatherIcon,
  Agriculture as FarmIcon,
  LocalLibrary as ResourcesIcon,
  CalendarMonth as CalendarMonthIcon
} from '@mui/icons-material';

const MARKET_PRICES_STYLE = {
  backgroundColor: '#87CEEB',
  color: '#000000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#B0E2FF',
  }
};

const SEASONAL_EVENTS_STYLE = {
  backgroundColor: 'yellow',
  color: '#000000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#ffeb3b',
  }
};

export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { 
      name: 'Market Prices', 
      path: '/market-prices', 
      icon: <MoneyIcon />,
      style: MARKET_PRICES_STYLE
    },
    { name: 'Weather', path: '/weather', icon: <WeatherIcon /> },
    { name: 'Smart Crop Planning', path: '/smart-crop-planning', icon: <FarmIcon /> },
    { 
      name: 'Seasonal Events', 
      path: '/seasonal-events', 
      icon: <CalendarMonthIcon />,
      style: SEASONAL_EVENTS_STYLE
    },
    { name: 'Resources', path: '/resources', icon: <ResourcesIcon /> }
  ];

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 2 }}>
          Farm Wisdom
        </Typography>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              startIcon={item.icon}
              sx={{
                mx: 1,
                ...(location.pathname === item.path && {
                  backgroundColor: theme.palette.action.selected
                }),
                ...(item.style || {})
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
