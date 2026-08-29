/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  const n = nums.length;

  const order = new Array(n);
  for (let i = 0; i < n; i++) {
    order[i] = i;
  }

  order.sort((a, b) => nums[a] - nums[b]);

  const values = new Array(n);
  for (let i = 0; i < n; i++) {
    values[i] = nums[order[i]];
  }

  const group = new Int32Array(n);
  const start = [0];

  let g = 0;
  group[order[0]] = 0;

  for (let i = 1; i < n; i++) {
    if (values[i] - values[i - 1] > limit) {
      g++;
      start.push(i);
    }

    group[order[i]] = g;
  }

  const ptr = start.slice();

  for (let i = 0; i < n; i++) {
    const groupId = group[i];
    nums[i] = values[ptr[groupId]];
    ptr[groupId]++;
  }

  return nums;
};
