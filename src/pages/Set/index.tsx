import { FC, useState } from 'react'
import { Avatar, Divider } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

import styles from './index.module.less'

const Set: FC<any> = () => {
	const handleLogOut = () => {
		console.log('out')
	}

	return (
		<div className={styles.setWrapper}>
			<p>
				<Avatar size={50} className="wd-mr-10px" />
				{'xxx'}
			</p>
			<div>
				<Divider />
				<p className={styles.bottom} onClick={handleLogOut}>
					<LogoutOutlined className="wd-mr-10px" />
					退出登录
				</p>
			</div>
		</div>
	)
}

export default Set
