import { atom, useRecoilState } from 'recoil'

/** 记录用户数据（登录信息等） */
const USERINFO = atom<Record<string, any>>({
	key: 'userInfo',
	default: {}
})

export function useUserInfo() {
	return useRecoilState(USERINFO)
}
