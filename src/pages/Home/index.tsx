import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logo.svg'

const Home: FC<any> = () => {
	const [count, setCount] = useState(0)

	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				<button type="button" onClick={() => setCount(count => count + 1)}>
					count is: {count}
				</button>
			</p>
			<p>
				<Link to="/">去主页面</Link>
				{' | '}
				<Link to="/manage">去Manage页面</Link>
			</p>
		</header>
	)
}

export default Home
