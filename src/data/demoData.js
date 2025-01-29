export const demoInventoryItems = [
  {
    id: 'INV001',
    name: 'Organic Tomato Seeds',
    sku: 'SEED-TOM-001',
    description: 'High-yield organic tomato seeds',
    category: 'Seeds',
    unitOfMeasure: 'packet',
    quantityOnHand: 150,
    reorderPoint: 50,
    reorderQuantity: 100,
    cost: 2.50,
    price: 4.99,
    location: 'Warehouse A'
  },
  {
    id: 'INV002',
    name: 'Hydroponic Nutrients',
    sku: 'NUT-HYD-001',
    description: 'Complete nutrient solution for hydroponic systems',
    category: 'Nutrients',
    unitOfMeasure: 'liter',
    quantityOnHand: 75,
    reorderPoint: 25,
    reorderQuantity: 50,
    cost: 15.00,
    price: 29.99,
    location: 'Warehouse B'
  },
  {
    id: 'INV003',
    name: 'LED Grow Lights',
    sku: 'LIGHT-LED-001',
    description: 'Full spectrum LED grow lights',
    category: 'Equipment',
    unitOfMeasure: 'unit',
    quantityOnHand: 30,
    reorderPoint: 10,
    reorderQuantity: 20,
    cost: 45.00,
    price: 89.99,
    location: 'Warehouse A'
  }
];

export const demoCustomers = [
  {
    id: 'CUST001',
    name: 'Green Valley Farms',
    type: 'business',
    billingAddress: '123 Farm Road, Rural County, ST 12345',
    contacts: [
      {
        name: 'John Smith',
        email: 'john@greenvalleyfarms.com',
        phone: '555-0123'
      }
    ],
    creditLimit: 10000,
    paymentTerms: 'Net 30'
  },
  {
    id: 'CUST002',
    name: 'Urban Growers Co-op',
    type: 'business',
    billingAddress: '456 City Street, Metro City, ST 67890',
    contacts: [
      {
        name: 'Sarah Johnson',
        email: 'sarah@urbangrowers.com',
        phone: '555-0124'
      }
    ],
    creditLimit: 5000,
    paymentTerms: 'Net 15'
  }
];

export const demoVendors = [
  {
    id: 'VEND001',
    name: 'Seed Supply Co.',
    type: 'supplier',
    address: '789 Supplier Lane, Vendor City, ST 13579',
    contacts: [
      {
        name: 'Mike Wilson',
        email: 'mike@seedsupply.com',
        phone: '555-0125'
      }
    ],
    paymentTerms: 'Net 30'
  },
  {
    id: 'VEND002',
    name: 'Farm Equipment Ltd.',
    type: 'supplier',
    address: '321 Equipment Road, Machine City, ST 24680',
    contacts: [
      {
        name: 'Lisa Brown',
        email: 'lisa@farmequip.com',
        phone: '555-0126'
      }
    ],
    paymentTerms: 'Net 45'
  }
];

export const demoTransactions = [
  {
    id: 'TRX001',
    date: '2025-01-15',
    type: 'sale',
    customerId: 'CUST001',
    items: [
      {
        itemId: 'INV001',
        quantity: 10,
        unitPrice: 4.99
      },
      {
        itemId: 'INV002',
        quantity: 5,
        unitPrice: 29.99
      }
    ],
    status: 'completed',
    total: 199.85
  },
  {
    id: 'TRX002',
    date: '2025-01-20',
    type: 'purchase',
    vendorId: 'VEND001',
    items: [
      {
        itemId: 'INV001',
        quantity: 100,
        unitPrice: 2.50
      }
    ],
    status: 'completed',
    total: 250.00
  }
];
