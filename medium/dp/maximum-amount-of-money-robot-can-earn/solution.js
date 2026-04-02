/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function (coins) {
  let m = coins.length;
  let n = coins[0].length;

  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      dp[i][j] = new Array(3).fill(-Infinity);
    }
  }

  dp[0][0][0] = coins[0][0];

  if (coins[0][0] < 0) {
    dp[0][0][1] = 0;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;

      for (let k = 0; k < 3; k++) {
        if (i > 0) {
          let val = dp[i - 1][j][k];
          if (val !== -Infinity) {
            dp[i][j][k] = Math.max(dp[i][j][k], val + coins[i][j]);
          }

          if (coins[i][j] < 0 && k > 0) {
            let prev = dp[i - 1][j][k - 1];
            if (prev !== -Infinity) {
              dp[i][j][k] = Math.max(dp[i][j][k], prev);
            }
          }
        }

        if (j > 0) {
          let val = dp[i][j - 1][k];
          if (val !== -Infinity) {
            dp[i][j][k] = Math.max(dp[i][j][k], val + coins[i][j]);
          }

          if (coins[i][j] < 0 && k > 0) {
            let prev = dp[i][j - 1][k - 1];
            if (prev !== -Infinity) {
              dp[i][j][k] = Math.max(dp[i][j][k], prev);
            }
          }
        }
      }
    }
  }

  let ans = Math.max(
    dp[m - 1][n - 1][0],
    dp[m - 1][n - 1][1],
    dp[m - 1][n - 1][2],
  );

  return ans;
};
