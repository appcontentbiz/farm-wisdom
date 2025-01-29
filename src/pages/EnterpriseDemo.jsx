import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  Inventory as InventoryIcon,
  AccountBalance as FinanceIcon,
  ShoppingCart as SalesIcon,
  LocalShipping as PurchasingIcon,
  Assessment as ReportingIcon,
  Check as CheckIcon
} from '@mui/icons-material';

export default function EnterpriseDemo() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [demoDialog, setDemoDialog] = useState({ open: false, title: '', content: '' });

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const showDemo = (title, content) => {
    setDemoDialog({ open: true, title, content });
  };

  const features = {
    inventory: [
      'Real-time inventory tracking',
      'Automated reorder points',
      'Multi-location management',
      'Batch/lot tracking',
      'Cost tracking and valuation',
      'Inventory adjustments',
      'Stock transfer management',
      'Barcode/QR code support'
    ],
    finance: [
      'Double-entry accounting',
      'General ledger management',
      'Accounts receivable/payable',
      'Bank reconciliation',
      'Financial reporting',
      'Tax management',
      'Multi-currency support',
      'Budget tracking'
    ],
    sales: [
      'Customer relationship management',
      'Quote-to-cash process',
      'Order management',
      'Invoicing and payments',
      'Sales team management',
      'Commission tracking',
      'Promotions and discounts',
      'Customer portal'
    ],
    purchasing: [
      'Vendor management',
      'Purchase order processing',
      'Receiving and returns',
      'Cost tracking',
      'Vendor performance metrics',
      'Payment scheduling',
      'Contract management',
      'RFQ management'
    ],
    reporting: [
      'Financial statements',
      'Sales analytics',
      'Inventory reports',
      'Purchase analysis',
      'Custom report builder',
      'Dashboard creation',
      'KPI tracking',
      'Export capabilities'
    ]
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Enterprise Plus Features
      </Typography>
      
      <Typography variant="h6" color="textSecondary" align="center" paragraph>
        Experience our comprehensive ERP solution designed for growing businesses
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab icon={<InventoryIcon />} label="Inventory" />
          <Tab icon={<FinanceIcon />} label="Finance" />
          <Tab icon={<SalesIcon />} label="Sales" />
          <Tab icon={<PurchasingIcon />} label="Purchasing" />
          <Tab icon={<ReportingIcon />} label="Reporting" />
        </Tabs>
      </Box>

      <Box sx={{ mt: 4 }}>
        {selectedTab === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Inventory Management
                  </Typography>
                  <List>
                    {features.inventory.map((feature, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => showDemo('Inventory Demo', 'Interactive inventory demo content')}
                    sx={{ mt: 2 }}
                  >
                    View Demo
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <img
                  src="/images/inventory-demo.png"
                  alt="Inventory Management Interface"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Paper>
            </Grid>
          </Grid>
        )}

        {selectedTab === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Financial Management
                  </Typography>
                  <List>
                    {features.finance.map((feature, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => showDemo('Finance Demo', 'Interactive finance demo content')}
                    sx={{ mt: 2 }}
                  >
                    View Demo
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <img
                  src="/images/finance-demo.png"
                  alt="Financial Management Interface"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Paper>
            </Grid>
          </Grid>
        )}

        {selectedTab === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Sales Management
                  </Typography>
                  <List>
                    {features.sales.map((feature, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => showDemo('Sales Demo', 'Interactive sales demo content')}
                    sx={{ mt: 2 }}
                  >
                    View Demo
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <img
                  src="/images/sales-demo.png"
                  alt="Sales Management Interface"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Paper>
            </Grid>
          </Grid>
        )}

        {selectedTab === 3 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Purchase Management
                  </Typography>
                  <List>
                    {features.purchasing.map((feature, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => showDemo('Purchasing Demo', 'Interactive purchasing demo content')}
                    sx={{ mt: 2 }}
                  >
                    View Demo
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <img
                  src="/images/purchasing-demo.png"
                  alt="Purchase Management Interface"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Paper>
            </Grid>
          </Grid>
        )}

        {selectedTab === 4 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Reporting & Analytics
                  </Typography>
                  <List>
                    {features.reporting.map((feature, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => showDemo('Reporting Demo', 'Interactive reporting demo content')}
                    sx={{ mt: 2 }}
                  >
                    View Demo
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <img
                  src="/images/reporting-demo.png"
                  alt="Reporting Interface"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/pricing"
          sx={{ mr: 2 }}
        >
          View Enterprise Plus Pricing
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="/contact"
        >
          Request Demo
        </Button>
      </Box>

      <Dialog
        open={demoDialog.open}
        onClose={() => setDemoDialog({ ...demoDialog, open: false })}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{demoDialog.title}</DialogTitle>
        <DialogContent>
          <Typography>{demoDialog.content}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDemoDialog({ ...demoDialog, open: false })}>
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="/contact"
          >
            Schedule Live Demo
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
