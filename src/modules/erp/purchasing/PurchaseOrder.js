class PurchaseOrder {
  constructor({
    id,
    vendorId,
    orderDate = new Date(),
    status = 'draft', // draft, sent, confirmed, received, completed, cancelled
    items = [],
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
    this.vendorId = vendorId;
    this.orderDate = orderDate;
    this.status = status;
    this.items = items;
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

  send() {
    if (this.status !== 'draft') {
      throw new Error('Only draft orders can be sent');
    }
    if (this.items.length === 0) {
      throw new Error('Cannot send empty order');
    }
    this.status = 'sent';
    this.lastUpdated = new Date();
  }

  confirm() {
    if (this.status !== 'sent') {
      throw new Error('Only sent orders can be confirmed');
    }
    this.status = 'confirmed';
    this.lastUpdated = new Date();
  }

  receive() {
    if (this.status !== 'confirmed') {
      throw new Error('Only confirmed orders can be received');
    }
    this.status = 'received';
    this.lastUpdated = new Date();
  }

  complete() {
    if (this.status !== 'received') {
      throw new Error('Only received orders can be completed');
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
      vendorId: this.vendorId,
      orderDate: this.orderDate,
      status: this.status,
      items: this.items,
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
