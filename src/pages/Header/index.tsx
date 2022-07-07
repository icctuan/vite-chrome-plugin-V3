import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
// import logo from "./img/logo.svg";

const Header: FC<any> = () => {
	const [count, setCount] = useState(0)

	return (
		<header className="App-header">
			<p>test</p>
			<p>
				<Link to="/manage">去Manage页面</Link>
				{' | '}
				<Link to="/home">去Home页面</Link>
			</p>
		</header>
	)
}

export default Header
