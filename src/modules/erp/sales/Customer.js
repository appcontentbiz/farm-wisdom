class Customer {
  constructor({
    id,
    name,
    type = 'individual', // individual, business, government
    taxId,
    billingAddress,
    shippingAddress,
    contacts = [],
    creditLimit = 0,
    paymentTerms,
    currency = 'USD',
    status = 'active',
    notes = '',
    createdAt = new Date(),
    lastUpdated = new Date()
  }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.taxId = taxId;
    this.billingAddress = billingAddress;
    this.shippingAddress = shippingAddress;
    this.contacts = contacts;
    this.creditLimit = creditLimit;
    this.paymentTerms = paymentTerms;
    this.currency = currency;
    this.status = status;
    this.notes = notes;
    this.createdAt = createdAt;
    this.lastUpdated = lastUpdated;
  }

  addContact(contact) {
    this.contacts.push({
      ...contact,
      id: crypto.randomUUID(),
      createdAt: new Date()
    });
    this.lastUpdated = new Date();
  }

  updateContact(contactId, updates) {
    const index = this.contacts.findIndex(c => c.id === contactId);
    if (index !== -1) {
      this.contacts[index] = {
        ...this.contacts[index],
        ...updates,
        lastUpdated: new Date()
      };
      this.lastUpdated = new Date();
    }
  }

  removeContact(contactId) {
    const index = this.contacts.findIndex(c => c.id === contactId);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.lastUpdated = new Date();
    }
  }

  updateAddress(type, address) {
    if (type === 'billing') {
      this.billingAddress = address;
    } else if (type === 'shipping') {
      this.shippingAddress = address;
    }
    this.lastUpdated = new Date();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      taxId: this.taxId,
      billingAddress: this.billingAddress,
      shippingAddress: this.shippingAddress,
      contacts: this.contacts,
      creditLimit: this.creditLimit,
      paymentTerms: this.paymentTerms,
      currency: this.currency,
      status: this.status,
      notes: this.notes,
      createdAt: this.createdAt,
      lastUpdated: this.lastUpdated
    };
  }
}
