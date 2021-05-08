import Link from 'next/link'
import Layout from '../components/Layout'
import Chords from '../components/Chords'
import Modal from '../components/Modal'
import { Chord } from '../interfaces'
import { RecoilRoot } from 'recoil'

const chords: Chord[] = [
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
]

const IndexPage = () => (
  <RecoilRoot>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Chords chords={chords} />
      <Modal />
    </Layout>
  </RecoilRoot>
)

export default IndexPage
