// 布局组件
import { Divider } from 'antd'
import { FC, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './index.module.less'

const Base: FC<any> = () => {
	const [active, setActive] = useState<'one' | 'two'>('one')

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<Link
					to="/one"
					style={{ color: active === 'one' ? '#1890ff' : '#000' }}
					onClick={() => setActive('one')}
				>
					One
				</Link>
				<Divider type="vertical" style={{ borderColor: '#000' }} />
				<Link
					to="/two"
					style={{ color: active === 'two' ? '#1890ff' : '#000' }}
					onClick={() => setActive('two')}
				>
					Two
				</Link>
			</header>
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	)
}

export default Base
