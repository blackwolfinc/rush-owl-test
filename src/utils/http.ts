import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


// ============================================================================================================  
// AUTH TOKEN 
// ============================================================================================================  

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const authToken = ""
    const token = authToken;
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
