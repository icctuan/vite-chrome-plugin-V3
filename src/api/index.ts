import { axios_xyz } from './request'
import { request, requestOld } from '../service'

// /** 获取用户信息 */
// export const reqGetUser = () => {
// 	return axios_xyz.get(`/xdnphb/common/account/get`)
// }

// /** 退出登录 */
export const reqLoginOut = () => {
	return axios_xyz.post(`/nr/user/login/loginOut`)
}

/** 扫码登录接口 */
export const reqGetUserInfo = () => {
	return request.get({
		url: '/throwdata/throw/data/user/getUserInfo'
	})
}

// /** 退出登录 */
// export const reqLoginOut = () => {
// 	return requestOld.post({
// 		url: '/nr/user/login/loginOut'
// 	})
// }
