class SalesOrder {
  constructor({
    id,
    customerId,
    orderDate = new Date(),
    status = 'draft', // draft, confirmed, processing, shipped, completed, cancelled
    items = [],
    billingAddress,
    shippingAddress,
    paymentTerms,
    currency = 'USD',
    taxRate = 0,
    notes = '',
    createdBy,
    createdAt = new Date(),
    lastUpdated = new Date()
  }) {
    this.id = id;
    this.customerId = customerId;
    this.orderDate = orderDate;
    this.status = status;
    this.items = items;
    this.billingAddress = billingAddress;
    this.shippingAddress = shippingAddress;
    this.paymentTerms = paymentTerms;
    this.currency = currency;
    this.taxRate = taxRate;
    this.notes = notes;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.lastUpdated = lastUpdated;
  }

  addItem(item) {
    this.items.push({
      ...item,
      lineNumber: this.items.length + 1
    });
    this.lastUpdated = new Date();
  }

  updateItem(lineNumber, updates) {
    const index = this.items.findIndex(item => item.lineNumber === lineNumber);
    if (index !== -1) {
      this.items[index] = {
        ...this.items[index],
        ...updates
      };
      this.lastUpdated = new Date();
    }
  }

  removeItem(lineNumber) {
    const index = this.items.findIndex(item => item.lineNumber === lineNumber);
    if (index !== -1) {
      this.items.splice(index, 1);
      // Renumber remaining items
      this.items.forEach((item, i) => {
        item.lineNumber = i + 1;
      });
      this.lastUpdated = new Date();
    }
  }

  calculateTotals() {
    const subtotal = this.items.reduce((sum, item) => {
      return sum + (item.quantity * item.unitPrice);
    }, 0);

    const taxAmount = subtotal * this.taxRate;
    const total = subtotal + taxAmount;

    return {
      subtotal,
      taxAmount,
      total
    };
  }

  confirm() {
    if (this.status !== 'draft') {
      throw new Error('Only draft orders can be confirmed');
    }
    if (this.items.length === 0) {
      throw new Error('Cannot confirm empty order');
    }
    this.status = 'confirmed';
    this.lastUpdated = new Date();
  }

  process() {
    if (this.status !== 'confirmed') {
      throw new Error('Only confirmed orders can be processed');
    }
    this.status = 'processing';
    this.lastUpdated = new Date();
  }

  ship() {
    if (this.status !== 'processing') {
      throw new Error('Only processing orders can be shipped');
    }
    this.status = 'shipped';
    this.lastUpdated = new Date();
  }

  complete() {
    if (this.status !== 'shipped') {
      throw new Error('Only shipped orders can be completed');
    }
    this.status = 'completed';
    this.lastUpdated = new Date();
  }

  cancel(reason) {
    if (['completed', 'cancelled'].includes(this.status)) {
      throw new Error('Cannot cancel completed or already cancelled orders');
    }
    this.status = 'cancelled';
    this.notes += `\nCancelled: ${reason}`;
    this.lastUpdated = new Date();
  }

  toJSON() {
    return {
      id: this.id,
      customerId: this.customerId,
      orderDate: this.orderDate,
      status: this.status,
      items: this.items,
      billingAddress: this.billingAddress,
      shippingAddress: this.shippingAddress,
      paymentTerms: this.paymentTerms,
      currency: this.currency,
      taxRate: this.taxRate,
      notes: this.notes,
      createdBy: this.createdBy,
      createdAt: this.createdAt,
      lastUpdated: this.lastUpdated,
      totals: this.calculateTotals()
    };
  }
}
