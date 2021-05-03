export type User = {
  id: number
  name: string
}

export type Note = {
  number: number
  name: string
}

export type ChordType = {
  array: number[]
  name: string
}

export type Chord = {
  root: Note
  chordType: ChordType
}
