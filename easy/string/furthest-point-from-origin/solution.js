/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
  function solve(i, left, right, blank) {
    if (i === moves.length) {
      return Math.abs(left - right) + blank;
    }

    if (moves[i] === "L") left++;
    else if (moves[i] === "R") right++;
    else blank++;

    return solve(i + 1, left, right, blank);
  }

  return solve(0, 0, 0, 0);
};
