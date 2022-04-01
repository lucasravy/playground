const solution = require('./perm-missing-elem')

describe('Permanent Missing Element Tests', () => {
    describe('Correctness Tests', () => {
        test('should return 4 for missing element in [2, 3, 1, 5]', () => {
            expect(solution([2,3,1,5])).toBe(4)
        })

        test('should return 1 for an empty request', () => {
            expect(solution([])).toBe(1)
        })

        test('should return 1 for de missing element in [1]', () => {
            expect(solution([1])).toBe(2)
        })

        test('should return 6 for de missing element in [1, 2, 3, 4, 5]', () => {
            expect(solution([1, 2, 3, 4, 5])).toBe(6)
        })

        test('should return 1 for de missing element in [2, 3, 4, 5, 6]', () => {
            expect(solution([2, 3, 4, 5, 6])).toBe(1)
        })

        test('should return 1 for de missing element in [2]', () => {
            expect(solution([2])).toBe(1)
        })

        test('should return 1 for de missing element in [3, 2]', () => {
            expect(solution([3, 2])).toBe(1)
        })
    })
})