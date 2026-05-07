/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function (nums) {
  const n = nums.length;

  const suffixMin = Array(n);
  suffixMin[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
  }

  const ans = Array(n);

  function solve(start, end) {
    if (start > end) return;

    let maxLeft = nums[start];

    for (let i = start; i < end; i++) {
      maxLeft = Math.max(maxLeft, nums[i]);

      if (maxLeft <= suffixMin[i + 1]) {
        let compMax = -Infinity;

        for (let j = start; j <= i; j++) {
          compMax = Math.max(compMax, nums[j]);
        }

        for (let j = start; j <= i; j++) {
          ans[j] = compMax;
        }

        return solve(i + 1, end);
      }
    }

    let compMax = -Infinity;

    for (let i = start; i <= end; i++) {
      compMax = Math.max(compMax, nums[i]);
    }

    for (let i = start; i <= end; i++) {
      ans[i] = compMax;
    }
  }

  solve(0, n - 1);

  return ans;
};
