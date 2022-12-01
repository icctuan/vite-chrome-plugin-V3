/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
	// 给每一个页面都加div
	// let tempDiv = document.createElement('div')
	// tempDiv.id = 'tempDiv'
	// tempDiv.innerText = '我是一个晒黑的div'
	// tempDiv.style.cssText =
	// 	'font-size: 20px;padding: 20px;z-index: 10000;position: fixed;bottom: 0px;right: 0px;width: 400px;height: 200px;background-color: black;color: pink;'
	// document.body.appendChild(tempDiv)
})

// 接收来自后台的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	let tempDiv = document.getElementById('tempDiv')
	if (tempDiv) tempDiv.innerText = request
	sendResponse('我收到你的消息了：' + JSON.stringify(request))

	if (request.type === 'onUpdated') {
		findPasswordAndName(document.body.children)
		observeDOM()
		sendResponse('开始监听')
	}

	// 测试页面提示
	if (request.type === 'testPage') {
		let fiv = document.createElement('div')
		fiv.id = 'tempDiv'
		fiv.innerText = '我是测试'
		fiv.style.cssText =
			'font-size: 20px;padding: 20px;z-index: 10000;position: fixed;bottom: 0px;right: 0px;width: 400px;height: 200px;background-color: black;color: pink;'
		document.body.appendChild(fiv)
	}
})

/** 监听dom变化 */
const observeDOM = () => {
	const targetNode = document.body
	const observerOptions = {
		childList: true, // 观察目标子节点的变化，是否有添加或者删除
		attributes: true, // 观察属性变动
		subtree: true // 观察后代节点，默认为 false
	}
	const observer = new MutationObserver((mutationList, observer) => {
		for (let i = 1; i < mutationList.length; i++) {
			const mutation = mutationList[i]
			if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
				findPasswordAndName(mutationList[i].addedNodes)
			} else if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
				findPasswordAndName(mutationList[i].addedNodes)
			}
		}
	})
	observer.observe(targetNode, observerOptions)
}

/** 递归进行password元素查找 */
const findPasswordAndName = addedNodes => {
	for (const i of addedNodes) {
		if (i.nodeName === 'INPUT' && i.type === 'password') {
			// console.log('找到了', i)
			i.placeholder = '1234'
			i.value = '123456'
			const clickEvent = new Event('input')
			i.dispatchEvent(clickEvent)
			return
		} else if (i.children) {
			findPasswordAndName(i.children)
			// console.log('继续找')
		}
	}
}
