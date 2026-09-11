/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
  const cnt = Array(10).fill(0);
  for (const d of digits) cnt[d]++;

  let ans = 0;

  const dfs = (pos) => {
    if (pos === 3) {
      ans++;
      return;
    }

    const start = pos === 0 ? 1 : 0;

    for (let d = start; d <= 9; d++) {
      if (!cnt[d] || (pos === 2 && d % 2)) continue;

      cnt[d]--;
      dfs(pos + 1);
      cnt[d]++;
    }
  };

  dfs(0);
  return ans;
};
