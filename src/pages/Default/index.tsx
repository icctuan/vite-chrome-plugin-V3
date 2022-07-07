import { Button } from 'antd'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

const Header: FC<any> = () => {
	return (
		<div>
			<p>要使用小插件，请先登录哦</p>
			<Button>登录</Button>
		</div>
	)
}

export default Header
