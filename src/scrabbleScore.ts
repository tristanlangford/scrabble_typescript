let finalScore: number

function scrabbleScore(word: string) {
    finalScore = 0
    for(let x = 0; x < word.length; x++) {
        getScore(word[x])
    }
    return finalScore
}

function getScore(letter: string) {
    for(let i = 0; i < scores.length; i++) {
        if (scores[i].letters.includes(letter.toUpperCase())) {
            finalScore += scores[i].score
        }
    }
}

const scores: { score: number, letters: string[] }[] = [
    { score: 1, letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'] },
    { score: 2, letters: ['D', 'G'] },
    { score: 3, letters: ['B', 'C', 'M', 'P']},
    { score: 4, letters: ['F', 'H', 'V', 'W', 'Y'] },
    { score: 5, letters: ['K'] },
    { score: 8, letters: ['J', 'X'] },
    { score: 10, letters: ['Q', 'Z'] }
]

module.exports = scrabbleScore