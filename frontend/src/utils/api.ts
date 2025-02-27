import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type':'application/json'
  },
})


api.interceptors.response.use(
  (response) => response, 
  (error) => {
    console.log("Api error:", error);
    return Promise.reject(error);
  }
)


export default api;