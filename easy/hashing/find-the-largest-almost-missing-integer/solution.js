/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var largestInteger = function (nums, k) {
  const count = new Int8Array(51);
  const n = nums.length;

  for (let i = 0; i <= n - k; i++) {
    const seen = new Set();

    for (let j = i; j < i + k; j++) {
      seen.add(nums[j]);
    }

    for (const x of seen) {
      count[x]++;
    }
  }

  for (let x = 50; x >= 0; x--) {
    if (count[x] === 1) {
      return x;
    }
  }

  return -1;
};
