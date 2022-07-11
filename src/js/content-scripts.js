// // 接收来自后台的消息
// // eslint-disable-next-line no-undef
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 	console.log(
// 		'收到来自 ' +
// 			(sender.tab ? 'content-script(' + sender.tab.url + ')' : 'popup或者background') +
// 			' 的消息：',
// 		request
// 	)

// 	if (request.cmd == 'update_font_size') {
// 		const ele = document.createElement('style')
// 		ele.innerHTML = `* {font-size: ${request.size}px !important;}`
// 		document.head.appendChild(ele)
// 	} else {
// 		tip(JSON.stringify(request))
// 		sendResponse('我收到你的消息了：' + JSON.stringify(request))
// 	}
// })

// // window.addEventListener(
// // 	'message',
// // 	function (e) {
// // 		console.log('收到消息：', e.data)
// // 		if (e.data && e.data.cmd == 'invoke') {
// // 			eval('(' + e.data.code + ')')
// // 		} else if (e.data && e.data.cmd == 'message') {
// // 			tip(e.data.data)
// // 		}
// // 	},
// // 	false
// // )

// let tipCount = 0
// // 简单的消息通知
// function tip(info) {
// 	info = info || ''
// 	const ele = document.createElement('div')
// 	ele.className = 'chrome-plugin-simple-tip slideInLeft'
// 	ele.style.top = tipCount * 70 + 20 + 'px'
// 	ele.innerHTML = `<div>${info}</div>`
// 	document.body.appendChild(ele)
// 	ele.classList.add('animated')
// 	tipCount++
// 	setTimeout(() => {
// 		ele.style.top = '-100px'
// 		setTimeout(() => {
// 			ele.remove()
// 			tipCount--
// 		}, 400)
// 	}, 3000)
// }
