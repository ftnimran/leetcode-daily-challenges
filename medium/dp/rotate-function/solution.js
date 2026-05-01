/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  const n = nums.length;

  let totalSum = 0;
  let f0 = 0;

  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
    f0 += i * nums[i];
  }

  let answer = f0;

  function solve(k, prev) {
    if (k === n) return;

    const curr = prev + totalSum - n * nums[n - k];
    answer = Math.max(answer, curr);

    solve(k + 1, curr);
  }

  solve(1, f0);

  return answer;
};
