/*
 * @Author: your name
 * @Date: 2020-04-28 09:29:50
 * @LastEditTime: 2020-04-28 20:42:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-chrome-test\src\api\setXYZ.js
 */
import md5 from 'blueimp-md5'
import { sampleSize } from 'lodash-es'

const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

/**
 * 添加xyz参数
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 */
export default function setXYZ(url: any, data: Record<string, any> = {}) {
	let code = ''

	if (url.indexOf('http://') == 0) {
		code += url.slice(url.indexOf('/', 7)) + '?AppKey=joker'
	} else if (url.indexOf('https://') == 0) {
		code += url.slice(url.indexOf('/', 8)) + '?AppKey=joker'
	} else {
		code = url + '?AppKey=joker'
	}
	//let code = `${url}?AppKey=joker`;
	let param: Record<string, any> = {}
	for (let key of Object.keys(data).sort()) {
		let value = data[key] === null ? '' : data[key]
		param[key] = value
		code += `&${key}=${value}`
	}

	// 随机取数大小为9的数组转为字符串
	const nonce = sampleSize(arr, 9).join('')
	code += `&nonce=${nonce}`

	param.nonce = nonce
	param.xyz = md5(code)
	return param
}
