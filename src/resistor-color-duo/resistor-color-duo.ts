export function decodedValue(colours: string[]): number {
  const colourToValue: {[index: string]: string} = {
    'black': '0',
    'brown': '1',
    'red': '2',
    'orange': '3',
    'yellow': '4',
    'green': '5',
    'blue': '6',
    'violet': '7',
    'grey': '8',
    'white': '9'
  }

  return Number(colours.slice(0, 2).map(c => colourToValue[c]).reduce((l, r) => l + r))
}
