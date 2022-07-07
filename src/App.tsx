import { HashRouter, Route, Routes } from 'react-router-dom'
import Tool from './pages/Tool'
import Set from './pages/Set'
import Layout from './pages/Layout'
import Manage from './pages/Manage'

function App() {
	return (
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
	)
}

export default App
