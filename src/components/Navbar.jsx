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
  MenuBook as BeginnerGuideIcon,
  LibraryBooks as ResourcesIcon,
  LocationOn as StateResourcesIcon,
  EmojiEmotions as BloopersIcon,
  Volunteer as GleaningIcon,
  Agriculture as FarmerIcon,
  Science as SmartCropIcon,
  Cloud as WeatherIcon,
  ShowChart as MarketIcon,
  Build as OptimizationIcon,
  Construction as EquipmentIcon,
  People as CommunityIcon,
  Architecture as DesignsIcon,
  PlayArrow as DemoIcon,
  Folder as DirectoryIcon,
  CalendarMonth as CalendarMonthIcon,
  Upgrade as UpgradeIcon
} from '@mui/icons-material';

const SEASONAL_EVENTS_STYLE = {
  backgroundColor: 'yellow',
  color: '#000000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#ffeb3b',
  }
};

const UPGRADE_STYLE = {
  backgroundColor: '#1976d2',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#1565c0',
  }
};

export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  
  const topNavItems = [
    { name: 'BEGINNER GUIDE', path: '/beginner-guide', icon: <BeginnerGuideIcon /> },
    { name: 'RESOURCES', path: '/resources', icon: <ResourcesIcon /> },
    { name: 'STATE RESOURCES', path: '/state-resources', icon: <StateResourcesIcon /> },
    { name: 'BLOOPERS', path: '/bloopers', icon: <BloopersIcon /> },
    { name: 'GLEANING PROGRAMS', path: '/gleaning-programs', icon: <GleaningIcon /> },
    { name: 'BEGINNER FARMER', path: '/beginner-farmer', icon: <FarmerIcon /> },
    { name: 'SMART CROP PLANNING', path: '/smart-crop-planning', icon: <SmartCropIcon /> },
    { name: 'PRECISION WEATHER', path: '/precision-weather', icon: <WeatherIcon /> },
    { name: 'MARKET INTELLIGENCE', path: '/market-intelligence', icon: <MarketIcon /> }
  ];

  const bottomNavItems = [
    { name: 'RESOURCE OPTIMIZATION', path: '/resource-optimization', icon: <OptimizationIcon /> },
    { name: 'EQUIPMENT MANAGEMENT', path: '/equipment-management', icon: <EquipmentIcon /> },
    { name: 'COMMUNITY HUB', path: '/community-hub', icon: <CommunityIcon /> },
    { name: 'FARM DESIGNS', path: '/farm-designs', icon: <DesignsIcon /> },
    { name: 'TRY DEMO', path: '/try-demo', icon: <DemoIcon /> },
    { name: 'RESOURCE DIRECTORY', path: '/resource-directory', icon: <DirectoryIcon /> },
    { name: 'WEATHER', path: '/weather', icon: <WeatherIcon /> },
    { name: 'MARKET PRICES', path: '/market-prices', icon: <MarketIcon /> },
    { 
      name: 'SEASONAL EVENTS', 
      path: '/seasonal-events', 
      icon: <CalendarMonthIcon />,
      style: SEASONAL_EVENTS_STYLE
    },
    { 
      name: 'UPGRADE', 
      path: '/upgrade', 
      icon: <UpgradeIcon />,
      style: UPGRADE_STYLE
    }
  ];

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ flexWrap: 'wrap', minHeight: '48px' }}>
          <Box sx={{ display: 'flex', flexGrow: 1, flexWrap: 'wrap', gap: 0.5 }}>
            {topNavItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                startIcon={item.icon}
                size="small"
                sx={{
                  fontSize: '0.75rem',
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
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ flexWrap: 'wrap', minHeight: '48px' }}>
          <Box sx={{ display: 'flex', flexGrow: 1, flexWrap: 'wrap', gap: 0.5 }}>
            {bottomNavItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                startIcon={item.icon}
                size="small"
                sx={{
                  fontSize: '0.75rem',
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
    </>
  );
}
