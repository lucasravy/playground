
// Task Score: 60% | Correctness: 100% | Perfomance: 20%
function solution(A) {
    const length = A.length
    let pairs = 0
    for (let p = 0; p < length - 1; p++) {
        const reff = A[p]
        for (let q = p + 1; q < length; q++) {
            if (reff < A[q] && 0 <= p && p < q && q < length) {
                // console.log('p < q', p < q)
                // console.log('--------------', '\n', 
                //             '  A[p]:', A[p], '\n',
                //             '  A[q]:', A[q], '\n',
                //             '(p, q):', p, q, '\n',
                //             ' p < q:', p < q)
                pairs++
            }
        }
    }
    return pairs
}

module.exports = solution