import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import WindiCSS from 'vite-plugin-windicss'

import { ConfigEnv, UserConfig, loadEnv } from 'vite'

import manifest from './manifest.json'

export default ({ command, mode }: ConfigEnv): UserConfig => {
	return {
		// envPrefix: 'VITE_',
		plugins: [react(), crx({ manifest }), WindiCSS()],
		server: {
			host: 'dev.a.newrank.cn',
			port: 3001,
			// proxy: {
			// 	'/xdnphb/common/account/get': {
			// 		target: 'http://test.a.newrank.cn',
			// 		changeOrigin: true
			// 	}
			// },
			open: true
		}
	}
}
