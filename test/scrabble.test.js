const scrabbleScore = require('../src/scrabbleScore')

describe('scrabbleScore', function() {

    test('a returns 1', function() {
        expect(scrabbleScore('a')).toEqual(1)
    })

    test('d returns 2', function() {
        expect(scrabbleScore('d')).toEqual(2)
    })

})