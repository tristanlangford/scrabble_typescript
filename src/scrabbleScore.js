"use strict";
function scrabbleScore(word) {
    for (var i = 0; i < scores.length; i++) {
        if (scores[i].letters.includes(word.toUpperCase())) {
            return scores[i].score;
        }
    }
}
var scores = [
    { score: 1, letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'] },
    { score: 2, letters: ['D', 'G'] },
    { score: 3, letters: ['B', 'C', 'M', 'P'] },
    { score: 4, letters: ['F', 'H', 'V', 'W', 'Y'] },
    { score: 5, letters: ['K'] },
    { score: 8, letters: ['J', 'X'] },
    { score: 10, letters: ['Q', 'Z'] }
];
module.exports = scrabbleScore;
