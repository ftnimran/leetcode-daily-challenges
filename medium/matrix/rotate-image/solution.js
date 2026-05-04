/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  function solve(layer) {
    if (layer >= Math.floor(n / 2)) return;

    let first = layer;
    let last = n - 1 - layer;

    for (let i = 0; i < last - first; i++) {
      let top = matrix[first][first + i];

      matrix[first][first + i] = matrix[last - i][first];

      matrix[last - i][first] = matrix[last][last - i];

      matrix[last][last - i] = matrix[first + i][last];

      matrix[first + i][last] = top;
    }

    solve(layer + 1);
  }

  solve(0);
};
