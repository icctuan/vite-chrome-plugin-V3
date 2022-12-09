# vite-chrome-plugin-V3

vite + React + TypeScript
尝试做的一个谷歌插件

功能介绍：

问题记录:

1. 调查是否因为部分网页屏蔽了插件通信导致部分网页 contentScript 通信不成功
2. 调查通信提示
   Unchecked runtime.lastError: The message port closed before a response was received.
   的问题，功能可以正常使用的。
3. 未登录时进行通信失败，提示 Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.
