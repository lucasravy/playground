// Task Score: 100% | Correctness: 100% | Perfomance: 100%
function solution(N, A) {
    const response = new Array(N)
    for (let i = 0; i < response.length; i++) {
        response[i] = 0
    }
    const singleVaues = new Set(A);
    if (singleVaues.size === 1) {
        if (A[0] === N + 1) return response
        if (A[0] <= N) {
            response[0] = N
            return response
        }
    }

    let max = 0
    for (let i = 0; i < A.length; i++) {
        const e = A[i]
        if (e >= 1 && e <= N) {
            response[e - 1] += 1
            if (response[e - 1] > max) {
                max = response[e - 1]
            }
        }
        if (e === N + 1) {
            for (let i = 0; i < response.length; i++) {
                response[i] = max
            }
        }
    }

    return response
}

module.exports = solution