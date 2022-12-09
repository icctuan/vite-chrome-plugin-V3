// 环境变量
type ENV = 'development' | 'test' | 'production'

/** 获取环境变量 */
export const getEev = (): ENV => {
	return import.meta.env.VITE_NODE_ENV
}

/** 是否为非https页面 */
export const notDevPage = (url: string) => {
	const reg = new RegExp(/^http[s]*:\/\/(\S+)+$/)
	return reg.test(url)
}
