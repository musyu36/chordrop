import React from 'react'
import { useRecoilValue } from 'recoil'
import { chordListState } from '../atoms/ChordListAtom'
import { Chord } from '../interfaces'
import Chords from './Chords'
import Layout from './Layout'
import Modal from './Modal'

const App = () => {
  const chords: Chord[] = useRecoilValue(chordListState)
  return (
    <Layout>
      <h1>Chordrop</h1>
      <Chords chords={chords} />
      <Modal />
    </Layout>
  )
}

export default App
