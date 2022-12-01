import { ComponentType } from 'react'
import Tool from '../pages/Tool'
import Set from '../pages/Set'
import Layout from '../pages/Layout'
import Manage from '../pages/Manage'
import NotLogin from '../pages/NotLogin'

type Route = {
	path?: string
	routes?: Route[]
	component?: ComponentType<any>
	redirect?: string // 重定向
	exact?: boolean | undefined
}

const routes: Route[] = [
	{
		path: '/',
		redirect: '/dashboard/tool',
		routes: [
			{
				path: '/dashboard',
				component: Layout,
				routes: [
					{
						path: '/dashboard/tool',
						component: Tool,
						exact: true
					},
					{
						path: '/dashboard/tools',
						component: Set,
						exact: true
					},
					{
						path: '/dashboard/tools',
						component: Manage,
						exact: true
					}
				]
			},
			{
				path: '/notLogin',
				component: NotLogin
			}
		]
	}
]

export default routes
