export function toRna(nucleotides: string): string {
    const nucleotideToComplement: {[index: string]: string} = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U',
    }

    return nucleotides
        .split('')
        .map(n => {
            if (Object.keys(nucleotideToComplement).includes(n)) {
                return nucleotideToComplement[n]
            } else {
                throw Error("Invalid input DNA.")
            }
        })
        .reduce((l, r) => l + r)
}
