import io from 'socket.io-client';
import { realtimeAnalyticsService } from './realtime-analytics';

class WebSocketManager {
  constructor() {
    this.socket = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 5000;
    this.channels = new Map();
    this.messageQueue = [];
    this.isConnected = false;
    this.handlers = new Map();
  }

  initialize(farmId, userId) {
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    
    this.socket = io(`${baseURL}/realtime`, {
      query: { farmId, userId },
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: this.maxReconnectAttempts,
      reconnectionDelay: this.reconnectDelay,
    });

    this._setupEventHandlers();
    this._setupHeartbeat();
    this._setupMessageQueue();
  }

  _setupEventHandlers() {
    // Connection events
    this.socket.on('connect', () => {
      console.log('WebSocket connected');
      this.isConnected = true;
      this.reconnectAttempts = 0;
      this._processMessageQueue();
      this._resubscribeToChannels();
    });

    this.socket.on('disconnect', (reason) => {
      console.log('WebSocket disconnected:', reason);
      this.isConnected = false;
      if (reason === 'io server disconnect') {
        this.socket.connect();
      }
    });

    this.socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
      this._handleReconnect();
    });

    // Real-time data events
    this._setupDataHandlers();
  }

  _setupDataHandlers() {
    // Farm sensor data
    this.socket.on('sensor_data', (data) => {
      this._notifyHandlers('sensor', data);
      realtimeAnalyticsService.processSensorData(data);
    });

    // Weather updates
    this.socket.on('weather_update', (data) => {
      this._notifyHandlers('weather', data);
      realtimeAnalyticsService.processWeatherData(data);
    });

    // Equipment status
    this.socket.on('equipment_status', (data) => {
      this._notifyHandlers('equipment', data);
      realtimeAnalyticsService.processEquipmentData(data);
    });

    // Crop conditions
    this.socket.on('crop_conditions', (data) => {
      this._notifyHandlers('crops', data);
      realtimeAnalyticsService.processCropData(data);
    });

    // Market prices
    this.socket.on('market_prices', (data) => {
      this._notifyHandlers('market', data);
      realtimeAnalyticsService.processMarketData(data);
    });

    // Alerts and notifications
    this.socket.on('alert', (data) => {
      this._notifyHandlers('alert', data);
      this._handleAlert(data);
    });

    // System status
    this.socket.on('system_status', (data) => {
      this._notifyHandlers('system', data);
      this._handleSystemStatus(data);
    });
  }

  _setupHeartbeat() {
    const HEARTBEAT_INTERVAL = 30000; // 30 seconds
    
    setInterval(() => {
      if (this.isConnected) {
        this.socket.emit('heartbeat', { timestamp: Date.now() });
      }
    }, HEARTBEAT_INTERVAL);

    this.socket.on('heartbeat_ack', (data) => {
      this._updateConnectionStatus(data);
    });
  }

  _setupMessageQueue() {
    setInterval(() => {
      if (this.isConnected && this.messageQueue.length > 0) {
        this._processMessageQueue();
      }
    }, 1000);
  }

  _processMessageQueue() {
    while (this.messageQueue.length > 0 && this.isConnected) {
      const { event, data } = this.messageQueue.shift();
      this.socket.emit(event, data);
    }
  }

  _handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      setTimeout(() => {
        console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
        this.socket.connect();
      }, this.reconnectDelay * this.reconnectAttempts);
    } else {
      console.error('Max reconnection attempts reached');
      this._notifyHandlers('error', { 
        type: 'connection',
        message: 'Unable to establish connection' 
      });
    }
  }

  _resubscribeToChannels() {
    this.channels.forEach((handlers, channel) => {
      this.socket.emit('subscribe', { channel });
    });
  }

  _notifyHandlers(event, data) {
    const handlers = this.handlers.get(event) || [];
    handlers.forEach(handler => handler(data));
  }

  _handleAlert(alert) {
    // Process different types of alerts
    switch (alert.type) {
      case 'critical':
        this._handleCriticalAlert(alert);
        break;
      case 'warning':
        this._handleWarningAlert(alert);
        break;
      case 'info':
        this._handleInfoAlert(alert);
        break;
      default:
        console.log('Unknown alert type:', alert);
    }
  }

  _handleSystemStatus(status) {
    // Update system status and notify relevant components
    if (status.performance < 0.5) {
      this._notifyHandlers('system_degraded', status);
    }
  }

  _updateConnectionStatus(heartbeatData) {
    const latency = Date.now() - heartbeatData.timestamp;
    this._notifyHandlers('connection_status', { 
      connected: this.isConnected,
      latency,
      quality: this._calculateConnectionQuality(latency)
    });
  }

  _calculateConnectionQuality(latency) {
    if (latency < 100) return 'excellent';
    if (latency < 300) return 'good';
    if (latency < 600) return 'fair';
    return 'poor';
  }

  // Public methods
  subscribe(event, handler) {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, []);
    }
    this.handlers.get(event).push(handler);

    // Return unsubscribe function
    return () => {
      const handlers = this.handlers.get(event);
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    };
  }

  send(event, data) {
    if (this.isConnected) {
      this.socket.emit(event, data);
    } else {
      this.messageQueue.push({ event, data });
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.isConnected = false;
      this.handlers.clear();
      this.channels.clear();
      this.messageQueue = [];
    }
  }
}

export const websocketManager = new WebSocketManager();
