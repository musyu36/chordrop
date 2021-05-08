import * as React from 'react'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import { modalState } from '../atoms/ModalAtom'
import { Chord } from '../interfaces'
import styles from '../styles/component/ChordPanel.module.scss'

type Props = {
  chord: Chord
}

const ChordPanel = ({ chord }: Props) => {
  const [_, setModalValue]: [
    boolean,
    SetterOrUpdater<boolean>
  ] = useRecoilState(modalState)

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation()
    setModalValue(true)
  }

  return (
    <div className={`${styles.panel} shadow`}>
      <h3
        className={styles.root}
        onClick={openModal}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {chord.root.name}
      </h3>
      <h3
        className={styles.chordType}
        onClick={openModal}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {chord.chordType.name}
      </h3>
    </div>
  )
}

export default ChordPanel
