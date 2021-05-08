import React from 'react'
import { Dispatch, SetStateAction, useState } from 'react'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import { modalState } from '../atoms/ModalAtom'
import { Chord, Note, ChordType } from '../interfaces'
import styles from '../styles/component/Modal.module.scss'

type Props = {
  chord: Chord
}

type RootRadio = {
  note: Note
  checked: boolean
}

type ChordTypeRadio = {
  chordType: ChordType
  checked: boolean
}

const initialRootRadioButtons: RootRadio[] = [
  {
    note: { number: 0, name: 'C' },
    checked: true,
  },
  {
    note: { number: 1, name: 'C♯' },
    checked: false,
  },
  {
    note: { number: 2, name: 'D' },
    checked: false,
  },
  {
    note: { number: 3, name: 'D♯' },
    checked: false,
  },
  {
    note: { number: 4, name: 'E' },
    checked: false,
  },
  {
    note: { number: 5, name: 'F' },
    checked: false,
  },
  {
    note: { number: 6, name: 'F♯' },
    checked: false,
  },
  {
    note: { number: 7, name: 'G' },
    checked: false,
  },
  {
    note: { number: 8, name: 'G♯' },
    checked: false,
  },
  {
    note: { number: 9, name: 'A' },
    checked: false,
  },
  {
    note: { number: 10, name: 'A♯' },
    checked: false,
  },
  {
    note: { number: 11, name: 'B' },
    checked: false,
  },
]

const initialChordTypeRadioButtons: ChordTypeRadio[] = [
  {
    chordType: {
      array: [4, 7],
      name: 'maj',
    },
    checked: true,
  },
  {
    chordType: {
      array: [3, 7],
      name: 'min',
    },
    checked: false,
  },
]

const Modal: React.FC = () => {
  const [modalValue, setModalValue]: [
    boolean,
    SetterOrUpdater<boolean>
  ] = useRecoilState(modalState)

  const [rootRadioButtonsState, setRootRadioButtonsState]: [
    RootRadio[],
    Dispatch<SetStateAction<RootRadio[]>>
  ] = useState(initialRootRadioButtons)

  const [chordTypeRadioButtonsState, setChordTypeRadioButtonsState]: [
    ChordTypeRadio[],
    Dispatch<SetStateAction<ChordTypeRadio[]>>
  ] = useState(initialChordTypeRadioButtons)

  const handleRootRadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedName: string = e.target.value
    const newState: RootRadio[] = rootRadioButtonsState.map(
      (rootRadioButton: RootRadio) => {
        return rootRadioButton.note.name === selectedName
          ? { ...rootRadioButton, checked: true }
          : { ...rootRadioButton, checked: false }
      }
    )
    setRootRadioButtonsState(newState)
  }

  const handleChordTypeRadioClick = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedName: string = e.target.value
    const newState: ChordTypeRadio[] = chordTypeRadioButtonsState.map(
      (chordTypeButton: ChordTypeRadio) => {
        return chordTypeButton.chordType.name === selectedName
          ? { ...chordTypeButton, checked: true }
          : { ...chordTypeButton, checked: false }
      }
    )
    setChordTypeRadioButtonsState(newState)
  }

  const closeModal = () => {
    setModalValue(false)
  }

  if (modalValue)
    return (
      <div className={`${styles.overlay}`} onClick={closeModal}>
        <div
          className={`${styles.content}`}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <div>
            <h3>Root</h3>
            <form action="">
              {rootRadioButtonsState.map((rootRadioButton, index) => {
                return (
                  <label key={index} style={{ marginRight: '8px' }}>
                    <span className="radio-set">
                      <input
                        type="radio"
                        name={rootRadioButton.note.name}
                        value={rootRadioButton.note.name}
                        checked={rootRadioButton.checked}
                        onChange={handleRootRadioClick}
                      />
                      {rootRadioButton.note.name}
                    </span>
                  </label>
                )
              })}
            </form>
          </div>
          <div>
            <h3>Chord Type</h3>
            <form action="">
              {chordTypeRadioButtonsState.map((chordTypeRadioButton, index) => {
                return (
                  <label key={index} style={{ marginRight: '8px' }}>
                    <span className="radio-set">
                      <input
                        type="radio"
                        name={chordTypeRadioButton.chordType.name}
                        value={chordTypeRadioButton.chordType.name}
                        checked={chordTypeRadioButton.checked}
                        onChange={handleChordTypeRadioClick}
                      />
                      {chordTypeRadioButton.chordType.name}
                    </span>
                  </label>
                )
              })}
            </form>
          </div>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    )
  else {
    return <></>
  }
}

export default Modal
