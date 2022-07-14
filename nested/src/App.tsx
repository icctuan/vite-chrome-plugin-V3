import { HashRouter, Route, Routes } from 'react-router-dom'
import Base from './pages/Base'
import One from './pages/One'
import Two from './pages/Two'

function App() {
	return (
		<HashRouter basename="/">
			<Routes>
				<Route path="/" element={<Base />}>
					<Route index element={<One />} />
					<Route path="one" element={<One />} />
					<Route path="two" element={<Two />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}

export default App
