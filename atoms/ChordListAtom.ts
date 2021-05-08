import { atom } from 'recoil'
import { Chord } from '../interfaces'

export const chordListState = atom<Chord[]>({
  key: 'chordList',
  default: [
    {
      root: {
        number: 0,
        name: 'C',
      },
      chordType: {
        array: [4, 7],
        name: 'maj',
      },
    },
    {
      root: {
        number: 0,
        name: 'D',
      },
      chordType: {
        array: [4, 7],
        name: 'min',
      },
    },
    {
      root: {
        number: 0,
        name: 'E',
      },
      chordType: {
        array: [4, 7],
        name: 'min',
      },
    },
    {
      root: {
        number: 0,
        name: 'F',
      },
      chordType: {
        array: [4, 7],
        name: 'min',
      },
    },
  ],
})
