class Vendor {
  constructor({
    id,
    name,
    type = 'supplier', // supplier, contractor, service
    taxId,
    address,
    contacts = [],
    paymentTerms,
    currency = 'USD',
    status = 'active',
    preferredPaymentMethod,
    bankInfo,
    notes = '',
    createdAt = new Date(),
    lastUpdated = new Date()
  }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.taxId = taxId;
    this.address = address;
    this.contacts = contacts;
    this.paymentTerms = paymentTerms;
    this.currency = currency;
    this.status = status;
    this.preferredPaymentMethod = preferredPaymentMethod;
    this.bankInfo = bankInfo;
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

  updateBankInfo(bankInfo) {
    this.bankInfo = {
      ...this.bankInfo,
      ...bankInfo,
      lastUpdated: new Date()
    };
    this.lastUpdated = new Date();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      taxId: this.taxId,
      address: this.address,
      contacts: this.contacts,
      paymentTerms: this.paymentTerms,
      currency: this.currency,
      status: this.status,
      preferredPaymentMethod: this.preferredPaymentMethod,
      bankInfo: this.bankInfo,
      notes: this.notes,
      createdAt: this.createdAt,
      lastUpdated: this.lastUpdated
    };
  }
}
