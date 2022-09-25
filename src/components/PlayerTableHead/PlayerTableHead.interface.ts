interface Data {
  name: string
  nick: string
  age: number
  country: string
  won: number
  drawn: number
  lost: number
}

export interface HeadCell {
  id: keyof Data
  alignedCenter: boolean
  small: boolean
}
