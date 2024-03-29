import { useEffect, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { isEmpty } from 'lodash-es'
import Tool from './pages/Tool'
import Set from './pages/Set'
import Layout from './pages/Layout'
import Manage from './pages/Manage'
import NotLogin from './pages/NotLogin'
// import { reqGetUser } from './api'
import { reqGetUserInfo } from './api'
import { Spin } from 'antd'
import { useUserInfo } from './context/user'

function App() {
	// 获取用户信息并存入recoil
	const [userInfo, dispatchUserInfo] = useUserInfo()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		// 获取用户登录信息
		reqGetUserInfo()
			.then(res => {
				const { success, result } = res as any
				if (success) {
					dispatchUserInfo(result || {})
				}
			})
			.finally(() => setLoading(false))
	}, [])

	return (
		<Spin spinning={loading}>
			{isEmpty(userInfo) ? (
				<NotLogin />
			) : (
				<HashRouter basename="/">
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Manage />} />
							<Route path="tool" element={<Tool />} />
							<Route path="manage" element={<Manage />} />
							<Route path="setting" element={<Set />} />
						</Route>
						{/* <Route path="notLogin" element={<NotLogin />} /> */}
					</Routes>
				</HashRouter>
			)}
		</Spin>
	)
}

export default App
