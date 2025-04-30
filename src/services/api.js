import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for showing loading state
api.interceptors.request.use(
  (config) => {
    // You could dispatch a loading action here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // You could dispatch an error action here
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// PRD API Methods
export const prdApi = {
  // Step 1: Kickoff & Presets
  kickoff: async (data) => {
    try {
      const response = await api.post('/prd/kickoff', data);
      return response.data;
    } catch (error) {
      console.error('Kickoff error:', error);
      throw error;
    }
  },

  // Step 2: Overview & Key Features
  overview: async (data) => {
    try {
      const response = await api.post('/prd/overview', data);
      return response.data;
    } catch (error) {
      console.error('Overview error:', error);
      throw error;
    }
  },

  // Step 3: Data Models
  dataModels: async (data) => {
    try {
      const response = await api.post('/prd/data-models', data);
      return response.data;
    } catch (error) {
      console.error('Data models error:', error);
      throw error;
    }
  },

  // Step 4: Core Workflows
  workflows: async (data) => {
    try {
      const response = await api.post('/prd/workflows', data);
      return response.data;
    } catch (error) {
      console.error('Workflows error:', error);
      throw error;
    }
  },

  // Step 5: UI Styling & Inspiration
  uiStyling: async (data) => {
    try {
      const response = await api.post('/prd/ui-styling', data);
      return response.data;
    } catch (error) {
      console.error('UI styling error:', error);
      throw error;
    }
  },

  // Step 6: Backend Implementation Plan
  backendPlan: async (data) => {
    try {
      const response = await api.post('/prd/backend-plan', data);
      return response.data;
    } catch (error) {
      console.error('Backend plan error:', error);
      throw error;
    }
  },

  // Step 7: Frontend Implementation Plan
  frontendPlan: async (data) => {
    try {
      const response = await api.post('/prd/frontend-plan', data);
      return response.data;
    } catch (error) {
      console.error('Frontend plan error:', error);
      throw error;
    }
  },

  // Step 8: Finalization & Download
  finalize: async (data) => {
    try {
      const response = await api.post('/prd/finalize', data);
      return response.data;
    } catch (error) {
      console.error('Finalize error:', error);
      throw error;
    }
  }
};

export default api; 