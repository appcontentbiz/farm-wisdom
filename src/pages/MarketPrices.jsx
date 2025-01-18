import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Box,
  CircularProgress
} from '@mui/material';

const commodities = [
  { name: 'Corn', price: '4.25', change: '+0.15', unit: 'bushel' },
  { name: 'Wheat', price: '6.75', change: '-0.25', unit: 'bushel' },
  { name: 'Soybeans', price: '12.50', change: '+0.45', unit: 'bushel' },
  { name: 'Cotton', price: '0.85', change: '+0.02', unit: 'pound' },
  { name: 'Rice', price: '14.30', change: '-0.10', unit: 'hundredweight' }
];

const MarketPrices = () => {
  const [loading, setLoading] = useState(false);
  const [prices, setPrices] = useState(commodities);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Market Prices
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Current commodity prices and daily changes. Updated every 15 minutes during market hours.
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Commodity</strong></TableCell>
              <TableCell align="right"><strong>Price</strong></TableCell>
              <TableCell align="right"><strong>Change</strong></TableCell>
              <TableCell align="right"><strong>Unit</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prices.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">${row.price}</TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    color: row.change.startsWith('+') ? 'success.main' : 'error.main'
                  }}
                >
                  {row.change}
                </TableCell>
                <TableCell align="right">per {row.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 2 }}>
        <Typography variant="caption" color="text.secondary">
          * Prices shown are for demonstration purposes. For real-time market data, please sign up for a Professional account.
        </Typography>
      </Box>
    </Container>
  );
};

export default MarketPrices;
