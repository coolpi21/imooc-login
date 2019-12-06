import axios from '@/utils/request'

// 获取验证码接口
const getCode = sid => {
  return axios.get('/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

// 忘记密码接口
const forget = options => {
  return axios.post('/forget', {
    ...options
  })
}

// 登录接口
const login = loginInfo => {
  return axios.post('/login', {
    ...loginInfo
  })
}

export { getCode, forget, login }
