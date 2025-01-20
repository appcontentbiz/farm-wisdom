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
  Business as BusinessIcon,
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
    title: 'Enterprise',
    price: '$299/month',
    features: [
      'Everything in Professional, plus:',
      'Multi-farm Management',
      'Advanced Analytics Dashboard',
      'Custom Integrations',
      'Dedicated Support',
      'Team Collaboration Tools',
      'Compliance Reporting',
      'Advanced Features:',
      '- Resource Planning',
      '- Inventory Management',
      '- Quality Control',
      '- Financial Analytics',
      'Security Features:',
      '- Role-based Access',
      '- Data Encryption',
      '- Audit Logs',
    ],
    icon: <BusinessIcon />,
    color: '#FF9800',
    buttonText: 'Contact Sales'
  },
  {
    title: 'Enterprise Plus',
    price: '$499/month',
    features: [
      'Everything in Enterprise, plus:',
      'Real-time Analytics Suite',
      'AI-Powered Insights',
      'Predictive Maintenance',
      'Advanced Export Options',
      'Premium Support Package',
      'Cutting-edge Features:',
      '- Drone Data Analysis',
      '- Smart Irrigation Analytics',
      '- Carbon Footprint Tracking',
      '- Supply Chain Optimization',
      '- Advanced Quality Control',
      '- Automated Labor Management',
      '- Predictive Resource Planning',
      'Advanced Visualizations:',
      '- Real-time Monitoring',
      '- Interactive Dashboards',
      '- Performance Benchmarking',
      '- Custom Chart Builder',
      'Enterprise Plus Security:',
      '- Advanced Encryption',
      '- Custom Security Policies',
      '- Compliance Automation',
      '- Security Auditing'
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
        sm: 'repeat(2, 1fr)',
        lg: 'repeat(4, 1fr)'
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
              label="Most Advanced"
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
                        fontWeight: feature.includes('plus:') || feature.includes('in ') ? 'bold' : 'normal',
                        color: feature.includes('plus:') || feature.includes('in ') ? 'text.primary' : 'text.secondary'
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
