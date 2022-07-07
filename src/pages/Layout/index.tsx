// 布局组件
import { FC, useState } from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { Divider, Radio, RadioChangeEvent } from 'antd'
import styles from './index.module.less'

const Layout: FC<any> = () => {
	const [active, setActive] = useState<'tool' | 'manage' | 'setting'>('tool')

	const navigate = useNavigate()

	const handleRouteActiveChange = (e: RadioChangeEvent) => {
		const value = e.target.value
		setActive(value)
		navigate(value)
	}

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<Radio.Group value={active} onChange={handleRouteActiveChange}>
					<Radio.Button value="tool">工具</Radio.Button>
					<Radio.Button value="manage">管理</Radio.Button>
					<Radio.Button value="setting">设置</Radio.Button>
				</Radio.Group>
			</header>
			<Divider className="wd-my-0" />
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
