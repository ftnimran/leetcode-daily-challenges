/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const memo = new Map();

  const solve = (i, j) => {
    if (j === t.length) return 1;
    if (i === s.length) return 0;

    const key = i * (t.length + 1) + j;
    if (memo.has(key)) return memo.get(key);

    let ans = solve(i + 1, j);

    if (s[i] === t[j]) {
      ans += solve(i + 1, j + 1);
    }

    memo.set(key, ans);
    return ans;
  };

  return solve(0, 0);
};
