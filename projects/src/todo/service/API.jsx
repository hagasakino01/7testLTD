import axios from 'axios';

// const baseUrl = process.env.REACT_APP_API_BASE_URL;
let baseUrl = `${process.env.REACT_APP_API_URL}/`;

const API = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

API.interceptors.request.use((request) => {
  let token = `Bearer  ${
    localStorage.getItem('token')
      ? localStorage.getItem('token')
      : sessionStorage.getItem('token')
      ? sessionStorage.getItem('token')
      : ''
  }`;
  request.headers['Authorization'] = token;
  return request;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response && error.response.status) {
      switch (error.response.status) {
        case 400:
          return error.response;
        case 401:
          // createBrowserHistory().push('/login');
          // window.location.reload();
          // localStorage.clear();
          break;
        case 422:
          error['errMsg'] = 'Vui lòng kiểm tra lại dữ liệu';
          break;
        default:
          return Promise.reject({ response: error });
      }
      return Promise.reject({ response: error });
    }
  },
);

export default API;