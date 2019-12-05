import axios from '@/utils/request'

const getCode = (sid) => {
  return axios.get('/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

const forget = options => {
  return axios.post('/forget', {
    ...options
  })
}

export { getCode, forget }
