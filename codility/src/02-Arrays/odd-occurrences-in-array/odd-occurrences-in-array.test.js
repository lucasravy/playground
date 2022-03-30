const solution = require('./odd-occurrences-in-array')
const arr201 = [ 91, 69, 77, 91, 26, 64, 91, 88, 58, 17, 42, 100, 11, 32, 96, 45, 21, 32, 91, 34, 43, 63, 81, 50, 9, 58, 4, 10, 20, 70, 29, 70, 17, 12, 3, 71, 86, 22, 24, 2, 65, 31, 14, 65, 60, 45, 16, 64, 56, 44, 17, 93, 87, 69, 100, 59, 35, 12, 61, 52, 44, 100, 84, 12, 89, 1, 66, 32, 73, 96, 54, 77, 6, 67, 12, 46, 34, 8, 75, 10, 26, 9, 67, 31, 5, 3, 22, 51, 2, 3, 67, 53, 14, 32, 13, 28, 39, 22, 20, 23, 42, 91, 69, 77, 91, 26, 64, 91, 88, 58, 17, 42, 100, 11, 32, 96, 45, 21, 32, 91, 34, 43, 63, 81, 50, 9, 58, 4, 10, 20, 70, 29, 70, 17, 12, 3, 71, 86, 22, 24, 2, 65, 31, 14, 65, 60, 45, 16, 64, 56, 44, 17, 93, 87, 69, 100, 59, 35, 12, 61, 52, 44, 100, 84, 12, 89, 1, 66, 32, 73, 96, 54, 77, 6, 67, 12, 46, 34, 8, 75, 10, 26, 9, 67, 31, 5, 3, 22, 51, 2, 3, 67, 53, 14, 32, 13, 28, 39, 22, 20, 23 ]

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
        expect(solution([15, 20, 15, 20, 15, 20, 15, 20, 2])).toBe(2)
    })

    test('should return 17 as an odd occurrence for [15, 20, 15, 17, 20, 15, 20, 15, 20] ', async () => {
        expect(solution([15, 20, 15, 17, 20, 15, 20, 15, 20])).toBe(17)
    })

    test('should return 42 as an odd occurrence for 201 items array ', async () => {
        expect(solution(arr201)).toBe(42)
    })
})