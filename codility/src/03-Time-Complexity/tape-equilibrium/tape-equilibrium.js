// Task Socore: 53% | Correctness: 100% | Perfomance: 0%
function solution (A) {
    const diffs = []
    const startForTime = process.hrtime()
    for (let i = 1; i < A.length; i++) {
        const first = [...A]
        const second = first.splice(i)
        let firstSum = first.reduce((p, c) => p + c, 0)
        let secondSum = second.reduce((p, c) => p + c, 0)
        const diff = firstSum - secondSum
        if (diff < 0) {
            diffs.push(Math.abs(diff))
        } else {
            diffs.push(diff)
        }
        if (diff === 0) return 0
    }
    const endForTime = process.hrtime(startForTime)
    const elapsedForTime = endForTime[0] + endForTime[1] / 1000000000

    const startSortTime = process.hrtime()
    diffs.sort((a, b) => a - b)
    const endSortTime = process.hrtime(startSortTime)
    const elapsedSortTime = endSortTime[0] + endSortTime[1] / 1000000000
    console.log('\n', '###############################', '\n', `## ...For: ${elapsedForTime} `, '\n', `## ..Sort: ${elapsedSortTime}`, '\n', '###############################')
    return diffs[0]
}

module.exports = solution