import { FC } from 'react'
import { Avatar, Divider } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { useUserInfo } from '../../context/user'
import { reqLoginOut } from '../../api'
import { config } from '../../config'

import styles from './index.module.less'

const Set: FC<any> = () => {
	// 用户信息
	const [userInfo] = useUserInfo()

	const handleLogOut = async () => {
		const res = (await reqLoginOut()) as any
		const { data, success, message: msg } = res
		if (success && data?.code === '1') {
			window.open(config.loginUrl)
		}
	}

	return (
		<div className={styles.setWrapper}>
			<p>
				<Avatar size={50} src={userInfo?.headimgurl} className="wd-mr-10px" />
				{userInfo?.nr_name}
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
