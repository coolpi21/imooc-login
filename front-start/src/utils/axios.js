// 封装axios请求
import axios from "axios";
import errorHandle from "./errorHandle";

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      timeout: 10000
    };
    return config;
  }
  // 创建拦截器
  interceptors(instance) {
    // Add a request interceptor
    instance.interceptors.request.use(
      config => {
        // Do something before request is sent
        console.log(config);
        return config;
      },
      err => {
        errorHandle(err);
        // Do something with request error
        return Promise.reject(err);
      }
    );

    // Add a response interceptor
    instance.interceptors.response.use(
      res => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.reject(res);
        }
      },
      err => {
        debugger;
        errorHandle(err);
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(err);
      }
    );
  }
  request(options) {
    const config = Object.assign(this.getInsideConfig(), options);
    const instance = axios.create();
    this.interceptors(instance);
    return instance(config);
  }
  get(url,config) {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }
  post(url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}

export default HttpRequest;
