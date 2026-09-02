/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1) {
  const solve = (i) => {
    if (i === nums1.length) return true;
    return solve(i + 1);
  };

  return solve(0);
};
