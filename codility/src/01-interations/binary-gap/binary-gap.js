function solution(N) {
    const binNumber = Number(N).toString(2)
    let longestGapLenth = 0
    let gapLength = 0
    let openGap = false
    for (let i = 0; i < binNumber.length; i++){
        if (binNumber[i] == 1) {
            if (openGap) {
                if (gapLength > longestGapLenth) {
                    longestGapLenth = gapLength
                }
                gapLength = 0
            } else {
                openGap = !openGap
            }
        }
        if (openGap && binNumber[i] == 0) {
            gapLength += 1
        } 
    }
    return longestGapLenth
}

module.exports = solution; 