/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// import { isDevPage } from '../utils'

// 监听发送给background的事件
chrome.runtime.onMessage.addListener(request => {
	// 打开插件配置页面
	if (request === 'showOptions') {
		chrome.runtime.openOptionsPage()
	}
})

// 监听所有页面的cookies变化
chrome.cookies.onChanged.addListener(changeInfo => {
	const { cause, cookie, removed } = changeInfo
	// 新增explicit、更新overwrite
	if (cause === 'explicit' || cause === 'overwrite') {
		// console.log(cookie)
	}
})

// 监听tab切换
chrome.tabs.onActivated.addListener(() => {
	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
		const tabUrl = tabs[0].url

		// 非https页面，发送事件会报错
		// 空白标签页的tab[0].url为空
		// if (!tabUrl || !isDevPage(tabUrl)) return

		if (tabUrl) {
			const url = new URL(tabUrl)
			// 获取当前页面的cookies
			chrome.cookies.getAll({ domain: url.host }, cookies => {
				// console.log('cookies----', cookies)
			})

			// 测试页面提示
			if (url.hostname === 'test.e.newrank.cn') {
				chrome.tabs.sendMessage(
					tabs[0].id,
					{ type: 'isTest' },
					response => response && console.log(response)
				)
			}
		}
	})
})

// chrome.tabs.onHighlighted.addListener(() => {
// 	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
// 		const tabUrl = tabs[0].url
// 		if (!tabUrl) return // 打开空白标签页
// 		const url = new URL(tabUrl)
// 		console.log(url)
// 		// @ts-ignore
// 		chrome.cookies.getAll({ domain: url.host }, cookies => {
// 			console.log(cookies)
// 		})
// 	})
// })

/** 需要监听的登录页面 */
const loginUrls = [
	'https://www.xingtu.cn/?role=ad',
	'https://github.com/login',
	'https://www.douyin.com/',
	'https://pgy.xiaohongshu.com/',
	'https://sso.e.qq.com/login/hub?sso_redirect_uri=https%3A%2F%2Fe.qq.com%2Fdev%2Flogin&service_tag=14'
]

// 当前页面url变化时，对部分url下的页面的元素进行查找
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (!tab || !changeInfo) return
	const { url } = tab // 这里只能拿到完整的url，没有hostname等信息
	if (changeInfo.status === 'complete') {
		if (loginUrls.find(item => url === item)) {
			chrome.tabs.sendMessage(tab.id, { type: 'onUpdated' }, response => console.log(response))
		}
	}

	// 测试页面提示（待完善，url校验）
	if (url === 'test.e.newrank.cn') {
		chrome.tabs.sendMessage(tabs[0].id, { type: 'isTest' }, response => {
			// 收到通知的回复
			// console.log(response)
		})
	}
})
