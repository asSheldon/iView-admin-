import axios from '@/libs/api.request'

export function getTableData () {
  return axios.request({
    url: '/queryMatchtableList',
    params: {}
  })
}
