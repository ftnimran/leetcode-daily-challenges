/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  const arr = [];

  for (const row of grid) {
    for (const x of row) {
      arr.push(x);
    }
  }

  const total = arr.length;
  k %= total;

  const rotated = arr.slice(total - k).concat(arr.slice(0, total - k));

  const ans = [];
  let idx = 0;

  for (let i = 0; i < m; i++) {
    ans.push([]);
    for (let j = 0; j < n; j++) {
      ans[i].push(rotated[idx++]);
    }
  }

  return ans;
};
