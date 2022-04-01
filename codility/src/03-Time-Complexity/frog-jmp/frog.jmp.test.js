const solution = require('./frog-jmp')

describe('Frog Jmp Tests', () => {
    test('Correctness Tests', () => {
        expect(solution(10, 85, 30)).toBe(3)
        expect(solution(50, 199, 4)).toBe(38)
        expect(solution(1, 5, 2)).toBe(2)
        expect(solution(5, 105, 3)).toBe(34)
        expect(solution(2, 11, 3)).toBe(3)
        expect(solution(1, 1, 3)).toBe(0)
        expect(solution(1000000000, 1000000000, 1)).toBe(0)
        expect(solution(999999999, 1000000000, 1000000000)).toBe(1)
        expect.assertions(8)
    })

    test('Performance Tests', () => {
        expect(solution(5, 1000000000, 2)).toBe(499999998)
        expect(solution(99, 987654321, 1)).toBe(987654222)
        expect(solution(1283, 999925368, 2)).toBe(499962043)
        expect(solution(1, 1000000000, 1)).toBe(999999999)
        expect(solution(3, 999111321, 7)).toBe(142730189)
        expect.assertions(5)
    })
})

