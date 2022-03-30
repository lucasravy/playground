/**
 * Frog Jump
 * @param {integer} X - Current Frog location 
 * @param {integer} Y - Desired position 
 * @param {integer} D - Fixed distance 
 * @returns {integer} - Minimal number of jumps from position X to or further Y
 */
function solution(X, Y, D) {

    if (X == Y) return 0
    const result = Number((( Y - X ) / D).toFixed(1))
    if (result == 0) return 1
    if (Number(result % 1) == 0) return result
    if (Number(result % 1) >= Number(0.5)) return Number(result.toFixed(0))
    if (Number(result.toFixed(0)) * D < Y) return Number(result.toFixed(0)) + 1
    return Number(result.toFixed(0))

}

module.exports = solution