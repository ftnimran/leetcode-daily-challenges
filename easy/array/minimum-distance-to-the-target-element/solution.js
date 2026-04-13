/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let ans = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      let d = Math.abs(i - start);
      if (d < ans) ans = d;
    }
  }

  return ans;
};
