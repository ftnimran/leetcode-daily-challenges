/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  const MOD = 1000000007;
  const n = s.length;
  const memo = new Int32Array(n + 1);
  memo.fill(-1);

  const next = Array.from({ length: n }, () => new Int16Array(26).fill(-1));
  const last = new Int32Array(26).fill(-1);

  for (let i = n - 1; i >= 0; i--) {
    last[s.charCodeAt(i) - 97] = i;
    next[i].set(last);
  }

  const dfs = (i) => {
    if (i === n) return 1;
    if (memo[i] !== -1) return memo[i];

    let res = 1;

    for (let c = 0; c < 26; c++) {
      const j = next[i][c];

      if (j !== -1) {
        res += dfs(j + 1);
        if (res >= MOD) res -= MOD;
      }
    }

    return (memo[i] = res);
  };

  return (dfs(0) - 1 + MOD) % MOD;
};
