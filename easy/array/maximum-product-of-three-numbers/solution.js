/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;

  let min1 = Infinity;
  let min2 = Infinity;

  function solve(i) {
    if (i === nums.length) return;

    const num = nums[i];

    if (num >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num >= max2) {
      max3 = max2;
      max2 = num;
    } else if (num >= max3) {
      max3 = num;
    }

    if (num <= min1) {
      min2 = min1;
      min1 = num;
    } else if (num <= min2) {
      min2 = num;
    }

    solve(i + 1);
  }

  solve(0);

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};
