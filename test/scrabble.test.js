const scrabbleScore = require('../src/scrabbleScore')

describe('scrabbleScore', function() {

    test('a returns 1', function() {
        expect(scrabbleScore('a')).toEqual(1)
    })

    test('d returns 2', function() {
        expect(scrabbleScore('d')).toEqual(2)
    })

    test('b returns 3', function() {
        expect(scrabbleScore('b')).toEqual(3)
    })

    test('bbb returns 9', function() {
        expect(scrabbleScore('bbb')).toEqual(9)
    })

})