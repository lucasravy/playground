// Task Score: 100% | Correctness: 100% | Perfomance: 100%
function solution (A) {
    // empty-array
    if (A.length === 0) return 1
    arr = A.sort((a, b) => a - b)
    // valued-array
    for (let i = 0; i < arr.length -1 ; i++) {
        const a = arr[i]
        const b = arr[i + 1]
        if (b - a != 1 ) {
            return a + 1
        }
    }
    // missing-first
    if (A[0] === 2) return 1
    // missing-last
    return A[A.length - 1] + 1
}

module.exports = solution