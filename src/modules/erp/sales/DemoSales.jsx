import React, { useState } from 'react';
import {
  Box,
  Paper,
  Tabs,
  Tab,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  IconButton,
  Card,
  CardContent,
  Divider,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Autocomplete
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  ShoppingCart as OrderIcon,
  Person as CustomerIcon,
  Timeline as AnalyticsIcon,
  LocalShipping as ShipmentIcon
} from '@mui/icons-material';
import { 
  customers, 
  salesOrders, 
  inventoryItems,
  kpiData 
} from '../../../data/enterpriseData';

export default function DemoSales() {
  const [activeTab, setActiveTab] = useState(0);
  const [orderDialog, setOrderDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [notification, setNotification] = useState(null);

  const handleNewOrder = () => {
    setSelectedOrder({
      customer: '',
      items: [],
      status: 'Draft',
      orderType: 'Standard',
      currency: 'USD',
      exchangeRate: 1
    });
    setOrderDialog(true);
  };

  const handleSaveOrder = () => {
    setOrderDialog(false);
    showNotification('Order saved successfully', 'success');
  };

  const showNotification = (message, severity) => {
    setNotification({ message, severity });
    setTimeout(() => setNotification(null), 3000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusColor = (status) => {
    const colors = {
      'Draft': 'default',
      'Pending Fulfillment': 'warning',
      'Partially Fulfilled': 'info',
      'Fulfilled': 'success',
      'Cancelled': 'error'
    };
    return colors[status] || 'default';
  };

  return (
    <Box sx={{ p: 3 }}>
      {notification && (
        <Alert 
          severity={notification.severity}
          sx={{ mb: 2 }}
        >
          {notification.message}
        </Alert>
      )}

      <Paper sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)}>
          <Tab icon={<OrderIcon />} label="Sales Orders" />
          <Tab icon={<CustomerIcon />} label="Customers" />
          <Tab icon={<AnalyticsIcon />} label="Analytics" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {/* Sales Orders Tab */}
          {activeTab === 0 && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Sales Orders</Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleNewOrder}
                >
                  New Order
                </Button>
              </Box>
              
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Order #</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Total</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {salesOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>
                          <Chip 
                            label={order.status}
                            color={getStatusColor(order.status)}
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="right">{formatCurrency(order.total)}</TableCell>
                        <TableCell align="center">
                          <IconButton onClick={() => showNotification('View order details in full version', 'info')}>
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => showNotification('This feature is available in the full version', 'info')}>
                            <ShipmentIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}

          {/* Customers Tab */}
          {activeTab === 1 && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Customers</Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => showNotification('This feature is available in the full version', 'info')}
                >
                  New Customer
                </Button>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Credit Limit</TableCell>
                      <TableCell align="right">Balance</TableCell>
                      <TableCell>Terms</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell>{customer.id}</TableCell>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.type}</TableCell>
                        <TableCell>
                          <Chip 
                            label={customer.status}
                            color={customer.status === 'Active' ? 'success' : 'default'}
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="right">{formatCurrency(customer.creditLimit)}</TableCell>
                        <TableCell align="right">{formatCurrency(customer.currentBalance)}</TableCell>
                        <TableCell>{customer.paymentTerms}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}

          {/* Analytics Tab */}
          {activeTab === 2 && (
            <Grid container spacing={3}>
              {/* Sales Performance Metrics */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Sales Performance</Typography>
                    <Divider sx={{ my: 2 }} />
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" color="textSecondary">Order Fulfillment Rate</Typography>
                        <Typography variant="h6">{kpiData.operational.orderFulfillmentRate}%</Typography>
                      </Grid>
                      
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" color="textSecondary">On-Time Delivery</Typography>
                        <Typography variant="h6">{kpiData.operational.onTimeDelivery}%</Typography>
                      </Grid>
                      
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" color="textSecondary">Return Rate</Typography>
                        <Typography variant="h6">{kpiData.operational.returnRate}%</Typography>
                      </Grid>
                      
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" color="textSecondary">Average Order Value</Typography>
                        <Typography variant="h6">{formatCurrency(kpiData.operational.averageOrderValue)}</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </Box>
      </Paper>

      {/* New Order Dialog */}
      <Dialog open={orderDialog} onClose={() => setOrderDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>New Sales Order</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Customer</InputLabel>
                <Select label="Customer">
                  {customers.map(customer => (
                    <MenuItem key={customer.id} value={customer.id}>
                      {customer.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Order Date"
                type="date"
                defaultValue="2025-01-28"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            
            {/* Order Lines */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>Order Lines</Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Item</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Unit Price</TableCell>
                      <TableCell align="right">Discount</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <FormControl fullWidth size="small">
                          <Select defaultValue="">
                            {inventoryItems.map(item => (
                              <MenuItem key={item.id} value={item.id}>
                                {item.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell align="right">
                        <TextField
                          size="small"
                          type="number"
                          InputProps={{ inputProps: { min: 1 } }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <TextField
                          size="small"
                          type="number"
                          InputProps={{ inputProps: { min: 0 } }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <TextField
                          size="small"
                          type="number"
                          InputProps={{ inputProps: { min: 0, max: 100 } }}
                        />
                      </TableCell>
                      <TableCell align="right">$0.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                startIcon={<AddIcon />}
                sx={{ mt: 1 }}
                onClick={() => showNotification('This feature is available in the full version', 'info')}
              >
                Add Item
              </Button>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Notes"
                fullWidth
                multiline
                rows={2}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOrderDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveOrder} variant="contained">Save Order</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
