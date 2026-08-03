/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
  const n = stoneValue.length;

  const dp = new Array(n).fill(undefined);

  function solve(i) {
    if (i >= n) return 0;

    if (dp[i] !== undefined) return dp[i];

    let take = 0;
    let best = -Infinity;

    for (let k = 0; k < 3 && i + k < n; k++) {
      take += stoneValue[i + k];

      best = Math.max(best, take - solve(i + k + 1));
    }

    return (dp[i] = best);
  }

  const diff = solve(0);

  if (diff > 0) return "Alice";

  if (diff < 0) return "Bob";

  return "Tie";
};
