import request from '../utils/request'


export default {
  shopping(offset, limit) {
    return request({
      url: "https://elm.cangdu.org/v1/users/list",
      method: "get",
      params: {
        offset,
        limit
      }
    })
  },
  count(offset,pageSize){
    return request({
      url:"https://elm.cangdu.org/v1/users/count",
      method:"get"
    })
  }
}