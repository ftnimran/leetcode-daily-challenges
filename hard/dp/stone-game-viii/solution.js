/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function (stones) {
  const n = stones.length;
  const prefix = new Array(n);

  prefix[0] = stones[0];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + stones[i];
  }

  const memo = new Array(n);

  const solve = (i) => {
    if (i === n - 1) {
      return prefix[n - 1];
    }

    if (memo[i] !== undefined) {
      return memo[i];
    }

    return (memo[i] = Math.max(solve(i + 1), prefix[i] - solve(i + 1)));
  };

  return solve(1);
};
