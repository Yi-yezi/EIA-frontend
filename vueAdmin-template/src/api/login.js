import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/session ',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/session',
    method: 'post'
  })
}
