import Header from './pages/Header'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Manage from './pages/Manage'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<HashRouter basename="/">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Header />} />
					{/* <Route path="tool" element={<Tool />} /> */}
					<Route path="manage" element={<Manage />} />
					<Route path="home" element={<Home />} />
				</Route>
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</HashRouter>
	)
}

export default App
