/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
  nums.sort((a, b) => a - b);

  const ans = [];

  function solve(index) {
    if (index === nums.length) return;

    for (let x = nums[index - 1] + 1; x < nums[index]; x++) {
      ans.push(x);
    }

    solve(index + 1);
  }

  solve(1);

  return ans;
};
