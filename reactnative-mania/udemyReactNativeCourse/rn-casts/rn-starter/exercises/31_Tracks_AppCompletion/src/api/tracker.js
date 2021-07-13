import axios from 'axios';
import { AsyncStorage } from 'react-native';

let url;

/* this variable is set to true when react native is running in
Dev mode */
if (__DEV__) {
  url = 'http://10.0.2.2:3000';
} else {
  url = '';
}

const instance = axios.create({
  baseURL: url,
});

/* concept of appending token to each request with the help
of axios 
see how we first created axios instance and than applied
interceptor on it..
*/
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      // adding token in headers
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
