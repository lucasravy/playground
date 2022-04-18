const solution = require('./passing-cars')
const arr100000min0max1 = require('./fixtures/random_arr100000_0To1')

describe('Passing Cars Tests', () => {
    describe('Correctness Tests', () => {
        test('should return 5 for [0, 1, 0, 1, 1]', () => {
            expect(solution([0, 1, 0, 1, 1])).toBe(5)
        })

        test('should return 0 for [0]', () => {
            expect(solution([0])).toBe(0)
        })

        test('should return 0 for [1]', () => {
            expect(solution([1])).toBe(0)
        })

        test('should return 0 for [0, 0, 0, 0]', () => {
            expect(solution([0, 0, 0, 0])).toBe(0)
        })

        test('should return 0 for [1, 1, 1, 1]', () => {
            expect(solution([1, 1, 1, 1])).toBe(0)
        })

        test('should return 6 for [0, 1, 0, 1, 0, 1]', () => {
            expect(solution([0, 1, 0, 1, 0, 1])).toBe(6)
        })

    })
    describe('Performance Tests', () => {
        test('should return 1250 for 100.000 numbers array', () => {
            expect(solution(arr100000min0max1)).toBe(1059)
        })
    })
})