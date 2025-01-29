// Chart of Accounts
export const chartOfAccounts = {
  assets: [
    { id: '1000', name: 'Cash', type: 'Asset', balance: 150000.00 },
    { id: '1100', name: 'Accounts Receivable', type: 'Asset', balance: 75000.00 },
    { id: '1200', name: 'Inventory Asset', type: 'Asset', balance: 250000.00 },
    { id: '1300', name: 'Fixed Assets', type: 'Asset', balance: 500000.00 },
  ],
  liabilities: [
    { id: '2000', name: 'Accounts Payable', type: 'Liability', balance: 45000.00 },
    { id: '2100', name: 'Accrued Expenses', type: 'Liability', balance: 15000.00 },
    { id: '2200', name: 'Notes Payable', type: 'Liability', balance: 200000.00 },
  ],
  equity: [
    { id: '3000', name: 'Common Stock', type: 'Equity', balance: 500000.00 },
    { id: '3100', name: 'Retained Earnings', type: 'Equity', balance: 215000.00 },
  ],
  revenue: [
    { id: '4000', name: 'Sales Revenue', type: 'Revenue', balance: 850000.00 },
    { id: '4100', name: 'Service Revenue', type: 'Revenue', balance: 150000.00 },
  ],
  expenses: [
    { id: '5000', name: 'Cost of Goods Sold', type: 'Expense', balance: 425000.00 },
    { id: '5100', name: 'Salaries Expense', type: 'Expense', balance: 275000.00 },
    { id: '5200', name: 'Marketing Expense', type: 'Expense', balance: 85000.00 },
  ]
};

// Inventory Items with Detailed Properties
export const inventoryItems = [
  {
    id: 'INV001',
    name: 'Organic Tomato Seeds',
    sku: 'SEED-TOM-001',
    description: 'High-yield organic tomato seeds',
    category: 'Seeds',
    subCategory: 'Vegetables',
    unitOfMeasure: 'packet',
    quantityOnHand: 150,
    reorderPoint: 50,
    reorderQuantity: 100,
    cost: 2.50,
    averageCost: 2.35,
    price: 4.99,
    location: 'Warehouse A',
    bin: 'A-12-3',
    supplier: 'VEND001',
    lastPurchaseDate: '2025-01-15',
    lastSaleDate: '2025-01-20',
    status: 'Active',
    taxable: true,
    weight: 0.1,
    dimensions: { length: 4, width: 2, height: 0.5 },
    customFields: {
      organic: true,
      germination: '95%',
      shelfLife: '24 months'
    }
  },
  {
    id: 'INV002',
    name: 'Hydroponic Nutrients',
    sku: 'NUT-HYD-001',
    description: 'Complete nutrient solution for hydroponic systems',
    category: 'Nutrients',
    subCategory: 'Hydroponic',
    unitOfMeasure: 'liter',
    quantityOnHand: 75,
    reorderPoint: 25,
    reorderQuantity: 50,
    cost: 15.00,
    averageCost: 14.75,
    price: 29.99,
    location: 'Warehouse B',
    bin: 'B-05-2',
    supplier: 'VEND002',
    lastPurchaseDate: '2025-01-10',
    lastSaleDate: '2025-01-18',
    status: 'Active',
    taxable: true,
    weight: 1.1,
    dimensions: { length: 10, width: 10, height: 20 },
    customFields: {
      ph: '6.0',
      concentration: '1000ppm',
      organic: false
    }
  }
];

// Customers with Detailed Information
export const customers = [
  {
    id: 'CUST001',
    name: 'Green Valley Farms',
    type: 'business',
    category: 'Agriculture',
    status: 'Active',
    taxExempt: false,
    creditLimit: 10000,
    currentBalance: 5000,
    paymentTerms: 'Net 30',
    addresses: {
      billing: {
        street: '123 Farm Road',
        city: 'Rural County',
        state: 'ST',
        zip: '12345',
        country: 'USA'
      },
      shipping: {
        street: '123 Farm Road',
        city: 'Rural County',
        state: 'ST',
        zip: '12345',
        country: 'USA'
      }
    },
    contacts: [
      {
        name: 'John Smith',
        title: 'Owner',
        email: 'john@greenvalleyfarms.com',
        phone: '555-0123',
        primary: true
      },
      {
        name: 'Jane Smith',
        title: 'Purchasing Manager',
        email: 'jane@greenvalleyfarms.com',
        phone: '555-0124',
        primary: false
      }
    ],
    salesRep: 'EMP001',
    customFields: {
      preferredShipper: 'FedEx',
      farmType: 'Organic',
      certifications: ['USDA Organic', 'Non-GMO']
    }
  }
];

// Sales Orders with Line Items and Status
export const salesOrders = [
  {
    id: 'SO001',
    date: '2025-01-20',
    customer: 'CUST001',
    status: 'Pending Fulfillment',
    orderType: 'Standard',
    currency: 'USD',
    exchangeRate: 1,
    items: [
      {
        itemId: 'INV001',
        quantity: 10,
        unitPrice: 4.99,
        discount: 0,
        tax: 0.50,
        total: 54.90
      },
      {
        itemId: 'INV002',
        quantity: 5,
        unitPrice: 29.99,
        discount: 10,
        tax: 2.99,
        total: 157.44
      }
    ],
    subtotal: 199.85,
    discountTotal: 10.00,
    taxTotal: 17.45,
    total: 207.30,
    payments: [],
    shipments: [],
    notes: 'Priority shipping requested',
    customFields: {
      campaign: 'Spring2025',
      source: 'Web'
    }
  }
];

// Purchase Orders
export const purchaseOrders = [
  {
    id: 'PO001',
    date: '2025-01-15',
    vendor: 'VEND001',
    status: 'Pending Receipt',
    currency: 'USD',
    exchangeRate: 1,
    items: [
      {
        itemId: 'INV001',
        quantity: 100,
        unitCost: 2.50,
        tax: 0.25,
        total: 275.00
      }
    ],
    subtotal: 250.00,
    taxTotal: 25.00,
    total: 275.00,
    expectedReceiptDate: '2025-01-30',
    terms: 'Net 30',
    notes: 'Regular restock order',
    approvals: [
      {
        approver: 'EMP002',
        date: '2025-01-15',
        status: 'Approved'
      }
    ]
  }
];

// Journal Entries
export const journalEntries = [
  {
    id: 'JE001',
    date: '2025-01-20',
    type: 'Standard',
    status: 'Posted',
    memo: 'Record sales transaction',
    lines: [
      {
        account: '1000',
        debit: 207.30,
        credit: 0,
        memo: 'Cash received'
      },
      {
        account: '4000',
        debit: 0,
        credit: 189.85,
        memo: 'Sales revenue'
      },
      {
        account: '2000',
        debit: 0,
        credit: 17.45,
        memo: 'Sales tax payable'
      }
    ],
    totalDebit: 207.30,
    totalCredit: 207.30,
    period: '2025-01',
    createdBy: 'EMP001',
    createdDate: '2025-01-20',
    lastModifiedBy: 'EMP001',
    lastModifiedDate: '2025-01-20'
  }
];

// Financial Reports
export const financialReports = {
  balanceSheet: {
    asOf: '2025-01-31',
    assets: {
      current: {
        cash: 150000.00,
        accountsReceivable: 75000.00,
        inventory: 250000.00,
        totalCurrent: 475000.00
      },
      fixed: {
        equipment: 500000.00,
        totalFixed: 500000.00
      },
      totalAssets: 975000.00
    },
    liabilities: {
      current: {
        accountsPayable: 45000.00,
        accruedExpenses: 15000.00,
        totalCurrent: 60000.00
      },
      longTerm: {
        notesPayable: 200000.00,
        totalLongTerm: 200000.00
      },
      totalLiabilities: 260000.00
    },
    equity: {
      commonStock: 500000.00,
      retainedEarnings: 215000.00,
      totalEquity: 715000.00
    }
  },
  incomeStatement: {
    period: '2025-01',
    revenue: {
      sales: 850000.00,
      services: 150000.00,
      totalRevenue: 1000000.00
    },
    expenses: {
      cogs: 425000.00,
      salaries: 275000.00,
      marketing: 85000.00,
      totalExpenses: 785000.00
    },
    netIncome: 215000.00
  }
};

// KPIs and Metrics
export const kpiData = {
  financial: {
    grossProfitMargin: 57.5,
    netProfitMargin: 21.5,
    currentRatio: 7.92,
    quickRatio: 3.75,
    daysReceivable: 32,
    daysPayable: 38,
    inventoryTurnover: 4.8
  },
  operational: {
    orderFulfillmentRate: 95.2,
    onTimeDelivery: 94.8,
    inventoryAccuracy: 98.5,
    returnRate: 2.3,
    averageOrderValue: 750.25
  }
};
