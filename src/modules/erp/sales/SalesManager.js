import { Customer } from './Customer';
import { SalesOrder } from './SalesOrder';

class SalesManager {
  constructor(inventoryManager, ledgerManager) {
    this.customers = new Map();
    this.orders = new Map();
    this.inventoryManager = inventoryManager;
    this.ledgerManager = ledgerManager;
    this.listeners = new Set();
  }

  createCustomer(customerData) {
    const customer = new Customer(customerData);
    this.customers.set(customer.id, customer);
    this._notifyListeners('customer', 'create', customer);
    return customer;
  }

  updateCustomer(id, updates) {
    const customer = this.customers.get(id);
    if (!customer) {
      throw new Error(`Customer ${id} not found`);
    }
    Object.assign(customer, updates);
    customer.lastUpdated = new Date();
    this._notifyListeners('customer', 'update', customer);
    return customer;
  }

  createOrder(orderData) {
    // Validate customer exists
    if (!this.customers.has(orderData.customerId)) {
      throw new Error(`Customer ${orderData.customerId} not found`);
    }

    const order = new SalesOrder(orderData);
    this.orders.set(order.id, order);
    this._notifyListeners('order', 'create', order);
    return order;
  }

  confirmOrder(id) {
    const order = this.orders.get(id);
    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    // Check inventory availability
    for (const item of order.items) {
      const inventoryItem = this.inventoryManager.getItem(item.itemId);
      if (!inventoryItem || inventoryItem.quantityOnHand < item.quantity) {
        throw new Error(`Insufficient inventory for item ${item.itemId}`);
      }
    }

    order.confirm();
    this._notifyListeners('order', 'confirm', order);
    return order;
  }

  processOrder(id) {
    const order = this.orders.get(id);
    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    // Reduce inventory
    for (const item of order.items) {
      this.inventoryManager.adjustQuantity(item.itemId, item.quantity, 'subtract', 
        `Sales Order ${order.id}`);
    }

    order.process();
    this._notifyListeners('order', 'process', order);
    return order;
  }

  shipOrder(id) {
    const order = this.orders.get(id);
    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    order.ship();
    this._notifyListeners('order', 'ship', order);
    return order;
  }

  completeOrder(id) {
    const order = this.orders.get(id);
    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    // Create journal entry for the sale
    const totals = order.calculateTotals();
    const journalEntry = this.ledgerManager.createJournalEntry({
      date: new Date(),
      description: `Sales Order ${order.id}`,
      reference: order.id,
      lines: [
        {
          accountId: 'AR', // Accounts Receivable
          type: 'debit',
          amount: totals.total
        },
        {
          accountId: 'SALES', // Sales Revenue
          type: 'credit',
          amount: totals.subtotal
        },
        {
          accountId: 'TAX_PAYABLE', // Tax Payable
          type: 'credit',
          amount: totals.taxAmount
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

    // If order was processed, return items to inventory
    if (order.status === 'processing' || order.status === 'shipped') {
      for (const item of order.items) {
        this.inventoryManager.adjustQuantity(item.itemId, item.quantity, 'add',
          `Cancelled Sales Order ${order.id}`);
      }
    }

    order.cancel(reason);
    this._notifyListeners('order', 'cancel', order);
    return order;
  }

  getCustomerOrders(customerId) {
    return Array.from(this.orders.values())
      .filter(order => order.customerId === customerId)
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
