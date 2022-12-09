/* eslint-disable no-undef */
import { Button, Divider, Input } from 'antd'
import { SoundOutlined } from '@ant-design/icons'
import { FC, useState } from 'react'
import styles from './index.module.less'

const Manage: FC<any> = () => {
	const [info, setInfo] = useState("Hello, I'm PopUp！")
	const [showCookies, setShowCookies] = useState([])
	const [receiveMsg, setReceiveMsg] = useState('')

	/** 获取当前窗口：currentWindow 激活：active的选项卡ID，用于通信 */
	const getCurrentTabId = (callback: (e?: string) => void) => {
		// @ts-ignore
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any[]) => {
			if (callback) callback(tabs.length ? tabs[0].id : void 0)
		})
	}

	/** 向content-script主动发送消息
	 * @params message 传送的内容，多个信息可以用数组/对象，传过去是什么，接收函数就拿到什么
	 * @params callback 内容被成功接收后的回调函数，参数为接收方传递的信息
	 */
	const sendMessageToContentScript = (message: any, callback: (e: any) => void) => {
		getCurrentTabId((tabId?: string) => {
			if (tabId) {
				// @ts-ignore
				chrome.tabs.sendMessage(tabId, message, (response: any) => {
					if (callback) callback(response)
				})
			}
		})
	}

	/** 点击向content发送消息 */
	const handleSendMessage = () => {
		sendMessageToContentScript({ msg: info, type: 'msg' }, (response: string) => {
			response && setReceiveMsg(response)
		})
	}

	/** 获取cookie */
	function getCookies(callback: any) {
		// @ts-ignore
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
			const url = new URL(tabs[0].url)
			// @ts-ignore
			chrome.cookies.getAll({ domain: url.host }, (cookies: any) => {
				if (callback) callback(cookies?.map((c: any) => c.name + '=' + c.value).join(';'))
			})
		})
	}

	/** 获取当前页面的cookies */
	const getThisTabCookies = () => {
		getCookies((cookies: any) => {
			const total = cookies?.split(';')
			total && setShowCookies(total)
			// 通知content
			sendMessageToContentScript({ msg: cookies, type: 'cookies' }, (response: string) => {
				if (response) {
					console.log('收到来自content-script的回复：' + response)
				}
			})
		})
	}

	/** 向background发送消息，打开options */
	const handleOptionOpenClick = () => {
		// @ts-ignore
		chrome.runtime.sendMessage('showOptions')
	}

	return (
		<div className={styles.wrapper}>
			<Button className="wd-my-10px" onClick={handleOptionOpenClick}>
				打开Options
			</Button>
			<p className="wd-mt-20px">
				<SoundOutlined className="wd-pr-10px" />
				向content发送消息：
			</p>
			<Input.Group compact>
				<Input
					className={styles.input}
					value={info}
					onChange={e => setInfo(e.target.value)}
					placeholder="请输入内容"
				/>
				<Button id="send" type="primary" onClick={handleSendMessage}>
					发送
				</Button>
			</Input.Group>
			{receiveMsg ? (
				<div className={styles.receiveBox}>
					<p className="wd-text-[#0088ff]">Received.</p>
					<p>{receiveMsg}</p>
				</div>
			) : null}

			<Divider dashed className="wd-text-[#707eff]" />

			<Button className="wd-my-10px" onClick={getThisTabCookies}>
				获取cookies
			</Button>
			{showCookies.length ? (
				<div className={styles.cookiesWrap}>
					{showCookies.map(item => (
						<p>{item}</p>
					))}
				</div>
			) : null}
		</div>
	)
}

export default Manage
