import * as React from 'react'
import ChordPanel from './ChordPanel'
import { Chord } from '../interfaces'
import styles from '../styles/component/Chords.module.scss'

type Props = {
  chords: Chord[]
}

const List = ({ chords }: Props) => (
  <ul className={styles.chords}>
    {chords.map((chord, index) => (
      <li key={index} className={styles.chordItem}>
        <ChordPanel chord={chord} />
      </li>
    ))}
  </ul>
)

export default List
