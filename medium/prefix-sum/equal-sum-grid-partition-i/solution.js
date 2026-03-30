/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let totalSum = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      totalSum += grid[i][j];
    }
  }

  if (totalSum % 2 !== 0) return false;
  const target = totalSum / 2;

  let currentHorizontalSum = 0;
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n; j++) {
      currentHorizontalSum += grid[i][j];
    }
    if (currentHorizontalSum === target) return true;
    if (currentHorizontalSum > target) break;
  }

  let currentVerticalSum = 0;
  for (let j = 0; j < n - 1; j++) {
    for (let i = 0; i < m; i++) {
      currentVerticalSum += grid[i][j];
    }
    if (currentVerticalSum === target) return true;
    if (currentVerticalSum > target) break;
  }

  return false;
};
