import { axios_xyz } from './request'

//获取用户信息
export const reqGetUser = () => {
	return axios_xyz.get(`/xdnphb/common/account/get`)
}

//退出登录
export const reqLoginOut = () => {
	return axios_xyz.post(`/nr/user/login/loginOut`)
}
