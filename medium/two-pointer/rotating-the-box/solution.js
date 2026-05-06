/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
  const m = boxGrid.length;
  const n = boxGrid[0].length;

  function applyGravity(row, col, empty) {
    if (col < 0) return;

    if (boxGrid[row][col] === "*") {
      applyGravity(row, col - 1, col - 1);
    } else if (boxGrid[row][col] === "#") {
      [boxGrid[row][col], boxGrid[row][empty]] = [
        boxGrid[row][empty],
        boxGrid[row][col],
      ];
      applyGravity(row, col - 1, empty - 1);
    } else {
      applyGravity(row, col - 1, empty);
    }
  }

  for (let i = 0; i < m; i++) {
    applyGravity(i, n - 1, n - 1);
  }

  const res = Array.from({ length: n }, () => Array(m));

  function rotate(i, j) {
    if (i === m) return;
    if (j === n) return rotate(i + 1, 0);

    res[j][m - 1 - i] = boxGrid[i][j];
    rotate(i, j + 1);
  }

  rotate(0, 0);

  return res;
};
