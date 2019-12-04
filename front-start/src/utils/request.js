import HttpRequest from './axios';
import config from '@/config/index'
const url = process.env.NODE_ENV === 'development' ? config.baseURL.dev : config.baseURL.pro

const axios = new HttpRequest(url)

export default axios
