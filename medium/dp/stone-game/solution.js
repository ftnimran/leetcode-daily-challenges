/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  const n = piles.length;

  const memo = Array.from({ length: n }, () => Array(n).fill(undefined));

  const solve = (i, j) => {
    if (i === j) return piles[i];

    if (memo[i][j] !== undefined) return memo[i][j];

    const left = piles[i] - solve(i + 1, j);

    const right = piles[j] - solve(i, j - 1);

    return (memo[i][j] = Math.max(left, right));
  };

  return solve(0, n - 1) > 0;
};
