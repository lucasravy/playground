const solution = require('./binary-gap')

describe('Binary Gap Tests', () => {
    test('should return 0 for the longest 0 binary gap', async () =>{
        expect(solution(0)).toBe(0)
    })

    test('should return 2 for the longest 9 binary gap', async () => {
        expect(solution(9)).toBe(2)
    })

    test('should return 4 for the longest 529 binary gap', async () => {
        expect(solution(529)).toBe(4)
    })

    test('should return 1 for the longest 20 binary gap', async () => {
        expect(solution(20)).toBe(1)
    })

    test('should return 0 for the longest 15 binary gap', async () => {
        expect(solution(15)).toBe(0)
    })        

    test('should return 0 for the longest 32 binary gap', async () => {
        expect(solution(32)).toBe(0)
    })     

    test('should return 5 for the longest 1041 binary gap', async () => {
        expect(solution(1041)).toBe(5)
    })       
})