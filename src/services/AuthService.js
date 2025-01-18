import axios from 'axios';
import EmailService from './EmailService';
import CryptoJS from 'crypto-js';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class AuthService {
  async login(email, password) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password
      });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async register(name, email, password) {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password
      });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
        await EmailService.sendWelcomeEmail(email, name);
      }
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async forgotPassword(email) {
    try {
      const resetToken = CryptoJS.lib.WordArray.random(32).toString();
      const response = await axios.post(`${API_URL}/auth/forgot-password`, {
        email,
        resetToken
      });
      if (response.data.success) {
        await EmailService.sendPasswordResetEmail(email, resetToken);
      }
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async resetPassword(token, newPassword) {
    try {
      const response = await axios.post(`${API_URL}/auth/reset-password`, {
        token,
        newPassword
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  handleError(error) {
    if (error.response) {
      // Server responded with error
      return new Error(error.response.data.msg || 'An error occurred');
    } else if (error.request) {
      // Request made but no response
      return new Error('No response from server');
    } else {
      // Other error
      return new Error('Error setting up request');
    }
  }
}

export default new AuthService();
