const solution = require('./max-counters')
const arr100000min1max11 = require('./fixtures/random_arr100000_1To11')
const arr100000min6max6 = require('./fixtures/random_arr100000_6To6')
const arr30000min1max30001 = require('./fixtures/random_arr30000_1To30001')
const arr100000min1max100001 = require('./fixtures/random_arr100000_1To100001')
const arr100000min1max30001 = require('./fixtures/random_arr100000_1To30001')
const arr100000min100001max100001 = require('./fixtures/random_arr100000_100001To100001')
const arr100000min1max1 = require('./fixtures/random_arr100000_1To1')
const response_arr30000min1max30001 = require('./fixtures/response_arr30000min1max30001')
const response_arr100000min1max100001 = require('./fixtures/response_arr100000min1max100001')
const response_arr100000min1max30001 = require('./fixtures/response_arr100000min1max30001')
const response_arr100000_100001To100001 = require('./fixtures/response_arr100000_100001To100001')
const response_arr100000min1max1 = require('./fixtures/response_arr100000min1max1')
const arr100000min1max9999 = require('./fixtures/random_arr100000_1To9999')
const response_arr100000min1max9999 = require('./fixtures/response_arr100000min1max9999')

describe('Max Counters Tests', () => {
    describe('Correctness Tests', () => {
        test('should return [3, 2, 2, 4, 2] for N 5 in [3, 4, 4, 6, 1, 4, 4]', () => {
            expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2] )
        })

        test('should return [1] for N 1 in [1]', () => {
            expect(solution(1, [1])).toEqual([1] )
        })
    })
    describe('Performance Tests', () => {
        test('should return for [10030, 10071,  9886, 9912, 10077,  9995, 10015,  9953, 10045, 10016] for 10 in 100.000 itens array', () => {
            expect(solution(10, arr100000min1max11)).toEqual([10030, 10071,  9886, 9912, 10077,  9995, 10015,  9953, 10045, 10016])
        })

        test('should return [6, 0, 0, 0, 0] for N 5 in 100.000 itens array', () => {
            expect(solution(5, arr100000min6max6)).toEqual([0, 0, 0, 0, 0])
        })

        test('should return value of response_arr30000min1max30001 for N 30000 in 30.000 itens array', () => {
            expect(solution(30000, arr30000min1max30001)).toEqual(response_arr30000min1max30001)
        })

        test('should return value of respone_arr100000min1max100001 for N 5 in 100.000 itens array', () => {
            expect(solution(100000, arr100000min1max100001)).toEqual(response_arr100000min1max100001)
        })

        test('should return value of response_arr100000min1max30001 for N 30.000 in a 100.000 itens array', () => {
            expect(solution(30000, arr100000min1max30001)).toEqual(response_arr100000min1max30001)
        })

        test('should return value of response_arr100000_100001To100001 for N 100.000 in a 100.000 itens array', () => {
            expect(solution(100000, arr100000min100001max100001)).toEqual(response_arr100000_100001To100001)
        })

        test('should return value of response_arr100000min1max1 for N 100.000 in a 100.000 itens array', () => {
            expect(solution(100000, arr100000min1max1)).toEqual(response_arr100000min1max1)
        })

        test('should return value of response_arr100000min1max9999 for N 30.000 in a 100.000 itens array', () => {
            expect(solution(30000, arr100000min1max9999)).toEqual(response_arr100000min1max9999)
        })
    })
})
