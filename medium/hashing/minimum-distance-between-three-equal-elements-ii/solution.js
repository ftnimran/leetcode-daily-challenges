/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
  const map = new Map();
  let ans = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];

    if (!map.has(val)) map.set(val, []);

    let arr = map.get(val);
    arr.push(i);

    if (arr.length > 3) arr.shift();

    if (arr.length === 3) {
      let dist = 2 * (arr[2] - arr[0]);
      if (dist < ans) ans = dist;
    }
  }

  return ans === Infinity ? -1 : ans;
};
