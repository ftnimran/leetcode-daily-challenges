/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  const arr1 = [nums[0]];
  const arr2 = [nums[1]];

  function solve(index) {
    if (index === nums.length) {
      return;
    }

    if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
      arr1.push(nums[index]);
    } else {
      arr2.push(nums[index]);
    }

    solve(index + 1);
  }

  solve(2);

  return arr1.concat(arr2);
};
