/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  const freq = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    const value = nums[right];
    const count = (freq.get(value) || 0) + 1;
    freq.set(value, count);

    while (freq.get(value) > k) {
      const leftValue = nums[left++];
      freq.set(leftValue, freq.get(leftValue) - 1);
    }

    const len = right - left + 1;
    if (len > maxLen) maxLen = len;
  }

  return maxLen;
};
