import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

// Crop Planning and Forecasting
export const cropPlanningService = {
  async generateCropPlan(params) {
    return axios.post(`${API_BASE_URL}/crop-planning/generate`, params);
  },
  async getForecast(cropId) {
    return axios.get(`${API_BASE_URL}/crop-planning/${cropId}/forecast`);
  },
  async updatePlan(planId, updates) {
    return axios.put(`${API_BASE_URL}/crop-planning/${planId}`, updates);
  },
  async getRotationSchedule() {
    return axios.get(`${API_BASE_URL}/crop-planning/rotation`);
  },
  async optimizePlanting(constraints) {
    return axios.post(`${API_BASE_URL}/crop-planning/optimize`, constraints);
  }
};

// Weather Integration
export const weatherService = {
  async getCurrentConditions(location) {
    return axios.get(`${API_BASE_URL}/weather/current`, { params: location });
  },
  async getForecast(location, days) {
    return axios.get(`${API_BASE_URL}/weather/forecast`, { 
      params: { ...location, days } 
    });
  },
  async getAlerts(location) {
    return axios.get(`${API_BASE_URL}/weather/alerts`, { params: location });
  },
  async setWeatherAlerts(preferences) {
    return axios.post(`${API_BASE_URL}/weather/alerts/preferences`, preferences);
  },
  async getHistoricalData(location, dateRange) {
    return axios.get(`${API_BASE_URL}/weather/historical`, {
      params: { ...location, ...dateRange }
    });
  }
};

// Irrigation Control
export const irrigationService = {
  async getIrrigationZones() {
    return axios.get(`${API_BASE_URL}/irrigation/zones`);
  },
  async updateSchedule(zoneId, schedule) {
    return axios.put(`${API_BASE_URL}/irrigation/zones/${zoneId}/schedule`, schedule);
  },
  async getWaterUsage(dateRange) {
    return axios.get(`${API_BASE_URL}/irrigation/usage`, { params: dateRange });
  },
  async controlZone(zoneId, action) {
    return axios.post(`${API_BASE_URL}/irrigation/zones/${zoneId}/control`, action);
  },
  async getSystemStatus() {
    return axios.get(`${API_BASE_URL}/irrigation/status`);
  },
  async optimizeWaterUsage(params) {
    return axios.post(`${API_BASE_URL}/irrigation/optimize`, params);
  }
};

// Soil Analysis
export const soilService = {
  async analyzeSoil(sampleData) {
    return axios.post(`${API_BASE_URL}/soil/analyze`, sampleData);
  },
  async getSoilHistory(plotId) {
    return axios.get(`${API_BASE_URL}/soil/${plotId}/history`);
  },
  async getRecommendations(analysisId) {
    return axios.get(`${API_BASE_URL}/soil/${analysisId}/recommendations`);
  },
  async trackNutrients(plotId) {
    return axios.get(`${API_BASE_URL}/soil/${plotId}/nutrients`);
  },
  async getPHLevels(plotId) {
    return axios.get(`${API_BASE_URL}/soil/${plotId}/ph`);
  },
  async getMicroorganismAnalysis(sampleId) {
    return axios.get(`${API_BASE_URL}/soil/${sampleId}/microorganisms`);
  }
};

// Yield Prediction
export const yieldService = {
  async predictYield(cropData) {
    return axios.post(`${API_BASE_URL}/yield/predict`, cropData);
  },
  async getHistoricalYields(cropId) {
    return axios.get(`${API_BASE_URL}/yield/${cropId}/history`);
  },
  async analyzeFactors(yieldId) {
    return axios.get(`${API_BASE_URL}/yield/${yieldId}/factors`);
  },
  async optimizeYield(params) {
    return axios.post(`${API_BASE_URL}/yield/optimize`, params);
  },
  async getMarketProjections(cropId) {
    return axios.get(`${API_BASE_URL}/yield/${cropId}/market-projections`);
  }
};

// Enhanced Plant Recognition
export const enhancedPlantService = {
  async detectDisease(imageData) {
    const formData = new FormData();
    formData.append('image', imageData);
    return axios.post(`${API_BASE_URL}/plant/disease-detection`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  async analyzeGrowthStage(imageData) {
    const formData = new FormData();
    formData.append('image', imageData);
    return axios.post(`${API_BASE_URL}/plant/growth-analysis`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  async getTreatmentPlan(diseaseId) {
    return axios.get(`${API_BASE_URL}/plant/treatment/${diseaseId}`);
  },
  async predictHarvestTime(cropData) {
    return axios.post(`${API_BASE_URL}/plant/harvest-prediction`, cropData);
  },
  async getNutritionalNeeds(plantId) {
    return axios.get(`${API_BASE_URL}/plant/${plantId}/nutrition`);
  },
  async getOrganicTreatments(diseaseId) {
    return axios.get(`${API_BASE_URL}/plant/organic-treatments/${diseaseId}`);
  }
};
