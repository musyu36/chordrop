import * as React from 'react'
import { Chord } from '../interfaces'

type Props = {
  chord: Chord
}

const ChordPanel = ({ chord }: Props) => (
  <div>
    <h3>
      {chord.root.name}
      {chord.chordType.name}
    </h3>
  </div>
)

export default ChordPanel
