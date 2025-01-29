class InventoryItem {
  constructor({
    id,
    name,
    sku,
    description,
    category,
    unitOfMeasure,
    quantityOnHand = 0,
    reorderPoint = 0,
    reorderQuantity = 0,
    cost = 0,
    price = 0,
    location,
    lastUpdated = new Date(),
    createdAt = new Date()
  }) {
    this.id = id;
    this.name = name;
    this.sku = sku;
    this.description = description;
    this.category = category;
    this.unitOfMeasure = unitOfMeasure;
    this.quantityOnHand = quantityOnHand;
    this.reorderPoint = reorderPoint;
    this.reorderQuantity = reorderQuantity;
    this.cost = cost;
    this.price = price;
    this.location = location;
    this.lastUpdated = lastUpdated;
    this.createdAt = createdAt;
  }

  updateQuantity(quantity, type = 'add') {
    const oldQuantity = this.quantityOnHand;
    if (type === 'add') {
      this.quantityOnHand += quantity;
    } else if (type === 'subtract') {
      if (this.quantityOnHand - quantity < 0) {
        throw new Error('Insufficient quantity available');
      }
      this.quantityOnHand -= quantity;
    } else if (type === 'set') {
      this.quantityOnHand = quantity;
    }
    this.lastUpdated = new Date();
    return {
      oldQuantity,
      newQuantity: this.quantityOnHand,
      change: this.quantityOnHand - oldQuantity
    };
  }

  needsReorder() {
    return this.quantityOnHand <= this.reorderPoint;
  }

  getValuation() {
    return {
      totalCost: this.quantityOnHand * this.cost,
      totalRetail: this.quantityOnHand * this.price,
      potentialProfit: this.quantityOnHand * (this.price - this.cost)
    };
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      sku: this.sku,
      description: this.description,
      category: this.category,
      unitOfMeasure: this.unitOfMeasure,
      quantityOnHand: this.quantityOnHand,
      reorderPoint: this.reorderPoint,
      reorderQuantity: this.reorderQuantity,
      cost: this.cost,
      price: this.price,
      location: this.location,
      lastUpdated: this.lastUpdated,
      createdAt: this.createdAt
    };
  }
}
