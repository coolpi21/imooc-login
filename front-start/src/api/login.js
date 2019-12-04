import axios from '@/utils/request'

const getCode = () => {
  return axios.get('/getCaptcha')
}

const forget = options => {
  return axios.post('/forget', {
    ...options
  })
}

export { getCode, forget }
