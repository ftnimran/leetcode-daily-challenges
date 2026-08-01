/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
  const n = nums.length;
  const memo = Array.from({ length: n }, () => Array(n));

  function dfs(left, right) {
    if (left === right) return nums[left];

    if (memo[left][right] !== undefined) return memo[left][right];

    const takeLeft = nums[left] - dfs(left + 1, right);
    const takeRight = nums[right] - dfs(left, right - 1);

    return (memo[left][right] = Math.max(takeLeft, takeRight));
  }

  return dfs(0, n - 1) >= 0;
};
