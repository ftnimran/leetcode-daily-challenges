/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
  const n = arr.length;
  const nextIdx = new Int32Array(n).fill(-1);

  let left = 0,
    sum = 0;
  for (let right = 0; right < n; right++) {
    sum += arr[right];
    while (sum > target) {
      sum -= arr[left++];
    }
    if (sum === target) {
      nextIdx[left] = right;
    }
  }

  const memo = new Int32Array(n * 3).fill(-1);

  const dfs = (i, k) => {
    if (k === 0) return 0;
    if (i >= n) return 1e9;

    let memoIdx = i * 3 + k;
    if (memo[memoIdx] !== -1) return memo[memoIdx];

    let skip = dfs(i + 1, k);
    let take = 1e9;

    if (nextIdx[i] !== -1) {
      take = nextIdx[i] - i + 1 + dfs(nextIdx[i] + 1, k - 1);
    }

    memo[memoIdx] = skip < take ? skip : take;
    return memo[memoIdx];
  };

  let ans = dfs(0, 2);
  return ans >= 1e9 ? -1 : ans;
};
