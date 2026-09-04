/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  const n = nums.length;
  const suffixMin = new Array(n);

  suffixMin[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
  }

  const solve = (i, maxVal) => {
    if (i === n) return -1;

    maxVal = Math.max(maxVal, nums[i]);

    if (maxVal - suffixMin[i] <= k) return i;

    return solve(i + 1, maxVal);
  };

  return solve(0, 0);
};
