import { useLocalStorage } from 'use-hooks'
import { useRecoilState } from 'recoil'
import { bgAtom } from '../atoms'

export const useBG = () => {
	const [localBG, setLocalBG] = useLocalStorage('bg', '')
	const [BG, setBG] = useRecoilState(bgAtom)
	const _setBG = (val) => {
		setLocalBG(val)
		setBG(val)
	}

	return [localBG ?? BG, _setBG]
}
