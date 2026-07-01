/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let cnt = 0;

    for (let j = i; j < n; j++) {
      if (nums[j] === target) cnt++;

      if (cnt * 2 > j - i + 1) ans++;
    }
  }

  return ans;
};
