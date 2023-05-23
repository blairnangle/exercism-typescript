export function hey(message: string): string {
    const trimmed = message.trim()
    if (isAllUpperLetters(trimmed) && isQuestion(trimmed)) return 'Calm down, I know what I\'m doing!'
    if (trimmed.slice(-1) === '?') return 'Sure.'
    if (isAllUpperLetters(trimmed)) return 'Whoa, chill out!'

    return trimmed.length > 0 ? 'Whatever.' : 'Fine. Be that way!'
}

function isAllUpperLetters(trimmed: string): boolean {
    const letters = trimmed.split('').filter(c => {
        return c.length === 1 && c.match(/[a-zA-Z]/i)
    }).toString()

    return letters.length > 0 && letters.toUpperCase() === letters
}

function isQuestion(trimmed: string): boolean {
    return trimmed.slice(-1) === '?'
}
