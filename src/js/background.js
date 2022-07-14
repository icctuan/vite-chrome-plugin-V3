/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
chrome.runtime.onMessage.addListener(request => {
	if (request === 'showOptions') {
		console.log(request)
		chrome.runtime.openOptionsPage()
	}
})
