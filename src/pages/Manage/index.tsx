import { FC } from 'react'
import { Link } from 'react-router-dom'

const Manage: FC<any> = () => {
	return (
		<div>
			Manage
			<p>
				<Link to="/">去主页面</Link>
				{' | '}
				<Link to="/home">去Home页面</Link>
			</p>
		</div>
	)
}

export default Manage
