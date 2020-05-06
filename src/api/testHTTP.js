import request from '@/utils/request'

export function test(data) {
  return request({
    url: 'down.php',
    method: 'post',
    data
  })
}
