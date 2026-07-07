/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
  const s = String(n);

  const dfs = (i, x, sum) => {
    if (i === s.length) return x * sum;

    const d = s.charCodeAt(i) - 48;

    if (d) return dfs(i + 1, x * 10 + d, sum + d);

    return dfs(i + 1, x, sum);
  };

  return dfs(0, 0, 0);
};
