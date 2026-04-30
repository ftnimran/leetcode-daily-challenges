/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const NEG = -1e9;

  // prev[j][c] = max score reaching column j with cost c
  let prev = Array.from({ length: n }, () => new Int32Array(k + 1).fill(NEG));

  prev[0][0] = 0;

  for (let i = 0; i < m; i++) {
    let curr = Array.from({ length: n }, () => new Int32Array(k + 1).fill(NEG));

    for (let j = 0; j < n; j++) {
      let val = grid[i][j];
      let cost = val === 0 ? 0 : 1;
      let score = val;

      // start cell special case
      if (i === 0 && j === 0) {
        cost = 0;
        score = 0;
      }

      for (let used = 0; used + cost <= k; used++) {
        let best = NEG;

        // from top
        if (i > 0) {
          best = Math.max(best, prev[j][used]);
        }

        // from left
        if (j > 0) {
          best = Math.max(best, curr[j - 1][used]);
        }

        // start position
        if (i === 0 && j === 0 && used === 0) {
          best = 0;
        }

        if (best === NEG) continue;

        curr[j][used + cost] = Math.max(curr[j][used + cost], best + score);
      }
    }

    prev = curr;
  }

  let ans = NEG;
  for (let c = 0; c <= k; c++) {
    ans = Math.max(ans, prev[n - 1][c]);
  }

  return ans < 0 ? -1 : ans;
};
