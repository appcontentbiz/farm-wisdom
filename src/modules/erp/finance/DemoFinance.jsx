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
  InputLabel
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  AccountBalance as AccountIcon,
  Assessment as ReportIcon,
  Receipt as ReceiptIcon
} from '@mui/icons-material';
import { chartOfAccounts, journalEntries, financialReports, kpiData } from '../../../data/enterpriseData';

export default function DemoFinance() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [journalDialog, setJournalDialog] = useState(false);
  const [notification, setNotification] = useState(null);

  // Combine all accounts into one array for display
  const allAccounts = [
    ...chartOfAccounts.assets,
    ...chartOfAccounts.liabilities,
    ...chartOfAccounts.equity,
    ...chartOfAccounts.revenue,
    ...chartOfAccounts.expenses
  ];

  const handleNewJournalEntry = () => {
    setJournalDialog(true);
  };

  const handleSaveJournalEntry = () => {
    setJournalDialog(false);
    showNotification('Journal entry saved successfully', 'success');
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

  const formatPercent = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(value / 100);
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
          <Tab icon={<AccountIcon />} label="Chart of Accounts" />
          <Tab icon={<ReceiptIcon />} label="Journal Entries" />
          <Tab icon={<ReportIcon />} label="Financial Reports" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {/* Chart of Accounts Tab */}
          {activeTab === 0 && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Chart of Accounts</Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => showNotification('This feature is available in the full version', 'info')}
                >
                  New Account
                </Button>
              </Box>
              
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Account #</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell align="right">Balance</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allAccounts.map((account) => (
                      <TableRow key={account.id}>
                        <TableCell>{account.id}</TableCell>
                        <TableCell>{account.name}</TableCell>
                        <TableCell>{account.type}</TableCell>
                        <TableCell align="right">{formatCurrency(account.balance)}</TableCell>
                        <TableCell align="center">
                          <IconButton onClick={() => showNotification('This feature is available in the full version', 'info')}>
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => showNotification('This feature is available in the full version', 'info')}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}

          {/* Journal Entries Tab */}
          {activeTab === 1 && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Journal Entries</Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleNewJournalEntry}
                >
                  New Journal Entry
                </Button>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Entry #</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Memo</TableCell>
                      <TableCell align="right">Total</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {journalEntries.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell>{entry.id}</TableCell>
                        <TableCell>{entry.date}</TableCell>
                        <TableCell>{entry.type}</TableCell>
                        <TableCell>{entry.memo}</TableCell>
                        <TableCell align="right">{formatCurrency(entry.totalDebit)}</TableCell>
                        <TableCell>{entry.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}

          {/* Financial Reports Tab */}
          {activeTab === 2 && (
            <Grid container spacing={3}>
              {/* Balance Sheet Summary */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Balance Sheet Summary</Typography>
                    <Typography variant="subtitle2" color="textSecondary">As of {financialReports.balanceSheet.asOf}</Typography>
                    <Divider sx={{ my: 2 }} />
                    
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">Total Assets</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" align="right">
                          {formatCurrency(financialReports.balanceSheet.assets.totalAssets)}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">Total Liabilities</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" align="right">
                          {formatCurrency(financialReports.balanceSheet.liabilities.totalLiabilities)}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">Total Equity</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" align="right">
                          {formatCurrency(financialReports.balanceSheet.equity.totalEquity)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Income Statement Summary */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Income Statement Summary</Typography>
                    <Typography variant="subtitle2" color="textSecondary">Period: {financialReports.incomeStatement.period}</Typography>
                    <Divider sx={{ my: 2 }} />
                    
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">Total Revenue</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" align="right">
                          {formatCurrency(financialReports.incomeStatement.revenue.totalRevenue)}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">Total Expenses</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" align="right">
                          {formatCurrency(financialReports.incomeStatement.expenses.totalExpenses)}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Net Income</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" align="right" sx={{ fontWeight: 'bold' }}>
                          {formatCurrency(financialReports.incomeStatement.netIncome)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Key Financial Metrics */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Key Financial Metrics</Typography>
                    <Divider sx={{ my: 2 }} />
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" color="textSecondary">Gross Profit Margin</Typography>
                        <Typography variant="h6">{formatPercent(kpiData.financial.grossProfitMargin)}</Typography>
                      </Grid>
                      
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" color="textSecondary">Net Profit Margin</Typography>
                        <Typography variant="h6">{formatPercent(kpiData.financial.netProfitMargin)}</Typography>
                      </Grid>
                      
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" color="textSecondary">Current Ratio</Typography>
                        <Typography variant="h6">{kpiData.financial.currentRatio.toFixed(2)}</Typography>
                      </Grid>
                      
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" color="textSecondary">Days Receivable</Typography>
                        <Typography variant="h6">{kpiData.financial.daysReceivable} days</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </Box>
      </Paper>

      {/* Journal Entry Dialog */}
      <Dialog open={journalDialog} onClose={() => setJournalDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>New Journal Entry</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date"
                type="date"
                defaultValue="2025-01-28"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Reference Number"
                defaultValue="JE002"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Memo"
                fullWidth
                multiline
                rows={2}
              />
            </Grid>
            
            {/* Journal Entry Lines */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>Entry Lines</Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Account</TableCell>
                      <TableCell align="right">Debit</TableCell>
                      <TableCell align="right">Credit</TableCell>
                      <TableCell>Memo</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <FormControl fullWidth size="small">
                          <Select defaultValue="">
                            {allAccounts.map(account => (
                              <MenuItem key={account.id} value={account.id}>
                                {account.id} - {account.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
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
                          InputProps={{ inputProps: { min: 0 } }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                startIcon={<AddIcon />}
                sx={{ mt: 1 }}
                onClick={() => showNotification('This feature is available in the full version', 'info')}
              >
                Add Line
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setJournalDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveJournalEntry} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
