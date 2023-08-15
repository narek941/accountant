import axios from 'axios';


const defaultOptions = {
  baseURL: 'acc-accountant.am',
};

const axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use((config) => {

  config.params = {
    ...config.params,
  };

  return config;
});

export default axiosInstance;
