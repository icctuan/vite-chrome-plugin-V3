import { Button, Input } from 'antd'
import { SoundOutlined } from '@ant-design/icons'
import { FC } from 'react'

const Manage: FC<any> = () => {
	// function sendMessageToContentScript(message, callback) {
	// 	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	// 		chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
	// 			if (callback) callback(response)
	// 		})
	// 	})
	// }
	const handleSendMessage = () => {
		// sendMessageToContentScript('你好，我是popup！', (response: any) => {
		// 	if (response) console.log('收到来自content-script的回复：' + response)
		// })
	}

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
				<Button type="primary" onClick={handleSendMessage}>
					发送
				</Button>
			</Input.Group>
		</div>
	)
}

export default Manage
