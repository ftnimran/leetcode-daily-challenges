/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  const arr = [];

  for (const row of grid) {
    for (const num of row) {
      arr.push(num);
    }
  }

  const mod = arr[0] % x;

  for (const num of arr) {
    if (num % x !== mod) return -1;
  }

  arr.sort((a, b) => a - b);

  const target = arr[Math.floor(arr.length / 2)];

  function dfs(i) {
    if (i === arr.length) return 0;
    return Math.abs(arr[i] - target) / x + dfs(i + 1);
  }

  return dfs(0);
};
