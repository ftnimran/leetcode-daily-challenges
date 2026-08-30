/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
  const n = nums.length;

  const findMinMax = (i, minIdx, maxIdx) => {
    if (i === n) return [minIdx, maxIdx];

    if (nums[i] < nums[minIdx]) minIdx = i;
    if (nums[i] > nums[maxIdx]) maxIdx = i;

    return findMinMax(i + 1, minIdx, maxIdx);
  };

  const [a, b] = findMinMax(1, 0, 0);

  const minIdx = Math.min(a, b);
  const maxIdx = Math.max(a, b);

  return Math.min(maxIdx + 1, n - minIdx, minIdx + 1 + n - maxIdx);
};
