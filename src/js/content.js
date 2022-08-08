/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
	let tempDiv = document.createElement('div')
	tempDiv.id = 'tempDiv'
	tempDiv.innerText = '我是一个晒黑的div'
	tempDiv.style.cssText =
		'font-size: 20px;padding: 20px;z-index: 10000;position: fixed;bottom: 0px;right: 0px;width: 400px;height: 200px;background-color: black;color: pink;'
	document.body.appendChild(tempDiv)
})

// 接收来自后台的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	let tempDiv = document.getElementById('tempDiv')
	if (tempDiv) tempDiv.innerText = request
	sendResponse('我收到你的消息了：' + JSON.stringify(request))
})
