/**
 * @param {number[]} piles
 * @return {number}
 */

var stoneGameII = function (piles) {
  const n = piles.length;

  const suffix = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + piles[i];
  }

  const memo = Array.from({ length: n }, () => new Array(n + 1).fill(-1));

  const solve = (i, M) => {
    if (i >= n) {
      return 0;
    }

    if (i + 2 * M >= n) {
      return suffix[i];
    }

    if (memo[i][M] !== -1) {
      return memo[i][M];
    }

    let best = 0;

    for (let X = 1; X <= 2 * M; X++) {
      const opponent = solve(i + X, Math.max(M, X));

      best = Math.max(best, suffix[i] - opponent);
    }

    return (memo[i][M] = best);
  };

  return solve(0, 1);
};
