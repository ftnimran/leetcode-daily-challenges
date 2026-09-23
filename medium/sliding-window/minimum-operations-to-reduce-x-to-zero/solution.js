/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let totalSum = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
  }

  const target = totalSum - x;

  if (target < 0) return -1;
  if (target === 0) return n;

  const map = new Map();
  map.set(0, -1);

  let currentSum = 0;
  let maxLen = -1;

  for (let i = 0; i < n; i++) {
    currentSum += nums[i];

    if (map.has(currentSum - target)) {
      const len = i - map.get(currentSum - target);
      if (len > maxLen) {
        maxLen = len;
      }
    }

    if (!map.has(currentSum)) {
      map.set(currentSum, i);
    }
  }

  return maxLen !== -1 ? n - maxLen : -1;
};
