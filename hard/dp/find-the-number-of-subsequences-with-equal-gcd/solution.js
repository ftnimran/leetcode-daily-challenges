/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function (nums) {
  const MOD = 1000000007;
  const MAX = 200;

  const gcd = (a, b) => {
    while (b !== 0) {
      let t = a % b;
      a = b;
      b = t;
    }
    return a;
  };

  let dp = Array.from({ length: MAX + 1 }, () => Array(MAX + 1).fill(0));

  dp[0][0] = 1;

  for (const x of nums) {
    let ndp = dp.map((row) => row.slice());

    for (let g1 = 0; g1 <= MAX; g1++) {
      for (let g2 = 0; g2 <= MAX; g2++) {
        let cur = dp[g1][g2];
        if (cur === 0) continue;

        let ng1 = g1 === 0 ? x : gcd(g1, x);
        ndp[ng1][g2] = (ndp[ng1][g2] + cur) % MOD;

        let ng2 = g2 === 0 ? x : gcd(g2, x);
        ndp[g1][ng2] = (ndp[g1][ng2] + cur) % MOD;
      }
    }

    dp = ndp;
  }

  let ans = 0;
  for (let g = 1; g <= MAX; g++) {
    ans = (ans + dp[g][g]) % MOD;
  }

  return ans;
};
