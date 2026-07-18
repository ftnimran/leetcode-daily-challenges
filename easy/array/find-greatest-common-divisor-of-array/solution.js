/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let min = nums[0];
  let max = nums[0];

  for (let num of nums) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  return gcd(max, min);
};
