/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function (nums) {
  const n = nums.length;

  if (n < 3) return n;

  let ans = 1;

  while (ans <= n) ans <<= 1;

  return ans;
};
