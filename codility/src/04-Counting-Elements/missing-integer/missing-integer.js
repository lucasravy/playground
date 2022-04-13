
// Task Score: 100% | Correctness: 100% | Perfomance: 100%
function solution(A) {
    A.sort((a, b) => a - b)
    if (A[A.length - 1] < 0) {
        return 1
    }
    let res = 1
    for (let i = 0; i < A.length; i++) {
        const current = A[i]
        const next = A[i + 1]
        if (current < 0 || current === next) {
            continue
        }

        if (res > 0 && res < current) {
            return res
        }

        if (current < res && res < next) {
            return res
        } 

        res++
        if (current < res && res < next) {
            return res
        } 
    }
    return A[A.length -1] + 1

}

module.exports = solution