import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import WindiCSS from 'vite-plugin-windicss'
import { proxy_url } from './src/config/proxy'

import { ConfigEnv, UserConfig, loadEnv } from 'vite'

import manifest from './manifest.json'

export default ({ command, mode }: ConfigEnv): UserConfig => {
	const root = process.cwd()
	const env = loadEnv(mode, root)
	const { VITE_NODE_ENV } = env
	const _proxy = proxy_url[VITE_NODE_ENV]

	const { resolve } = require('path')

	return {
		plugins: [react(), crx({ manifest }), WindiCSS()],
		server: {
			host: 'dev.a.newrank.cn',
			port: 3001,
			proxy: {
				'/xdnphb/common/account/get': {
					target: _proxy?.ade,
					changeOrigin: true
				},
				'/nr/user/login/loginOut': {
					target: _proxy?.ade,
					changeOrigin: true
				}
			},
			open: true
		},
		build: {
			rollupOptions: {
				input: {
					main: resolve(__dirname, 'index.html'),
					nested: resolve(__dirname, 'nested/index.html')
				}
			}
		}
	}
}
