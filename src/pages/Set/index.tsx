import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Divider } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useUserInfo } from '../../context/user'
import { reqLoginOut } from '../../api'
import { config } from '../../config'

import styles from './index.module.less'

const Set: FC<any> = () => {
	// 用户信息
	const [userInfo, dispatchUserInfo] = useUserInfo()

	const { headImgUrl, nickName } = userInfo || {}

	const handleLogOut = async () => {
		const res: any = await reqLoginOut()
		const { data, success } = res
		if (success && data?.code === '1') {
			window.open(config.loginUrl)
		}
		dispatchUserInfo({})
	}

	return (
		<div className={styles.setWrapper}>
			<p>
				{headImgUrl ? (
					<Avatar size={50} src={headImgUrl} className="wd-mr-10px" />
				) : (
					<Avatar size={50} icon={<UserOutlined />} className="wd-mr-10px" />
				)}

				{nickName}
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
