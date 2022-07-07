import { useEffect, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { isEmpty } from 'lodash-es'
import Tool from './pages/Tool'
import Set from './pages/Set'
import Layout from './pages/Layout'
import Manage from './pages/Manage'
import Notlogin from './pages/NotLogin'
import { reqGetUser } from './api'

function App() {
	const [userInfo, setUserInfo] = useState<Record<string, any>>({})
	const [loading, setLoading] = useState(false)

	// useEffect(() => {
	// 	setLoading(true)
	// 	// // 获取用户登录信息
	// 	reqGetUser()
	// 		.then(res => {
	// 			console.log(res)
	// 			const { success, data } = res as any
	// 			if (success) {
	// 				setUserInfo(data?.user || {})
	// 			}
	// 		})
	// 		.finally(() => setLoading(false))
	// }, [])

	return (
		<>
			{/* {isEmpty(userInfo) ? (
				<Notlogin />
			) : ( */}
			<HashRouter basename="/">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Tool />} />
						<Route path="tool" element={<Tool />} />
						<Route path="manage" element={<Manage />} />
						<Route path="setting" element={<Set />} />
					</Route>
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</HashRouter>
			{/* )} */}
		</>
	)
}

export default App
