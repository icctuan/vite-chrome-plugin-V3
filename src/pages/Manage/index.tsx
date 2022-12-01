/* eslint-disable no-undef */
import { Button, Input } from 'antd'
import { SoundOutlined } from '@ant-design/icons'
import { FC, useState } from 'react'

const Manage: FC<any> = () => {
	const [info, setInfo] = useState<string>("hello, I'm popUp！")

	/** 获取当前选项卡ID */
	function getCurrentTabId(callback: any) {
		// @ts-ignore
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
			if (callback) callback(tabs.length ? tabs[0].id : null)
		})
	}

	function getCookies(callback: any) {
		// @ts-ignore
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
			const url = new URL(tabs[0].url)
			// @ts-ignore
			chrome.cookies.getAll({ domain: url.host }, (cookies: any) => {
				if (callback) callback(cookies.map((c: any) => c.name + '=' + c.value).join(';'))
			})
		})
	}

	/** 向content-script主动发送消息 */
	function sendMessageToContentScript(message: any, callback: any) {
		getCurrentTabId((tabId: any) => {
			// @ts-ignore
			chrome.tabs.sendMessage(tabId, message, (response: any) => {
				if (callback) callback(response)
			})
		})
	}

	/** 点击向content发送消息 */
	const handleSendMessage = () => {
		getCookies((cookies: any) => {
			sendMessageToContentScript(cookies, (response: string) => {
				if (response) console.log('收到来自content-script的回复：' + response)
			})
		})

		// sendMessageToContentScript(info, (response: string) => {
		// 	if (response) console.log('收到来自content-script的回复：' + response)
		// })
	}

	/** 向background发送消息，打开options */
	const handleOptionOpenClick = () => {
		// @ts-ignore
		chrome.runtime.sendMessage('showOptions')
	}

	return (
		<div className="wd-p-10px">
			<Button className="wd-my-10px" onClick={handleOptionOpenClick}>
				打开Options
			</Button>
			<p className="wd-mt-20px">
				<SoundOutlined className="wd-pr-10px" />
				向content发送消息：
			</p>
			<Input.Group compact>
				<Input
					style={{ width: 'calc(100% - 65px)' }}
					value={info}
					onChange={e => setInfo(e.target.value)}
					placeholder="请输入内容"
				/>
				<Button id="send" type="primary" onClick={handleSendMessage}>
					发送
				</Button>
			</Input.Group>
		</div>
	)
}

export default Manage
