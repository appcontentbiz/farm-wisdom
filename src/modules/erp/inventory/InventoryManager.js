import { InventoryItem } from './InventoryItem';

class InventoryManager {
  constructor() {
    this.items = new Map();
    this.transactions = [];
    this.listeners = new Set();
  }

  addItem(itemData) {
    const item = new InventoryItem(itemData);
    this.items.set(item.id, item);
    this._notifyListeners('add', item);
    return item;
  }

  updateItem(id, updates) {
    const item = this.items.get(id);
    if (!item) {
      throw new Error(`Item with id ${id} not found`);
    }

    Object.assign(item, updates);
    item.lastUpdated = new Date();
    this._notifyListeners('update', item);
    return item;
  }

  removeItem(id) {
    const item = this.items.get(id);
    if (!item) {
      throw new Error(`Item with id ${id} not found`);
    }

    this.items.delete(id);
    this._notifyListeners('remove', item);
    return item;
  }

  adjustQuantity(id, quantity, type = 'add', reason = '') {
    const item = this.items.get(id);
    if (!item) {
      throw new Error(`Item with id ${id} not found`);
    }

    const result = item.updateQuantity(quantity, type);
    
    const transaction = {
      id: crypto.randomUUID(),
      itemId: id,
      type,
      quantity,
      oldQuantity: result.oldQuantity,
      newQuantity: result.newQuantity,
      reason,
      timestamp: new Date()
    };

    this.transactions.push(transaction);
    this._notifyListeners('quantity', item, transaction);
    
    if (item.needsReorder()) {
      this._notifyListeners('reorder', item);
    }

    return { item, transaction };
  }

  getItem(id) {
    return this.items.get(id);
  }

  getAllItems() {
    return Array.from(this.items.values());
  }

  getItemsByCategory(category) {
    return this.getAllItems().filter(item => item.category === category);
  }

  getItemsNeedingReorder() {
    return this.getAllItems().filter(item => item.needsReorder());
  }

  getTransactionHistory(itemId = null, startDate = null, endDate = null) {
    let transactions = this.transactions;

    if (itemId) {
      transactions = transactions.filter(t => t.itemId === itemId);
    }

    if (startDate) {
      transactions = transactions.filter(t => t.timestamp >= startDate);
    }

    if (endDate) {
      transactions = transactions.filter(t => t.timestamp <= endDate);
    }

    return transactions;
  }

  getTotalValuation() {
    return this.getAllItems().reduce((total, item) => {
      const valuation = item.getValuation();
      return {
        totalCost: total.totalCost + valuation.totalCost,
        totalRetail: total.totalRetail + valuation.totalRetail,
        potentialProfit: total.potentialProfit + valuation.potentialProfit
      };
    }, { totalCost: 0, totalRetail: 0, potentialProfit: 0 });
  }

  addListener(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  _notifyListeners(event, item, data = null) {
    this.listeners.forEach(callback => {
      callback(event, item, data);
    });
  }
}
