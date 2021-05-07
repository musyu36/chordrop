import * as React from 'react'
import ChordPanel from './ChordPanel'
import { Chord } from '../interfaces'

import { useDnDSort } from '../hooks/useDndSort'
import styles from '../styles/component/Chords.module.scss'

type Props = {
  chords: Chord[]
}

const List = ({ chords }: Props) => {
  // ソート結果とイベントを含んだ配列を受け取る
  const results = useDnDSort(chords)

  return (
    <ul className={styles.chords}>
      {results.map((item) => (
        <li key={item.key} className={styles.chordItem} {...item.events}>
          <ChordPanel chord={item.value} />
        </li>
      ))}
    </ul>
  )
}

export default List
