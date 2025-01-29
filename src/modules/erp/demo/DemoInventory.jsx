import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Alert
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Warning as WarningIcon
} from '@mui/icons-material';
import { demoInventoryItems } from '../../../data/demoData';

export default function DemoInventory() {
  const [items, setItems] = useState(demoInventoryItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
  const [notification, setNotification] = useState(null);

  const handleAdd = () => {
    setDialogMode('add');
    setSelectedItem({
      name: '',
      sku: '',
      description: '',
      category: '',
      unitOfMeasure: '',
      quantityOnHand: 0,
      reorderPoint: 0,
      reorderQuantity: 0,
      cost: 0,
      price: 0,
      location: ''
    });
    setDialogOpen(true);
  };

  const handleEdit = (item) => {
    setDialogMode('edit');
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleDelete = (item) => {
    const newItems = items.filter(i => i.id !== item.id);
    setItems(newItems);
    showNotification('Item deleted successfully', 'success');
  };

  const handleSave = () => {
    if (dialogMode === 'add') {
      const newItem = {
        ...selectedItem,
        id: 'INV' + (items.length + 1).toString().padStart(3, '0')
      };
      setItems([...items, newItem]);
      showNotification('Item added successfully', 'success');
    } else {
      const newItems = items.map(item =>
        item.id === selectedItem.id ? selectedItem : item
      );
      setItems(newItems);
      showNotification('Item updated successfully', 'success');
    }
    setDialogOpen(false);
  };

  const handleQuantityChange = (item, change) => {
    const newItems = items.map(i => {
      if (i.id === item.id) {
        const newQuantity = i.quantityOnHand + change;
        if (newQuantity < 0) {
          showNotification('Cannot reduce quantity below 0', 'error');
          return i;
        }
        return {
          ...i,
          quantityOnHand: newQuantity
        };
      }
      return i;
    });
    setItems(newItems);
    showNotification('Quantity updated successfully', 'success');
  };

  const showNotification = (message, severity) => {
    setNotification({ message, severity });
    setTimeout(() => setNotification(null), 3000);
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

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5">Inventory Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Add Item
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Reorder Point</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell>Location</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell align="right">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange(item, -1)}
                    >
                      -
                    </IconButton>
                    {item.quantityOnHand}
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange(item, 1)}
                    >
                      +
                    </IconButton>
                    {item.quantityOnHand <= item.reorderPoint && (
                      <WarningIcon color="warning" sx={{ ml: 1 }} />
                    )}
                  </Box>
                </TableCell>
                <TableCell align="right">{item.reorderPoint}</TableCell>
                <TableCell align="right">${item.cost.toFixed(2)}</TableCell>
                <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleEdit(item)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(item)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {dialogMode === 'add' ? 'Add New Item' : 'Edit Item'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr', mt: 2 }}>
            <TextField
              label="Name"
              value={selectedItem?.name || ''}
              onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
              fullWidth
            />
            <TextField
              label="SKU"
              value={selectedItem?.sku || ''}
              onChange={(e) => setSelectedItem({ ...selectedItem, sku: e.target.value })}
              fullWidth
            />
            <TextField
              label="Category"
              value={selectedItem?.category || ''}
              onChange={(e) => setSelectedItem({ ...selectedItem, category: e.target.value })}
              fullWidth
            />
            <TextField
              label="Unit of Measure"
              value={selectedItem?.unitOfMeasure || ''}
              onChange={(e) => setSelectedItem({ ...selectedItem, unitOfMeasure: e.target.value })}
              fullWidth
            />
            <TextField
              label="Quantity"
              type="number"
              value={selectedItem?.quantityOnHand || 0}
              onChange={(e) => setSelectedItem({ ...selectedItem, quantityOnHand: Number(e.target.value) })}
              fullWidth
            />
            <TextField
              label="Reorder Point"
              type="number"
              value={selectedItem?.reorderPoint || 0}
              onChange={(e) => setSelectedItem({ ...selectedItem, reorderPoint: Number(e.target.value) })}
              fullWidth
            />
            <TextField
              label="Cost"
              type="number"
              value={selectedItem?.cost || 0}
              onChange={(e) => setSelectedItem({ ...selectedItem, cost: Number(e.target.value) })}
              fullWidth
            />
            <TextField
              label="Price"
              type="number"
              value={selectedItem?.price || 0}
              onChange={(e) => setSelectedItem({ ...selectedItem, price: Number(e.target.value) })}
              fullWidth
            />
            <TextField
              label="Location"
              value={selectedItem?.location || ''}
              onChange={(e) => setSelectedItem({ ...selectedItem, location: e.target.value })}
              fullWidth
            />
            <TextField
              label="Description"
              value={selectedItem?.description || ''}
              onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })}
              fullWidth
              multiline
              rows={2}
              sx={{ gridColumn: '1 / -1' }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
