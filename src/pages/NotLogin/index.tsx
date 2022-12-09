import { FC } from 'react'
import { Button, Space } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { config } from '../../config'
import styles from './index.module.less'
import { useUserInfo } from '../../context/user'

const NotLogin: FC<any> = () => {
	const [, dispatchUserInfo] = useUserInfo()

	/** 打开登录页面 */
	const handleLogIn = () => {
		const loginHref = config.loginUrl
		window.open(loginHref)
	}

	/** 游客进入，免密 */
	const handleNoPassword = () => {
		dispatchUserInfo({ nickName: 'Visiter' })
	}

	return (
		<div className={styles.notLoginWrapper}>
			<div className={styles.center}>
				<p>要使用小插件，请先登录哦</p>
				<Space size={8}>
					<Button onClick={handleLogIn} type="primary">
						<LoginOutlined className="wd-mr-4px" />
						登录
					</Button>
					<Button onClick={handleNoPassword}>游客进入</Button>
				</Space>
			</div>
		</div>
	)
}

export default NotLogin
