/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
  const solve = (p) => {
    if (p > n) return 0;
    return n - p + 1 + solve(p * 1000);
  };

  return solve(1000);
};
