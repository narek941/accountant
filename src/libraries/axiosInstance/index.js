import axios from 'axios';


const defaultOptions = {
  baseURL: '',
};

const axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use((config) => {

  config.params = {
    ...config.params,
  };

  return config;
});

export default axiosInstance;
