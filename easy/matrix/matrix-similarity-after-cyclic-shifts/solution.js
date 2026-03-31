/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;

  const shift = k % n;

  if (shift === 0) return true;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] !== mat[i][(j + shift) % n]) {
        return false;
      }
    }
  }

  return true;
};
