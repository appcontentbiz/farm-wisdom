import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  Chip,
} from '@mui/material';
import {
  Check as CheckIcon,
  Star as StarIcon,
  Diamond as DiamondIcon,
} from '@mui/icons-material';

const tiers = [
  {
    title: 'Basic',
    price: '$29/month',
    features: [
      'Basic farm management tools',
      'Weather forecasts',
      'Crop planning calendar',
      'Basic analytics',
      'Community support',
    ],
    icon: <CheckIcon />,
    color: '#4CAF50',
    buttonText: 'Start Free Trial'
  },
  {
    title: 'Professional',
    price: '$99/month',
    features: [
      'Everything in Basic, plus:',
      'Advanced crop management',
      'Equipment tracking',
      'Financial forecasting',
      'Priority support',
      'Custom reports',
      'Mobile app access',
    ],
    icon: <StarIcon />,
    color: '#2196F3',
    buttonText: 'Upgrade to Pro'
  },
  {
    title: 'Enterprise Plus',
    price: '$299/month',
    features: [
      'Everything in Professional, plus:',
      'Real-time Analytics Dashboard',
      'AI-Powered Insights',
      'Predictive Maintenance',
      'Advanced Export Options',
      'Custom Integrations',
      'Dedicated Support Team',
      'Advanced Features:',
      '- Drone Data Analysis',
      '- Smart Irrigation Analytics',
      '- Carbon Footprint Tracking',
      '- Supply Chain Optimization',
      '- Quality Control Systems',
      '- Labor Management',
      '- Resource Planning',
      'Advanced Visualizations:',
      '- Interactive Charts',
      '- Real-time Monitoring',
      '- Custom Dashboards',
      '- Performance Benchmarking',
      'Enterprise Security:',
      '- Role-based Access',
      '- Data Encryption',
      '- Audit Trails',
      '- Compliance Reports'
    ],
    icon: <DiamondIcon />,
    color: '#9C27B0',
    buttonText: 'Contact Sales',
    featured: true
  }
];

const PricingTiers = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom align="center">
      Choose Your Plan
    </Typography>
    <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
      Scale your farming operations with our flexible pricing options
    </Typography>
    
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: { 
        xs: '1fr',
        md: 'repeat(3, 1fr)'
      },
      gap: 3 
    }}>
      {tiers.map((tier) => (
        <Card
          key={tier.title}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            transform: tier.featured ? 'scale(1.05)' : 'none',
            boxShadow: tier.featured ? 8 : 1,
            '&:hover': {
              boxShadow: 6,
              transform: tier.featured ? 'scale(1.07)' : 'scale(1.02)',
              transition: 'all 0.3s ease-in-out'
            },
          }}
        >
          {tier.featured && (
            <Chip
              label="Most Popular"
              color="secondary"
              sx={{
                position: 'absolute',
                top: -12,
                right: 24,
                px: 2
              }}
            />
          )}
          
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              {React.cloneElement(tier.icon, { sx: { color: tier.color } })}
              <Typography variant="h5" component="div">
                {tier.title}
              </Typography>
            </Box>
            
            <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
              {tier.price}
            </Typography>
            
            <Divider sx={{ my: 2 }} />
            
            <List dense>
              {tier.features.map((feature, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckIcon sx={{ color: tier.color }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={feature}
                    primaryTypographyProps={{
                      variant: 'body2',
                      sx: { 
                        fontWeight: feature.includes('plus:') ? 'bold' : 'normal',
                        color: feature.includes('plus:') ? 'text.primary' : 'text.secondary'
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
          
          <Box sx={{ p: 3, pt: 0 }}>
            <Button
              variant={tier.featured ? 'contained' : 'outlined'}
              color={tier.featured ? 'secondary' : 'primary'}
              fullWidth
              size="large"
              sx={{ 
                py: 1.5,
                backgroundColor: tier.featured ? tier.color : 'transparent',
                '&:hover': {
                  backgroundColor: tier.featured ? tier.color : 'transparent',
                  opacity: 0.9
                }
              }}
            >
              {tier.buttonText}
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  </Box>
);

export default PricingTiers;
