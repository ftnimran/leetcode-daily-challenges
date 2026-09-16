/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function (n, k) {
  const MOD = 1000000007n;
  const N = n + k - 1;
  const R = 2 * k;

  const memo = Array.from({ length: N + 1 }, () => Array(R + 1).fill(-1n));

  function choose(a, b) {
    if (b === 0 || b === a) return 1n;
    if (b < 0 || b > a) return 0n;

    if (memo[a][b] !== -1n) {
      return memo[a][b];
    }

    return (memo[a][b] = (choose(a - 1, b - 1) + choose(a - 1, b)) % MOD);
  }

  return Number(choose(N, R));
};
