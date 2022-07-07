import { Button, Input } from 'antd'
import { SoundOutlined } from '@ant-design/icons'
import { FC } from 'react'

const Manage: FC<any> = () => {
	return (
		<div className="wd-p-10px">
			<Button className="wd-my-10px">打开Options</Button>
			<p className="wd-mt-20px">
				<SoundOutlined className="wd-pr-10px" />
				向content发送消息：
			</p>
			<Input.Group compact>
				<Input
					style={{ width: 'calc(100% - 65px)' }}
					defaultValue="https://ant.design"
					placeholder="请输入内容"
				/>
				<Button type="primary">发送</Button>
			</Input.Group>
		</div>
	)
}

export default Manage
