// Task Score: 100% | Correctness: 100% | Perfomance: 100%
function solution(A) {
    if (A.length === 1) {
        return A[0]
    }

    let response

    const occur = {}
    for (let i = 0; i < A.length; i++) {
        if (occur[A[i]]) {
            occur[A[i]] = occur[A[i]] + 1
            continue
        } 
        occur[A[i]] = 1
    }

    const arr = Object.entries(occur)
    for (let i = 0; i < arr.length; i++) {
        const [ key, value ] = arr[i]
        if (value % 2 != 0) {
            return Number(key)
        } 
    }

}

module.exports = solution