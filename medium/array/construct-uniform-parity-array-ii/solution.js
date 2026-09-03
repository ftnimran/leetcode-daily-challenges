/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1) {
  const n = nums1.length;
  let minOdd = Infinity;
  let minEven = Infinity;

  const solve = (i) => {
    if (i === n) return;

    if (nums1[i] & 1) {
      minOdd = Math.min(minOdd, nums1[i]);
    } else {
      minEven = Math.min(minEven, nums1[i]);
    }

    solve(i + 1);
  };

  solve(0);

  if (minOdd === Infinity || minEven === Infinity) return true;

  return minOdd < minEven;
};
