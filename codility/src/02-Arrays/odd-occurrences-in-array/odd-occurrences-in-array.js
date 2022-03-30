// 88%
function solution(A) {
    if (A.length === 1) {
        return A[0]
    }

    let response

    const occur = {}
    for (let i = 0; i < A.length; i++) {
        if (occur[A[i]]) {
            occur[A[i]] = occur[A[i]] + 1
        } else {
            occur[A[i]] = 1
        }
    }

    for (var [key, value] of Object.entries(occur)) {
        if (value % 2 != 0) {
            response = key
            break
        } 
    }

    return Number(response)
}

module.exports = solution
