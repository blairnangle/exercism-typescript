export function decodedResistorValue(colours: string[]): string {
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

  const raw = Number(`${colours.slice(0, 2).map(c => colourToValue[c]).reduce((l, r) => l + r)}${'0'.repeat(Number(colourToValue[colours[2]]))}`)

  if (raw < 1000) {
    return `${raw} ohms`
  } else if (raw < 1000000) {
    return `${raw / 1000} kiloohms`
  } else if (raw < 1000000000) {
    return `${raw / 1000000} megaohms`
  } else return `${raw / 1000000000} gigaohms`
}
