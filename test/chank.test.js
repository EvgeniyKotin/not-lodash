const assert = require('assert')
const chank = require('./../array/array').chank

describe('Array.chank', () => {
    it('Function must return an array of groups of elemets, length of size', () => {
        let input = [1, 2, 3, 4, 5, 6]
        let output = [[1, 2], [3, 4], [5, 6]]
        //use toString, becouse diffrent array with the same elements don't equel to each other
        assert.equal(chank(input, 2).toString(), output.toString())
    })

    it('If don\'t set a size of chank, function must return the same array', () => {
        let input = [1, 2, 3, 4, 5, 6]
        assert.equal(chank(input), input)
    })

    it('If array can\'t be split evenly, the last chank will be the remaning elements', () => {
        let input = [1, 2, 3, 4, 5, 6, 7]
        let output = [[1, 2, 3], [4, 5, 6], [7]]
        assert.equal(chank(input, 3).toString(), output.toString())
    })

    it('If the size is bigger then array size, function must return the same array', () => {
        let input = [1, 2, 3]
        assert.equal(chank(input, 5), input)
    })

    it('If the size isn\'t integer, function must return the same array', () => {
        let input = [1, 2, 3, 4, 5, 6]
        assert.equal(chank(input, 2.2), input)
    })

    it('if the first argument isn\'t instance of Array, function must return an empty array', () => {
        let input = "[1, 2, 3, 4, 5, 6]"
        assert.equal(chank(input).toString(), [].toString())
    })
})