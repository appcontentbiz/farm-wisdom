import { Vendor } from './Vendor';
import { PurchaseOrder } from './PurchaseOrder';

class PurchasingManager {
  constructor(inventoryManager, ledgerManager) {
    this.vendors = new Map();
    this.orders = new Map();
    this.inventoryManager = inventoryManager;
    this.ledgerManager = ledgerManager;
    this.listeners = new Set();
  }

  createVendor(vendorData) {
    const vendor = new Vendor(vendorData);
    this.vendors.set(vendor.id, vendor);
    this._notifyListeners('vendor', 'create', vendor);
    return vendor;
  }

  updateVendor(id, updates) {
    const vendor = this.vendors.get(id);
    if (!vendor) {
      throw new Error(`Vendor ${id} not found`);
    }
    Object.assign(vendor, updates);
    vendor.lastUpdated = new Date();
    this._notifyListeners('vendor', 'update', vendor);
    return vendor;
  }

  createOrder(orderData) {
    // Validate vendor exists
    if (!this.vendors.has(orderData.vendorId)) {
      throw new Error(`Vendor ${orderData.vendorId} not found`);
    }

    const order = new PurchaseOrder(orderData);
    this.orders.set(order.id, order);
    this._notifyListeners('order', 'create', order);
    return order;
  }

  sendOrder(id) {
    const order = this.orders.get(id);
    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    order.send();
    this._notifyListeners('order', 'send', order);
    return order;
  }

  confirmOrder(id) {
    const order = this.orders.get(id);
    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    order.confirm();
    this._notifyListeners('order', 'confirm', order);
    return order;
  }

  receiveOrder(id) {
    const order = this.orders.get(id);
    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    // Increase inventory
    for (const item of order.items) {
      this.inventoryManager.adjustQuantity(item.itemId, item.quantity, 'add',
        `Purchase Order ${order.id}`);
    }

    order.receive();
    this._notifyListeners('order', 'receive', order);
    return order;
  }

  completeOrder(id) {
    const order = this.orders.get(id);
    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    // Create journal entry for the purchase
    const totals = order.calculateTotals();
    const journalEntry = this.ledgerManager.createJournalEntry({
      date: new Date(),
      description: `Purchase Order ${order.id}`,
      reference: order.id,
      lines: [
        {
          accountId: 'INVENTORY', // Inventory Asset
          type: 'debit',
          amount: totals.subtotal
        },
        {
          accountId: 'TAX_RECEIVABLE', // Tax Receivable
          type: 'debit',
          amount: totals.taxAmount
        },
        {
          accountId: 'AP', // Accounts Payable
          type: 'credit',
          amount: totals.total
        }
      ]
    });

    // Post the journal entry
    this.ledgerManager.postJournalEntry(journalEntry.id);

    order.complete();
    this._notifyListeners('order', 'complete', order);
    return order;
  }

  cancelOrder(id, reason) {
    const order = this.orders.get(id);
    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    order.cancel(reason);
    this._notifyListeners('order', 'cancel', order);
    return order;
  }

  getVendorOrders(vendorId) {
    return Array.from(this.orders.values())
      .filter(order => order.vendorId === vendorId)
      .sort((a, b) => b.orderDate - a.orderDate);
  }

  getOrdersByStatus(status) {
    return Array.from(this.orders.values())
      .filter(order => order.status === status)
      .sort((a, b) => b.orderDate - a.orderDate);
  }

  getOrdersByDateRange(startDate, endDate) {
    return Array.from(this.orders.values())
      .filter(order => order.orderDate >= startDate && order.orderDate <= endDate)
      .sort((a, b) => b.orderDate - a.orderDate);
  }

  addListener(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  _notifyListeners(type, action, data) {
    this.listeners.forEach(callback => {
      callback(type, action, data);
    });
  }
}
