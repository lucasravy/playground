const solution = require('./tape-equilibrium')
const arr10000min0max100 = require('./fixtures/random_arr10000_0To100')
const arr10000minNegative1000max50 = require('./fixtures/random_arr10000_-1000To50')
const arr100000minNegative1max1 = require('./fixtures/random_arr100000_-1To1')

describe('Tape Equilibrium Tests', () => {
    describe('Correctness Tests', () => {
        test('should return 1 for tape numbers [3, 1, 2, 4, 3]', () => {
            expect(solution([3, 1, 2, 4, 3])).toBe(1)
        })

        test('should return 1 for tape numbers [3, 1]', () => {
            expect(solution([3, 1])).toBe(2)
        })

        test('should return 207 for tape numbers [-1000, -500, 1000, 650, 2, 359]', () => {
            expect(solution([-1000, -500, 1000, 650, 2, 359])).toBe(207)
        })
        
        test('should return 207 for tape numbers [-1000, -500, 1000, 650, 2, 359]', () => {
            expect(solution([-1000, -500, 1000, 650, 2, 359])).toBe(207)
        })

        test('should return 2000 for tape numbers [-1000, 1000]', () => {
            expect(solution([-1000, 1000])).toBe(2000)
        })  

        test('should return 20 for tape numbers [-10, -20, -30, -40, 100]', () => {
            expect(solution([-10, -20, -30, -40, 100])).toBe(20)
        })  


        
    })
    describe('Performance Tests', () => {
        test('should return 1 for tape numbers of random array with 10.000 numbers from 0 to 100', () => {
            expect(solution(arr10000min0max100)).toBe(81)
        }) 
        test('should return 1 for tape numbers of random array with 10.000 numbers from -1000 to 50', () => {
            expect(solution(arr10000minNegative1000max50)).toBe(920)
        }) 

        test('should return 1 for tape numbers of random array with 100.000 numbers from -1 to 1', () => {
            expect(solution(arr100000minNegative1max1)).toBe(0)
        }) 
    })
})