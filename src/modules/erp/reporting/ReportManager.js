class ReportManager {
  constructor(ledgerManager, salesManager, purchasingManager, inventoryManager) {
    this.ledgerManager = ledgerManager;
    this.salesManager = salesManager;
    this.purchasingManager = purchasingManager;
    this.inventoryManager = inventoryManager;
  }

  // Financial Reports
  generateBalanceSheet(asOfDate = new Date()) {
    const trialBalance = this.ledgerManager.getTrialBalance(asOfDate);
    
    return {
      assets: {
        current: {
          cash: this.ledgerManager.getAccountBalance('CASH'),
          accountsReceivable: this.ledgerManager.getAccountBalance('AR'),
          inventory: this.ledgerManager.getAccountBalance('INVENTORY'),
          total: 0 // Calculated
        },
        fixed: {
          equipment: this.ledgerManager.getAccountBalance('EQUIPMENT'),
          buildings: this.ledgerManager.getAccountBalance('BUILDINGS'),
          total: 0 // Calculated
        },
        total: trialBalance.totalAssets
      },
      liabilities: {
        current: {
          accountsPayable: this.ledgerManager.getAccountBalance('AP'),
          taxPayable: this.ledgerManager.getAccountBalance('TAX_PAYABLE'),
          total: 0 // Calculated
        },
        longTerm: {
          loans: this.ledgerManager.getAccountBalance('LOANS'),
          total: 0 // Calculated
        },
        total: trialBalance.totalLiabilities
      },
      equity: {
        capital: this.ledgerManager.getAccountBalance('CAPITAL'),
        retainedEarnings: this.ledgerManager.getAccountBalance('RETAINED_EARNINGS'),
        netIncome: trialBalance.netIncome,
        total: trialBalance.totalEquity
      }
    };
  }

  generateIncomeStatement(startDate, endDate) {
    return {
      revenue: {
        sales: this.ledgerManager.getAccountTransactions('SALES', startDate, endDate)
          .reduce((sum, t) => sum + t.amount, 0),
        otherIncome: this.ledgerManager.getAccountTransactions('OTHER_INCOME', startDate, endDate)
          .reduce((sum, t) => sum + t.amount, 0),
        total: 0 // Calculated
      },
      expenses: {
        costOfGoodsSold: this.ledgerManager.getAccountTransactions('COGS', startDate, endDate)
          .reduce((sum, t) => sum + t.amount, 0),
        operatingExpenses: this.ledgerManager.getAccountTransactions('OPERATING_EXPENSES', startDate, endDate)
          .reduce((sum, t) => sum + t.amount, 0),
        total: 0 // Calculated
      },
      grossProfit: 0, // Calculated
      operatingIncome: 0, // Calculated
      netIncome: 0 // Calculated
    };
  }

  generateCashFlow(startDate, endDate) {
    return {
      operating: {
        collections: this.ledgerManager.getAccountTransactions('AR', startDate, endDate, 'credit'),
        payments: this.ledgerManager.getAccountTransactions('AP', startDate, endDate, 'debit'),
        total: 0 // Calculated
      },
      investing: {
        equipmentPurchases: this.ledgerManager.getAccountTransactions('EQUIPMENT', startDate, endDate),
        total: 0 // Calculated
      },
      financing: {
        loanProceeds: this.ledgerManager.getAccountTransactions('LOANS', startDate, endDate),
        total: 0 // Calculated
      },
      netCashFlow: 0 // Calculated
    };
  }

  // Sales Reports
  generateSalesAnalysis(startDate, endDate) {
    const orders = this.salesManager.getOrdersByDateRange(startDate, endDate);
    
    return {
      totalSales: orders.reduce((sum, order) => sum + order.calculateTotals().total, 0),
      orderCount: orders.length,
      averageOrderValue: 0, // Calculated
      topCustomers: this._getTopCustomers(orders),
      topProducts: this._getTopProducts(orders),
      salesByStatus: this._groupOrdersByStatus(orders)
    };
  }

  // Purchasing Reports
  generatePurchaseAnalysis(startDate, endDate) {
    const orders = this.purchasingManager.getOrdersByDateRange(startDate, endDate);
    
    return {
      totalPurchases: orders.reduce((sum, order) => sum + order.calculateTotals().total, 0),
      orderCount: orders.length,
      averageOrderValue: 0, // Calculated
      topVendors: this._getTopVendors(orders),
      topItems: this._getTopPurchasedItems(orders),
      purchasesByStatus: this._groupOrdersByStatus(orders)
    };
  }

  // Inventory Reports
  generateInventoryAnalysis() {
    const items = this.inventoryManager.getAllItems();
    
    return {
      totalValue: items.reduce((sum, item) => sum + item.getValuation().totalCost, 0),
      itemCount: items.length,
      lowStock: items.filter(item => item.needsReorder()),
      topValueItems: this._getTopValueItems(items),
      inventoryTurnover: this._calculateInventoryTurnover()
    };
  }

  // Helper Methods
  _getTopCustomers(orders, limit = 10) {
    const customerSales = new Map();
    
    orders.forEach(order => {
      const total = order.calculateTotals().total;
      customerSales.set(order.customerId, 
        (customerSales.get(order.customerId) || 0) + total);
    });

    return Array.from(customerSales.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([customerId, total]) => ({
        customer: this.salesManager.customers.get(customerId),
        total
      }));
  }

  _getTopProducts(orders, limit = 10) {
    const productSales = new Map();
    
    orders.forEach(order => {
      order.items.forEach(item => {
        const total = item.quantity * item.unitPrice;
        productSales.set(item.itemId,
          (productSales.get(item.itemId) || 0) + total);
      });
    });

    return Array.from(productSales.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([itemId, total]) => ({
        item: this.inventoryManager.getItem(itemId),
        total
      }));
  }

  _getTopVendors(orders, limit = 10) {
    const vendorPurchases = new Map();
    
    orders.forEach(order => {
      const total = order.calculateTotals().total;
      vendorPurchases.set(order.vendorId,
        (vendorPurchases.get(order.vendorId) || 0) + total);
    });

    return Array.from(vendorPurchases.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([vendorId, total]) => ({
        vendor: this.purchasingManager.vendors.get(vendorId),
        total
      }));
  }

  _getTopValueItems(items, limit = 10) {
    return items
      .sort((a, b) => 
        b.getValuation().totalCost - a.getValuation().totalCost)
      .slice(0, limit);
  }

  _calculateInventoryTurnover() {
    const avgInventory = this.inventoryManager.getAllItems()
      .reduce((sum, item) => sum + item.getValuation().totalCost, 0) / 2;
    
    const cogs = this.ledgerManager.getAccountBalance('COGS');
    
    return cogs / avgInventory;
  }

  _groupOrdersByStatus(orders) {
    const grouped = new Map();
    
    orders.forEach(order => {
      grouped.set(order.status,
        (grouped.get(order.status) || 0) + order.calculateTotals().total);
    });

    return Object.fromEntries(grouped);
  }
}
