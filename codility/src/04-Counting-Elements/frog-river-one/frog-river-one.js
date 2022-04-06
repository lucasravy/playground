function solution(X, A) {
    console.log('X', X)
    console.log('A', A)
    let way = {}
    for (let i = 1; i <= X; i++) {
        way[i] = i
    }
    console.log('way', way)
    for (let i = 0; i < A.length; i++) {
        console.log('Object.keys(way).length', Object.keys(way).length)
        if (Object.keys(way).length === 0) return i + 1
        console.log('way[i + 1]', way[i + 1])
        if (way[A[i]]) delete way[i + 1]
    }
    return -1
}

module.exports = solution


 