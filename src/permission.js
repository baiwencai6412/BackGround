import router from './router/index';
import {getuserinfo} from './api/login';

router.beforeEach((to, from, next) => {

    const token = localStorage.getItem('bai_token')

    if (!token) {
        if (to.path !== "/login") {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            const userinfo = localStorage.getItem('bai_info')
            if (userinfo) {
                next()
            } else {
                gitinfo(token).then((Response) => {
                    const resp = Response.data
                    console.log('prer', resp)
                    if (resp.fiag) {
                        localStorage.setItem("bai_login", JSON.stringify(resp.data))
                        next()
                    } else {
                        next({
                            path: '/login'
                        })
                    }
                })
            }
        }
    }
})





// import router from './router'
// import {
//     getUserInfo
// } from './api/login'

// router.beforeEach((to, from, next) => { // 获取 token
//     const token = localStorage.getItem('mgx-msm-token')
//     // 没有 token
//     if (!token) { // 不允许访问其他路由, 回到登录页 
//         if (to.path !== '/login') {
//             next({
//                 path: '/login'
//             })
//         } else {
//             next()
//         }
//     } else { // 有 token
//         if (to.path === '/login') { // 进入目标路由 next() 
//         } else { // 有token, 看下是否有用户信息
//             const userInfo = localStorage.getItem('mgx-msm-user')
//             if (userInfo) { // 有信息, 进入目标路由
//                 next()
//             } else { // 通过token获取用户信息
//                 getUserInfo(token).then((response) => {
//                     const resp = response.data
//                     console.log('prer', resp)
//                     if (resp.flag) { // 获取到, 保存数据 
//                         localStorage.setItem('mgx-msm-user', JSON.stringify(resp.data))
//                         next()
//                     } else { // 未获取到,重新登录 
//                         next({
//                             path: '/login'
//                         })
//                     }
//                 })

//                 // 2. 将权限添加 到全局民中
//                 // 3. 测试, 1. 清空浏览器保存的用户数据和token
//             }
//         }
//     }
// })