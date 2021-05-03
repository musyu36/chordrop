import * as React from 'react'
import { Chord } from '../interfaces'
import styles from '../styles/component/ChordPanel.module.scss'

type Props = {
  chord: Chord
}

const ChordPanel = ({ chord }: Props) => (
  <div className={`${styles.panel} shadow`}>
    <h3>
      {chord.root.name}
      {chord.chordType.name}
    </h3>
  </div>
)

export default ChordPanel
