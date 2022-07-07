import { config } from '../config'
import { axios_xyz } from './request'

//获取用户信息
export const reqGetUser = () => {
	return axios_xyz.get(`${config?.ade}xdnphb/common/account/get`)
}

//退出登录
export const reqLoginOut = () => {
	return axios_xyz.post(`${config?.ade}nr/user/login/loginOut`)
}
