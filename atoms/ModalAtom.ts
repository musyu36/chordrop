import { atom } from 'recoil'

export const modalState = atom<boolean>({
  key: 'modal',
  default: true,
})
