const solution = require('./missing-integer')

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
    })
})