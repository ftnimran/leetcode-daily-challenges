/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function (n, l, r) {
  const MOD = 1000000007;
  const m = r - l + 1;

  let up = new Array(m + 1).fill(0);
  let down = new Array(m + 1).fill(0);

  for (let v = 1; v <= m; v++) {
    up[v] = v - 1;
    down[v] = m - v;
  }

  for (let len = 3; len <= n; len++) {
    const prefixDown = new Array(m + 1).fill(0);
    const prefixUp = new Array(m + 1).fill(0);

    for (let i = 1; i <= m; i++) {
      prefixDown[i] = (prefixDown[i - 1] + down[i]) % MOD;
      prefixUp[i] = (prefixUp[i - 1] + up[i]) % MOD;
    }

    const totalUp = prefixUp[m];

    const newUp = new Array(m + 1).fill(0);
    const newDown = new Array(m + 1).fill(0);

    for (let v = 1; v <= m; v++) {
      newUp[v] = prefixDown[v - 1];
      newDown[v] = (totalUp - prefixUp[v] + MOD) % MOD;
    }

    up = newUp;
    down = newDown;
  }

  let ans = 0;

  for (let v = 1; v <= m; v++) {
    ans = (ans + up[v] + down[v]) % MOD;
  }

  return ans;
};
