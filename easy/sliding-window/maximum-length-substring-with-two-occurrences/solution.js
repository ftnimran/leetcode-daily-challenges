/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  const freq = new Array(26).fill(0);
  let left = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right++) {
    const r = s.charCodeAt(right) - 97;
    freq[r]++;

    while (freq[r] > 2) {
      const l = s.charCodeAt(left) - 97;
      freq[l]--;
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};
