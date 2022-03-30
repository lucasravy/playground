const solution = require('./odd-occurrences-in-array')
const { arr201 } = require('./fixtures')

describe('Odd Occurrences in Array Tests', () => {
    test('should return 7 as an odd occurrence for [9, 3, 9, 3, 9, 7, 9] ', async () => {
        expect(solution([9, 3, 9, 3, 9, 7, 9])).toBe(7)
    })

    test('should return 3 as an odd occurrence for [1, 2, 1, 2, 3, 1, 2, 1, 2] ', async () => {
        expect(solution([1, 2, 1, 2, 3, 1, 2, 1, 2])).toBe(3)
    })

    test('should return 42 as an odd occurrence for [42] ', async () => {
        expect(solution([42])).toBe(42)
    })

    test('should return 42 as an odd occurrence for [1, 2, 1, 2, 1, 2, 1, 2, 42] ', async () => {
        expect(solution([1, 2, 1, 2, 1, 2, 1, 2, 42])).toBe(42)
    })

    test('should return 42 as an odd occurrence for [42, 1, 2, 1, 2, 1, 2, 1, 2] ', async () => {
        expect(solution([42, 1, 2, 1, 2, 1, 2, 1, 2])).toBe(42)
    })

    test('should return 2 as an odd occurrence for [15, 20, 15, 20, 15, 20, 2] ', async () => {
        expect(solution([15, 20, 15, 20, 15, 20, 2])).toBe(2)
    })

    test('should return 17 as an odd occurrence for [15, 20, 15, 17, 20, 15, 20, 15, 20] ', async () => {
        expect(solution([15, 20, 15, 17, 20, 15, 20, 15, 20])).toBe(17)
    })

    test('should return 42 as an odd occurrence for 201 items array ', async () => {
        expect(solution(arr201)).toBe(42)
    })
})