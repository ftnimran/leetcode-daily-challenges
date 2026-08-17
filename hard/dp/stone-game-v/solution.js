/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stoneValue) {
  const n = stoneValue.length;

  const prefix = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + stoneValue[i];
  }

  const memo = Array.from({ length: n }, () => new Int32Array(n));

  const seen = Array.from({ length: n }, () => new Uint8Array(n));

  function dfs(l, r) {
    if (l >= r) return 0;

    if (seen[l][r]) {
      return memo[l][r];
    }

    seen[l][r] = 1;

    let ans = 0;
    let leftSum = 0;
    let rightSum = prefix[r + 1] - prefix[l];

    for (let k = l; k < r; k++) {
      leftSum += stoneValue[k];
      rightSum -= stoneValue[k];

      if (leftSum < rightSum) {
        if (ans >= leftSum * 2) {
          continue;
        }

        ans = Math.max(ans, leftSum + dfs(l, k));
      } else if (leftSum > rightSum) {
        if (ans >= rightSum * 2) {
          break;
        }

        ans = Math.max(ans, rightSum + dfs(k + 1, r));
      } else {
        ans = Math.max(ans, leftSum + dfs(l, k), rightSum + dfs(k + 1, r));
      }
    }

    memo[l][r] = ans;
    return ans;
  }

  return dfs(0, n - 1);
};
