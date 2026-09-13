/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  const n = img1.length;
  const a = [];
  const b = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (img1[i][j]) a.push([i, j]);
      if (img2[i][j]) b.push([i, j]);
    }
  }

  const map = new Map();
  let ans = 0;

  const dfs = (i) => {
    if (i === a.length) return;

    const [x1, y1] = a[i];

    for (let j = 0; j < b.length; j++) {
      const [x2, y2] = b[j];
      const key = `${x1 - x2},${y1 - y2}`;

      const count = (map.get(key) || 0) + 1;
      map.set(key, count);

      if (count > ans) ans = count;
    }

    dfs(i + 1);
  };

  dfs(0);

  return ans;
};
