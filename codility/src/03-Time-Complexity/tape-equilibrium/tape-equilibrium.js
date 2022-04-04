// Task Score: 100% | Correctness: 100% | Perfomance: 100%
function solution(A) {
    if (A.length === 2) {
        return (Math.abs(A[0] - A[1]))
    }
    const diffs = []
    const rdc = [...A]
    let left = 0
    let right = rdc.reduce((p, c) => (p + c), 0)
    for (let i = 0; i < A.length - 1; i++) {
        left += (A[i])
        right -= (A[i])
        const diff = (left - right)
        if (diff < 0) {
            diffs.push(Math.abs(diff))
        } else {
            diffs.push(diff)
        }
        if (diff === 0) return 0
    }
    diffs.sort((a, b) => a - b)
    return diffs[0]
}

module.exports = solution