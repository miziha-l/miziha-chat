import axios from 'axios';

const api = axios.create({
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token'
  }
});

// 添加请求拦截器
api.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('Request sent:', config);
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.error('Request error:', error);
  return Promise.reject(error);
});

// 添加响应拦截器
api.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('Response received:', response);
  return response;
}, function (error) {
  // 对响应错误做点什么
  console.error('Response error:', error);
  return Promise.reject(error);
});

export default api;
