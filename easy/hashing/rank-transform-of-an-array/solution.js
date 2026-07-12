/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const n = arr.length;
  if (n === 0) return [];

  const nums = arr.map((val, idx) => [val, idx]);

  nums.sort((a, b) => a[0] - b[0]);

  const ans = new Array(n);

  let rank = 1;
  ans[nums[0][1]] = rank;

  for (let i = 1; i < n; i++) {
    if (nums[i][0] !== nums[i - 1][0]) {
      rank++;
    }
    ans[nums[i][1]] = rank;
  }

  return ans;
};
