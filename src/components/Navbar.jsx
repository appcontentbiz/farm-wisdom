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
  Agriculture as FarmIcon,
  Build as BuildIcon,
  People as PeopleIcon,
  Architecture as ArchitectureIcon,
  CalendarMonth as CalendarMonthIcon
} from '@mui/icons-material';

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
    { name: 'Smart Crop Planning', path: '/smart-crop-planning', icon: <FarmIcon /> },
    { 
      name: 'Seasonal Events', 
      path: '/seasonal-events', 
      icon: <CalendarMonthIcon />,
      style: SEASONAL_EVENTS_STYLE
    },
    { name: 'Equipment Management', path: '/equipment-management', icon: <BuildIcon /> },
    { name: 'Community Hub', path: '/community-hub', icon: <PeopleIcon /> },
    { name: 'Farm Designs', path: '/farm-designs', icon: <ArchitectureIcon /> }
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
