/*
 * @Descripttion: 封闭接口请求
 * @Author: Gavin
 * @version:
 * @Date: 2020-04-28 09:29:50
 * @LastEditTime: 2020-07-21 10:25:16
 */
import axios from 'axios'
import qs from 'qs'

import setXYZ from './setXYZ'

//参数加密请求封装
const axios_xyz = axios.create()
//普通请求封装
const axios_default = axios.create()

// axios_xyz.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios_default.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded; charset=UTF-8'

axios_xyz.interceptors.request.use((config: any) => {
	// 对请求进行拦截加xyz
	if (config.method === 'post') {
		if (config.contentType === 'json') {
			config.headers['Content-Type'] = 'application/json'
		} else {
			// config.data = qs.stringify(config.data);
			config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
		}
		config.data = setXYZ(config.url, config.data)
	}
	if (config.method === 'get') {
		config.params = setXYZ(config.url, config.params)
	}
	return config
})

axios_xyz.defaults.transformRequest = [
	function (data: any) {
		return qs.stringify(data)
	}
]

axios_xyz.interceptors.response.use((response: any) => {
	const res = response.data.value
	const code = res && typeof res.code !== 'undefined' ? res.code : ''
	const message = res && res.message ? res.message : ''
	const data = res && typeof res.data !== 'undefined' ? res.data : res

	let resData = {}
	//接口返回成功
	if ((code === '000000' && res !== '401') || code === '1') {
		resData = {
			success: true,
			data
		}
	} else if (!code && response.data.success) {
		resData = {
			success: true,
			data
		}
	} else if (code === '000999' || code === -999 || res === '-999') {
		resData = {
			success: false,
			message: '登陆验证失败'
		}
	} else if (res === '401') {
		resData = {
			success: false,
			message: '参数验证失败'
		}
	} else if (code === '000995') {
		resData = {
			success: false,
			message: message
		}
	} else {
		resData = {
			success: false,
			message: message || '出错了，请稍后再试~'
		}
	}

	return resData
})

axios_default.defaults.transformRequest = [
	function (data: any) {
		return qs.stringify(data)
	}
]

axios_default.interceptors.response.use((response: any) => {
	let resData = {}
	if (response.config.url.includes('proxy.pac')) {
		resData = {
			success: true,
			data: response.data
		}
	} else if (
		(response.status === 200 && response.data.base_resp && response.data.base_resp.ret === 0) ||
		response.data.errcode === 0
	) {
		resData = {
			success: true,
			data: response.data
		}
	} else {
		resData = {
			success: false,
			message: (response.data.base_resp && response.data.base_resp.err_msg) || '出错了，请稍后再试~'
		}
	}
	return resData
})

export { axios_xyz, axios_default }
