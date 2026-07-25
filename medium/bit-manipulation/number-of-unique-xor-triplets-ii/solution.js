/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function (nums) {
  const MAX = 2048;

  let dp = Array.from({ length: 4 }, () => Array(MAX).fill(false));
  dp[0][0] = true;

  for (const x of nums) {
    const next = dp.map((row) => row.slice());

    for (let used = 0; used <= 3; used++) {
      for (let xor = 0; xor < MAX; xor++) {
        if (!dp[used][xor]) continue;

        if (used + 1 <= 3) next[used + 1][xor ^ x] = true;

        if (used + 2 <= 3) next[used + 2][xor] = true;

        if (used + 3 <= 3) next[used + 3][xor ^ x] = true;
      }
    }

    dp = next;
  }

  let ans = 0;
  for (let xor = 0; xor < MAX; xor++) {
    if (dp[3][xor]) ans++;
  }

  return ans;
};
