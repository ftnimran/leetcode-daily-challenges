/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  const n = nums.length;
  const suffix = new Float64Array(n);

  const build = (i) => {
    if (i === n - 1) {
      suffix[i] = nums[i];
      return suffix[i];
    }

    const next = build(i + 1);
    suffix[i] = nums[i] < next ? nums[i] : next;
    return suffix[i];
  };

  build(0);

  const find = (i, mx) => {
    if (i === n) return -1;

    if (nums[i] > mx) mx = nums[i];

    if (mx - suffix[i] <= k) return i;

    return find(i + 1, mx);
  };

  return find(0, nums[0]);
};
