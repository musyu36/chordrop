import Link from 'next/link'
import Layout from '../components/Layout'
import ChordPanel from '../components/ChordPanel'
import { Chord } from '../interfaces'

const chord: Chord = {
  root: {
    number: 0,
    name: 'C',
  },
  chordType: {
    array: [4, 7],
    name: 'maj',
  },
}

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <ChordPanel chord={chord} />
  </Layout>
)

export default IndexPage
