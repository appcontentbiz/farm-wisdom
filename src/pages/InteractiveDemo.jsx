import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Inventory as InventoryIcon,
  AccountBalance as FinanceIcon,
  ShoppingCart as SalesIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

import DemoInventory from '../modules/erp/demo/DemoInventory';
import DemoFinance from '../modules/erp/finance/DemoFinance';
import DemoSales from '../modules/erp/sales/DemoSales';

const features = [
  {
    title: 'Inventory Management',
    items: [
      'Multi-location tracking',
      'Real-time stock updates',
      'Batch/lot tracking',
      'Reorder point management'
    ]
  },
  {
    title: 'Financial Management',
    items: [
      'Chart of accounts',
      'Journal entries',
      'Financial statements',
      'Real-time reporting'
    ]
  },
  {
    title: 'Sales Management',
    items: [
      'Order processing',
      'Customer management',
      'Sales analytics',
      'Quote-to-cash workflow'
    ]
  }
];

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ padding: '24px 0' }}>
      {value === index && children}
    </div>
  );
}

export default function InteractiveDemo() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Enterprise ERP Demo
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {feature.title}
                </Typography>
                <List>
                  {feature.items.map((item, idx) => (
                    <ListItem key={idx} dense>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
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

      <Paper elevation={3} sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab
            icon={<InventoryIcon />}
            label="Inventory"
            iconPosition="start"
          />
          <Tab
            icon={<FinanceIcon />}
            label="Finance"
            iconPosition="start"
          />
          <Tab
            icon={<SalesIcon />}
            label="Sales"
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 3 }}>
          <TabPanel value={tabValue} index={0}>
            <DemoInventory />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <DemoFinance />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <DemoSales />
          </TabPanel>
        </Box>
      </Paper>
    </Container>
  );
}
