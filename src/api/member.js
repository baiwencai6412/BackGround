import request from '../utils/request'
// import { search } from 'core-js/fn/symbol'

export default {
    getlist() {
        return request({
            url: "/member/list/",
            method: "post",
        })
    },
    search(page, size, searchMap){
        return request({
            url: '/membel/list/search/${page}/${size}',
            method: "post",
            data:searchMap
        })
    }
}