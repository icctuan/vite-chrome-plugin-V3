import { BasicLayoutProps } from '../layout'

// 初始化状态值
export type InitialStateType = {
	loading: boolean
	userInfo?: Record<string, any>
	accessInfo?: string[]
	bindInfo?: Record<string, any>
	// layout配置
	settings: BasicLayoutProps
}
