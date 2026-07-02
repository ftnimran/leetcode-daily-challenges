/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
  const n = nums.length;

  const pref = [0];
  let sum = 0;

  for (const x of nums) {
    sum += x === target ? 1 : -1;
    pref.push(sum);
  }

  const vals = [...new Set(pref)].sort((a, b) => a - b);

  const rank = new Map();
  for (let i = 0; i < vals.length; i++) {
    rank.set(vals[i], i + 1);
  }

  const bit = new Array(vals.length + 2).fill(0);

  const update = (idx, val) => {
    while (idx < bit.length) {
      bit[idx] += val;
      idx += idx & -idx;
    }
  };

  const query = (idx) => {
    let res = 0;
    while (idx > 0) {
      res += bit[idx];
      idx -= idx & -idx;
    }
    return res;
  };

  let ans = 0;

  for (const p of pref) {
    const idx = rank.get(p);

    ans += query(idx - 1);

    update(idx, 1);
  }

  return ans;
};
