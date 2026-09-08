/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
  const solve = (x, p) => {
    if (p > x) return 0;
    return x - p + 1 + solve(x, p * 1000);
  };

  return solve(n, 1000);
};
