class Account {
  constructor({
    id,
    number,
    name,
    type,
    subtype,
    description,
    balance = 0,
    parentAccount = null,
    isActive = true,
    createdAt = new Date(),
    lastUpdated = new Date()
  }) {
    this.id = id;
    this.number = number;
    this.name = name;
    this.type = type; // asset, liability, equity, revenue, expense
    this.subtype = subtype;
    this.description = description;
    this.balance = balance;
    this.parentAccount = parentAccount;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.lastUpdated = lastUpdated;
  }

  updateBalance(amount, type = 'credit') {
    const oldBalance = this.balance;
    
    if (type === 'credit') {
      if (['asset', 'expense'].includes(this.type)) {
        this.balance -= amount;
      } else {
        this.balance += amount;
      }
    } else if (type === 'debit') {
      if (['asset', 'expense'].includes(this.type)) {
        this.balance += amount;
      } else {
        this.balance -= amount;
      }
    }

    this.lastUpdated = new Date();
    return {
      oldBalance,
      newBalance: this.balance,
      change: this.balance - oldBalance
    };
  }

  toJSON() {
    return {
      id: this.id,
      number: this.number,
      name: this.name,
      type: this.type,
      subtype: this.subtype,
      description: this.description,
      balance: this.balance,
      parentAccount: this.parentAccount,
      isActive: this.isActive,
      createdAt: this.createdAt,
      lastUpdated: this.lastUpdated
    };
  }
}
