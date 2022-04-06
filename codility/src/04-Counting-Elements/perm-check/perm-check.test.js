const solution = require('./perm-check')
const arr100000min1max100000 = require('./fixtures/random_arr100000_1To100000')

describe('Perm Check Tests', () => {
    describe('Correctness Tests', () => {
        test('should return 1 for [4, 1, 3, 2] - is a permutation', () => {
            expect(solution([4, 1, 3, 2])).toBe(1)
        })

        test('should return 0 for [4, 1, 3] - is not a permutation', () => {
            expect(solution([4, 1, 3])).toBe(0)
        })

    })
    describe('Performance Tests', () => {
        test('should return 0 a 100.000 array - not a permutation', () => {
            expect(solution(arr100000min1max100000)).toBe(0)
        })
    })
})