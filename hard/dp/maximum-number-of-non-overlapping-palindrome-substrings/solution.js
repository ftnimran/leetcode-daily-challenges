/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function (s, k) {
  const n = s.length;
  const pal = new Uint8Array(n * n);
  const memo = new Int32Array(n + 1);
  memo.fill(-1);
  memo[n] = 0;

  for (let r = 0; r < n; r++) {
    for (let l = r; l >= 0; l--) {
      if (s[l] === s[r] && (r - l < 2 || pal[(l + 1) * n + r - 1])) {
        pal[l * n + r] = 1;
      }
    }
  }

  const dfs = (i) => {
    if (i >= n) return 0;
    if (memo[i] !== -1) return memo[i];

    let ans = dfs(i + 1);

    for (let r = i + k - 1; r < n; r++) {
      if (pal[i * n + r]) {
        ans = Math.max(ans, 1 + dfs(r + 1));
      }
    }

    return (memo[i] = ans);
  };

  return dfs(0);
};
