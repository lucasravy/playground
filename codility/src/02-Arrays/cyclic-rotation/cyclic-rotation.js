// Task Score: 100% | Correctness: 100% | Perfomance: 100%
function solution(A, K) {
    const rotated = A
    for (let i = 0; i < K; i++) {
        rotated.unshift(rotated[rotated.length -1])
        rotated.pop()
    }
    return rotated
}

module.exports = solution; 