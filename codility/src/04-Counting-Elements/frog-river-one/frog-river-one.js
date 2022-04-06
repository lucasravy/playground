 // Task Score: 100% | Correctness: 100% | Perfomance: 100%
 function solution(X, A) {
    let sum = Array.from(new Array(X + 1).keys()).reduce((p,c) => p + c)
    const way = {}
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= X && !way[A[i]]) {
            sum -= A[i]
            way[A[i]] = 1
        }
        if (sum === 0) return i
    }
    return -1
}


module.exports = solution


 