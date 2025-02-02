import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Button,
  Paper
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
  Assignment as TaskIcon,
  MonetizationOn as MoneyIcon,
  Build as ToolIcon,
  LocalShipping as TransportIcon,
  Store as MarketIcon,
  Description as PlanIcon
} from '@mui/icons-material';

const essentialEquipment = [
  {
    category: 'Basic Tools',
    items: [
      { name: 'Hand trowel', cost: '$10-15', essential: true },
      { name: 'Garden fork', cost: '$20-30', essential: true },
      { name: 'Pruning shears', cost: '$15-25', essential: true },
      { name: 'Wheelbarrow', cost: '$50-100', essential: true },
      { name: 'Garden hoe', cost: '$20-30', essential: true },
      { name: 'Watering can', cost: '$15-25', essential: true },
      { name: 'Garden rake', cost: '$20-30', essential: true },
      { name: 'Spade', cost: '$25-40', essential: true }
    ]
  },
  {
    category: 'Power Equipment',
    items: [
      { name: 'Tiller/cultivator', cost: '$200-500', essential: false },
      { name: 'Lawn mower', cost: '$200-400', essential: true },
      { name: 'Leaf blower', cost: '$100-200', essential: false },
      { name: 'Chain saw', cost: '$150-300', essential: false }
    ]
  },
  {
    category: 'Irrigation',
    items: [
      { name: 'Drip irrigation system', cost: '$100-300', essential: true },
      { name: 'Soaker hoses', cost: '$20-40', essential: false },
      { name: 'Sprinklers', cost: '$30-100', essential: false },
      { name: 'Timer system', cost: '$50-150', essential: true }
    ]
  }
];

const businessPlanning = [
  {
    title: 'Legal Requirements',
    items: [
      'Business registration and licenses',
      'Tax ID numbers (EIN)',
      'Insurance coverage',
      'Zoning permits',
      'Food safety certifications',
      'Organic certification (if applicable)'
    ]
  },
  {
    title: 'Financial Planning',
    items: [
      'Startup cost calculation',
      'Operating budget',
      'Cash flow projections',
      'Loan applications',
      'Grant opportunities',
      'Record keeping system'
    ]
  },
  {
    title: 'Marketing Strategy',
    items: [
      'Market research',
      'Target customer identification',
      'Pricing strategy',
      'Distribution channels',
      'Branding and packaging',
      'Social media presence'
    ]
  }
];

const marketingChannels = [
  {
    channel: "Farmers' Markets",
    pros: ['Direct customer interaction', 'Immediate cash flow', 'Market research opportunity'],
    cons: ['Time-intensive', 'Weather dependent', 'Limited hours'],
    tips: ['Start with one market', 'Focus on presentation', 'Collect customer contacts']
  },
  {
    channel: 'CSA Programs',
    pros: ['Guaranteed income', 'Community building', 'Advance planning'],
    cons: ['Complex logistics', 'Need variety', 'Weather risks'],
    tips: ['Start small', 'Clear communication', 'Flexible share options']
  },
  {
    channel: 'Restaurant Sales',
    pros: ['Regular orders', 'Higher volumes', 'Professional relationships'],
    cons: ['Price competition', 'Strict requirements', 'Payment terms'],
    tips: ['Build relationships', 'Consistent quality', 'Reliable delivery']
  },
  {
    channel: 'Online Sales',
    pros: ['Wider reach', 'Higher margins', 'Flexible hours'],
    cons: ['Shipping logistics', 'Platform fees', 'Marketing needed'],
    tips: ['Quality photos', 'Clear descriptions', 'Prompt shipping']
  }
];

export default function StartupGuide() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Farm Startup Guide
      </Typography>

      {/* Essential Equipment Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <ToolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Essential Equipment
        </Typography>
        <Grid container spacing={3}>
          {essentialEquipment.map((category) => (
            <Grid item xs={12} md={4} key={category.category}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {category.category}
                  </Typography>
                  <List dense>
                    {category.items.map((item) => (
                      <ListItem key={item.name}>
                        <ListItemIcon>
                          {item.essential ? (
                            <CheckIcon color="success" />
                          ) : (
                            <WarningIcon color="warning" />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.name}
                          secondary={`Estimated cost: ${item.cost}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Business Planning Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <PlanIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Business Planning
        </Typography>
        <Grid container spacing={3}>
          {businessPlanning.map((section) => (
            <Grid item xs={12} md={4} key={section.title}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {section.title}
                  </Typography>
                  <List dense>
                    {section.items.map((item) => (
                      <ListItem key={item}>
                        <ListItemIcon>
                          <TaskIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Marketing Channels Section */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          <MarketIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Marketing Channels
        </Typography>
        <Grid container spacing={3}>
          {marketingChannels.map((channel) => (
            <Grid item xs={12} md={6} key={channel.channel}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {channel.channel}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="primary">Pros:</Typography>
                    <List dense>
                      {channel.pros.map((pro) => (
                        <ListItem key={pro}>
                          <ListItemIcon>
                            <CheckIcon color="success" />
                          </ListItemIcon>
                          <ListItemText primary={pro} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="error">Cons:</Typography>
                    <List dense>
                      {channel.cons.map((con) => (
                        <ListItem key={con}>
                          <ListItemIcon>
                            <WarningIcon color="error" />
                          </ListItemIcon>
                          <ListItemText primary={con} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="info.main">Tips:</Typography>
                    <List dense>
                      {channel.tips.map((tip) => (
                        <ListItem key={tip}>
                          <ListItemIcon>
                            <TaskIcon color="info" />
                          </ListItemIcon>
                          <ListItemText primary={tip} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
