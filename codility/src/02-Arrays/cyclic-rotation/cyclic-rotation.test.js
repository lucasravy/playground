const solution = require('./cyclic-rotation')

describe('Cyclic Rotation Tests', () => {
    test('should return [1,2,3] for 0 rotations for [1,2,3] ', async () =>{
        expect(solution([1,2,3], 0)).toStrictEqual([1,2,3])
    })

    test('should return [6, 3, 8, 9, 7] for 1 rotations for [3, 8, 9, 7, 6]', async () =>{
        expect(solution([3, 8, 9, 7, 6], 1)).toStrictEqual([6, 3, 8, 9, 7])
    })

    test('should return [9, 7, 6, 3, 8] for 3 rotations for [3, 8, 9, 7, 6]', async () =>{
        expect(solution([3, 8, 9, 7, 6], 3)).toStrictEqual([9, 7, 6, 3, 8])
    })

    test('should return [0, 0, 0] for 3 rotations for [0, 0, 0]', async () =>{
        expect(solution([0, 0, 0], 3)).toStrictEqual([0, 0, 0])
    })

    test('should return [1, 2, 3, 4] for 4 rotations for [1, 2, 3, 4]', async () =>{
        expect(solution([1, 2, 3, 4], 4)).toStrictEqual([1, 2, 3, 4])
    })

})