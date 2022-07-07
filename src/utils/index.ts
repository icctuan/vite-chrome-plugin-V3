// 环境变量
type ENV = 'development' | 'test' | 'production'

// 获取环境变量
export function getEev(): ENV {
	// @ts-ignore
	return import.meta.env.VITE_NODE_ENV
}
