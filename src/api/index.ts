import { axios_xyz } from './request'
import { request, requestOld } from '../service'
import { config } from '../config'
import { proxy_url } from '../config/proxy'
// /** 获取用户信息 */
// export const reqGetUser = () => {
// 	return axios_xyz.get(`${config.ade}xdnphb/common/account/get`)
// }

// // /** 退出登录 */
// export const reqLoginOut = () => {
// 	return axios_xyz.post(`${config.ade}nr/user/login/loginOut`)
// }

/** 扫码登录接口 */
export const reqGetUserInfo = () => {
	return request.get({
		url: `/throwdata/throw/data/user/getUserInfo`
	})
}

/** 退出登录 */
export const reqLoginOut = () => {
	return requestOld.post({
		url: `${config.ade}nr/user/login/loginOut`
	})
}
