import axios from 'axios';

// Enterprise Plus API endpoints
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

// Inventory Management
export const inventoryService = {
  async getInventory() {
    return axios.get(`${API_BASE_URL}/inventory`);
  },
  async updateStock(itemId, quantity) {
    return axios.put(`${API_BASE_URL}/inventory/${itemId}`, { quantity });
  },
  async addProduct(product) {
    return axios.post(`${API_BASE_URL}/inventory`, product);
  },
  async getInventoryAnalytics() {
    return axios.get(`${API_BASE_URL}/inventory/analytics`);
  }
};

// Financial Management
export const financeService = {
  async getTransactions(dateRange) {
    return axios.get(`${API_BASE_URL}/finance/transactions`, { params: dateRange });
  },
  async generateReport(type, params) {
    return axios.post(`${API_BASE_URL}/finance/reports/${type}`, params);
  },
  async getForecast() {
    return axios.get(`${API_BASE_URL}/finance/forecast`);
  },
  async recordExpense(expense) {
    return axios.post(`${API_BASE_URL}/finance/expenses`, expense);
  }
};

// Order Management
export const orderService = {
  async getOrders(filters) {
    return axios.get(`${API_BASE_URL}/orders`, { params: filters });
  },
  async createOrder(order) {
    return axios.post(`${API_BASE_URL}/orders`, order);
  },
  async updateOrderStatus(orderId, status) {
    return axios.put(`${API_BASE_URL}/orders/${orderId}/status`, { status });
  },
  async getOrderAnalytics() {
    return axios.get(`${API_BASE_URL}/orders/analytics`);
  }
};

// Supply Chain Management
export const supplyChainService = {
  async getSuppliers() {
    return axios.get(`${API_BASE_URL}/suppliers`);
  },
  async createPurchaseOrder(po) {
    return axios.post(`${API_BASE_URL}/purchase-orders`, po);
  },
  async trackShipment(shipmentId) {
    return axios.get(`${API_BASE_URL}/shipments/${shipmentId}`);
  },
  async getSupplyChainMetrics() {
    return axios.get(`${API_BASE_URL}/supply-chain/metrics`);
  }
};

// CRM
export const crmService = {
  async getCustomers(filters) {
    return axios.get(`${API_BASE_URL}/customers`, { params: filters });
  },
  async addCustomer(customer) {
    return axios.post(`${API_BASE_URL}/customers`, customer);
  },
  async updateCustomer(customerId, data) {
    return axios.put(`${API_BASE_URL}/customers/${customerId}`, data);
  },
  async getCustomerAnalytics() {
    return axios.get(`${API_BASE_URL}/customers/analytics`);
  }
};

// Analytics
export const analyticsService = {
  async getDashboardMetrics() {
    return axios.get(`${API_BASE_URL}/analytics/dashboard`);
  },
  async generateCustomReport(params) {
    return axios.post(`${API_BASE_URL}/analytics/custom-report`, params);
  },
  async getPerformanceMetrics() {
    return axios.get(`${API_BASE_URL}/analytics/performance`);
  }
};

// Plant Recognition Service
export const plantRecognitionService = {
  async identifyPlant(imageData) {
    const formData = new FormData();
    formData.append('image', imageData);
    return axios.post(`${API_BASE_URL}/plant-recognition`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  async getPlantDetails(plantId) {
    return axios.get(`${API_BASE_URL}/plants/${plantId}`);
  },
  async getSimilarPlants(plantId) {
    return axios.get(`${API_BASE_URL}/plants/${plantId}/similar`);
  }
};

// Local Store Locator
export const storeLocatorService = {
  async findNearbyStores(coordinates, radius) {
    return axios.get(`${API_BASE_URL}/stores/nearby`, {
      params: { lat: coordinates.lat, lng: coordinates.lng, radius }
    });
  },
  async getStoreInventory(storeId) {
    return axios.get(`${API_BASE_URL}/stores/${storeId}/inventory`);
  },
  async checkProductAvailability(storeId, productId) {
    return axios.get(`${API_BASE_URL}/stores/${storeId}/products/${productId}`);
  }
};
