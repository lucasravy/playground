const solution = require('./frog-river-one')
const arr100000min1max100000 = require('./fixtures/random_arr100000_1To100000')

describe('Frog River One Tests', () => {
    describe('Correctness Tests', () => {
        test('should return 6 for earliest time in [1, 3, 1, 4, 2, 3, 5, 4] at position 5', () => {
            expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6)
        })

        test.only('should return -1 for earliest time in [2, 2, 2, 2, 2] at position 2', () => {
            expect(solution(2, [2, 2, 2, 2, 2])).toBe(-1)
        })

        test('should return 1 for earliest time in [1, 2] at position 2', () => {
            expect(solution(2, [1, 2])).toBe(1)
        })
    })
    // describe('Performance Tests', () => {
    //     test('should return 99129 for earliest time in 100.000 array at position 5', () => {
    //         expect(solution(5, arr100000min1max100000)).toBe(99129)
    //     })

    //     test('should return -1 for earliest time in 100.000 array at position 74.294', () => {
    //         expect(solution(74294, arr100000min1max100000)).toBe(-1)
    //     })
    // })
})