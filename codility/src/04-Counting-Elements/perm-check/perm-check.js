
 // Task Score: 100% | Correctness: 100% | Perfomance: 100%
function solution(A) {
    let sum = Array.from(new Array(A.length + 1).keys()).reduce((p,c) => p + c)
    let check = A.reduce((p,c) => p + c)
    const lengthCheck = new Set(A).size
    if (sum === check && lengthCheck === A.length) return 1
    return 0
}

module.exports = solution