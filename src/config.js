// API configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://prdproducerbackend.vercel.app/' 
  : 'http://localhost:3001/api';

export default {
  API_BASE_URL
}; 