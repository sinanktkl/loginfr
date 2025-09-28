

// import { commonAPI } from "./commonAPI";
// import { serverUrl } from "./serverUrl";

// // ✅ Login API
// export const LoginAPI = async (user) => {
//     return await commonAPI("POST", `${serverUrl}/login`, user, "");
// };

// // ✅ Get Current User API
// export const GetUserAPI = async () => {
//     return await commonAPI("GET", `${serverUrl}/me`, "", "");
// };





import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";

// Login API
export const LoginAPI = async (user) => {
  return await commonAPI("POST", `${serverUrl}/login`, user, "");
};

// Get Current User API
export const GetUserAPI = async (token) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  return await commonAPI("GET", `${serverUrl}/me`, "", headers);
};












































































// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api',
//   withCredentials: true, // IMPORTANT: allow sending/receiving httpOnly cookie
// });

// export default api;


// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000', // backend
//   withCredentials: true,
// });

// // attach token automatically
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token') || sessionStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;