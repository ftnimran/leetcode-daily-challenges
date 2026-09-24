/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums, i = 0) {
  if (i === nums.length) return -1;

  let sum = 0;
  let val = nums[i];

  while (val > 0) {
    sum += val % 10;
    val = (val / 10) | 0;
  }

  if (sum === i) return i;

  return smallestIndex(nums, i + 1);
};
