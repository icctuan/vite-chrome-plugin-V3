import { FC } from 'react'
import { Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { config } from '../../config'
import styles from './index.module.less'

const Notlogin: FC<any> = () => {
	const handleLogIn = () => {
		const loginHref = config!.loginUrl
		window.open(loginHref)
	}

	return (
		<div className={styles.notLoginWrapper}>
			<div>
				<p>要使用小插件，请先登录哦</p>
				<Button className={styles.bottom} onClick={handleLogIn}>
					<LoginOutlined className="wd-mr-4px" />
					登录
				</Button>
			</div>
		</div>
	)
}

export default Notlogin
