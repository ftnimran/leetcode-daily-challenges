/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  const freq = new Map();

  for (const x of nums) {
    freq.set(x, (freq.get(x) || 0) + 1);
  }

  let ans = 1;

  const ones = freq.get(1) || 0;
  if (ones > 0) {
    ans = Math.max(ans, ones % 2 === 0 ? ones - 1 : ones);
  }

  for (const [start] of freq) {
    if (start === 1) continue;

    let cur = start;
    let len = 0;

    while ((freq.get(cur) || 0) >= 2) {
      len += 2;
      cur *= cur;
    }

    if ((freq.get(cur) || 0) >= 1) {
      len += 1;
    } else {
      len -= 1;
    }

    ans = Math.max(ans, len);
  }

  return ans;
};
