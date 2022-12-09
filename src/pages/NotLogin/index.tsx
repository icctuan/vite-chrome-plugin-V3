import { FC } from 'react'
import { Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { config } from '../../config'
import styles from './index.module.less'
import { useUserInfo } from '../../context/user'

const NotLogin: FC<any> = () => {
	const [, setUserInfo] = useUserInfo()
	/** 打开登录页面 */
	const handleLogIn = () => {
		const loginHref = config.loginUrl
		window.open(loginHref)
	}

	const handleNoPassword = () => {
		setUserInfo({ nickName: 'Visiter' })
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
			<Button onClick={handleNoPassword} ghost>
				游客进入
			</Button>
		</div>
	)
}

export default NotLogin
