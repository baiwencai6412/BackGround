// @ 代表的是 /src 
// import axios from '@/utils/request' 
import request from "../utils/request";



export default {
    login(name, pass) {
        return request({
            url: '/list/login',
            method: "post",
            data: {
                name,
                pass
            }
        })
    },
    gitinfo() {
        return request({
            url: "/user/info"
        })
    },
    // list(){
    //     return request({
    //         url:""
    //     })
    // }

}