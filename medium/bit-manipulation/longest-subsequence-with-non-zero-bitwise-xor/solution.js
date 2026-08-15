/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function (nums) {
  function solve(index) {
    if (index === nums.length) {
      return [0, false];
    }

    const [xor, hasNonZero] = solve(index + 1);

    return [xor ^ nums[index], hasNonZero || nums[index] !== 0];
  }

  const [xor, hasNonZero] = solve(0);

  if (xor !== 0) {
    return nums.length;
  }

  return hasNonZero ? nums.length - 1 : 0;
};
