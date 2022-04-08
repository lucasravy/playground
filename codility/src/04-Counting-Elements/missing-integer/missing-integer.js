function solution(A) {
    if (A.reduce((p, c) => p + c) < 0) {
        return 1
    }
    A.sort()
    console.log('A', A)
    let cur = A[0] > 0 ? A[0] : 1
    for (let i = 0; i < A.length - 1; i++) {
        console.log("==== Iteração", i + 1, "Atual:", A[i], "Próximo:", A[i + 1], "cur:", cur)
        if (A[i] === A[i + 1]) {
            continue
        }
        cur++
        if (A[i] < cur && cur < A[i + 1]) {
            return cur
        } 
    }
    return A[A.length -1] + 1

}

module.exports = solution