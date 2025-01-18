import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

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

  async register(userData) {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async forgotPassword(email) {
    try {
      const response = await axios.post(`${API_URL}/auth/forgot-password`, { email });
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

  async googleLogin() {
    try {
      window.location.href = `${API_URL}/auth/google`;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async facebookLogin() {
    try {
      window.location.href = `${API_URL}/auth/facebook`;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async handleSocialAuthCallback(provider, code) {
    try {
      const response = await axios.get(`${API_URL}/auth/${provider}/callback`, {
        params: { code }
      });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  handleError(error) {
    if (error.response) {
      return new Error(error.response.data.error || 'An error occurred');
    } else if (error.request) {
      return new Error('No response from server');
    } else {
      return new Error('Error setting up request');
    }
  }
}

export default new AuthService();
