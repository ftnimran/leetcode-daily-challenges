/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
  const seen = new Uint8Array(101);

  for (const num of nums) {
    seen[num] = 1;
  }

  for (let multiple = k; ; multiple += k) {
    if (multiple > 100 || seen[multiple] === 0) {
      return multiple;
    }
  }
};
