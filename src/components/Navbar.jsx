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
  backgroundColor: '#87CEEB', // Sky blue
  color: '#000000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#B0E2FF', // Lighter sky blue on hover
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
      style: {
        backgroundColor: 'yellow',
        '&:hover': {
          backgroundColor: '#ffeb3b',
        },
        '& .MuiListItemIcon-root': {
          color: 'black',
        },
        '& .MuiListItemText-primary': {
          color: 'black',
          fontWeight: 'bold'
        }
      }
    },
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
                color: 'inherit',
                textTransform: 'none',
                fontWeight: location.pathname === item.path ? 600 : 400,
                px: 2,
                py: 1,
                borderRadius: 1,
                ...(item.style || {}),
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
