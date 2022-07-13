/* global process */
import { getEev } from '../utils'

const env = getEev()

export const config = {
	development: {
		loginUrl: `http://test.main.newrank.cn/user/login?displayType=login&source=130&type=121&backUrl=http://test.a.newrank.cn/center/#/index/&scene=adinsight_login`,
		main: 'http://test.main.newrank.cn/',
		ade: 'http://test.a.newrank.cn/',
		edit: 'http://test.edit.newrank.cn/',
		plugins: 'http://test.plugins.newrank.cn/'
	},
	test: {
		loginUrl: `http://test.main.newrank.cn/user/login?displayType=login&source=130&type=121&backUrl=http://test.a.newrank.cn/center/#/index/&scene=adinsight_login`,
		main: 'http://test.main.newrank.cn/',
		ade: 'http://test.a.newrank.cn/',
		edit: 'http://test.edit.newrank.cn/',
		plugins: 'http://test.plugins.newrank.cn/'
	},
	production: {
		loginUrl: `https://newrank.cn/user/login?displayType=login&source=130&backUrl=https://a.newrank.cn/center/#/user&scene=adinsight_login`,
		main: 'https://newrank.cn/',
		ade: 'https://a.newrank.cn/',
		edit: 'https://edit.newrank.cn/',
		plugins: 'https://plugins.newrank.cn/'
	}
}[env]
