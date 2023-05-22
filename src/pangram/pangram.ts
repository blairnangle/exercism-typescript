export function isPangram(sentence: string): boolean {
    const lettersOfTheAlphabet: Set<string> = new Set<string>
    (
        [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z'
        ]
    )

    return loopPangram(sentence, lettersOfTheAlphabet)
}

function loopPangram(sentence: string, remainingAlphabet: Set<string>): boolean {
    if (sentence.length == 0) {
        return remainingAlphabet.size == 0
    } else {
        const nextLetter = sentence[0].toLowerCase()
        if (remainingAlphabet.has(nextLetter)) {
            remainingAlphabet.delete(nextLetter)
        }
        return loopPangram(sentence.slice(1, sentence.length), remainingAlphabet)
    }
}
