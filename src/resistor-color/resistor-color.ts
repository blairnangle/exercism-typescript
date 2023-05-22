const colourToValue: {[index: string]: number} = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
}

export const colorCode = (colour: string): number => {
  return colourToValue[colour]
}

export const COLORS: string[] = Object.keys(colourToValue)
