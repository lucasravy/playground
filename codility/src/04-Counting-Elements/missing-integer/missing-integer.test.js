const solution = require('./missing-integer')
const arr200 = [ 116, 125, 198, 83, 0, 91, 52, 189, 54, 34, 92, 115, 1, 25, 165, 36, 141, 24, 124, 173, 80, 73, 95, 159, 4, 61, 3, 156, 28, 121, 148, 31, 76, 119, 122, 15, 72, 49, 26, 171, 81, 57, 10, 35, 117, 55, 40, 11, 161, 192, 130, 188, 12, 152, 43, 135, 62, 162, 111, 102, 140, 13, 59, 178, 160, 158, 32, 176, 17, 200, 145, 170, 150, 167, 71, 41, 181, 114, 154, 7, 42, 86, 82, 77, 68, 63, 106, 110, 120, 127, 69, 191, 21, 14, 90, 139, 46, 5, 79, 23, 197, 185, 53, 155, 112, 9, 194, 22, 51, 157, 2, 8, 142, 179, 174, 58, 199, 37, 143, 98, 65, 153, 182, 85, 105, 164, 94, 93, 131, 87, 109, 38, 187, 30, 19, 184, 113, 50, 186, 104, 132, 196, 75, 163, 78, 99, 169, 84, 48, 128, 175, 183, 100, 56, 96, 44, 107, 64, 103, 137, 151, 74, 39, 33, 29, 6, 190, 180, 118, 149, 195, 177, 168, 129, 126, 97, 144, 134, 108, 133, 16, 136, 70, 146, 47, 67, 89, 45, 138, 27, 60, 123, 166, 18, 172, 147, 88, 20, 193, 66 ]

describe('Missing Integer Testes', () => {
    describe('Correctness Testes', () => {
        test('should return 5 for array [1, 3, 6, 4, 1, 2]', () => {
            expect(solution([1, 3, 6, 4, 1, 2])).toBe(5)
        })

        test('should return 4 for array [1, 2, 3]', () => {
            expect(solution([1, 2, 3])).toBe(4)
        })

        test('should return 1 for array [-1, -3]', () => {
            expect(solution([-1, -3])).toBe(1)
        })

        test('should return 2 for array [-1, 1, 3]', () => {
            expect(solution([-1, 1, 3])).toBe(2)
        })

        test('should return 1 for array [2, 3, 4]', () => {
            expect(solution([2, 3, 4])).toBe(1)
        })

        test('should return 1 for array [2]', () => {
            expect(solution([2])).toBe(1)
        })

        test('should return 1 for array [-100000, 100000]', () => {
            expect(solution([-100000, 100000])).toBe(1)
        })

        test('should return 6 for array [ 1, 2, 3, 1, 1, 2, 4, 5, -1000000, 1000000 ]', () => {
            expect(solution([1, 2, 3, 1, 1, 2, 4, 5, -1000000, 1000000])).toBe(6)
        })

        test('should return 2 for array [ -100000, 1]', () => {
            expect(solution([-100000, 1])).toBe(2)
        })

        test('should return 101 for 200 numbers array ', () => {
            expect(solution(arr200)).toBe(101)
        })
    })
})