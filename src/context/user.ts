import { atom, useRecoilState } from 'recoil'

const USERINFO = atom<Record<string, any>>({
	key: 'userInfo',
	default: {}
})

export function useUserInfo() {
	return useRecoilState(USERINFO)
}
