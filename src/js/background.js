/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
chrome.runtime.onMessage.addListener(request => {
	if (request === 'showOptions') {
		console.log(request)
		chrome.runtime.openOptionsPage()
	}
})

// 监听cookies变化
// chrome.cookies.onChanged.addListener(changeInfo => {
// 	const { cause, cookie, removed } = changeInfo
// 	if (cause === 'explicit' || cause === 'overwrite') {
// 		console.log(cookie)
// 	}
// })

// 监听tab切换
chrome.tabs.onActivated.addListener(() => {
	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
		const tabUrl = tabs[0].url // 空白标签页的tab[0].url为空
		if (tabUrl) {
			const url = new URL(tabUrl)
			console.log('url----', url)
			// @ts-ignore
			// 获取页面的cookies
			chrome.cookies.getAll({ domain: url.host }, cookies => {
				console.log('cookies----', cookies)
			})
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
