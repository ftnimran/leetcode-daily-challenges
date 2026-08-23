/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
  const mid = num.length >> 1;

  const dfs = (l, r) => {
    if (l > r) {
      return [0, 0, 0, 0];
    }

    if (l === r) {
      const code = num.charCodeAt(l);

      if (code === 63) {
        if (l < mid) {
          return [0, 0, 1, 0];
        }

        return [0, 0, 0, 1];
      }

      const value = code - 48;

      if (l < mid) {
        return [value, 0, 0, 0];
      }

      return [0, value, 0, 0];
    }

    const m = (l + r) >> 1;

    const a = dfs(l, m);
    const b = dfs(m + 1, r);

    return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];
  };

  const [leftSum, rightSum, leftQ, rightQ] = dfs(0, num.length - 1);

  const totalQ = leftQ + rightQ;

  if (totalQ & 1) return true;

  return leftSum - rightSum + (9 * (leftQ - rightQ)) / 2 !== 0;
};
