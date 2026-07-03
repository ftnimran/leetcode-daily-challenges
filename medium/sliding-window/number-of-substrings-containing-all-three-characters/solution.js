/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const last = [-1, -1, -1];
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    last[s.charCodeAt(i) - 97] = i;
    ans += Math.min(last[0], last[1], last[2]) + 1;
  }

  return ans;
};
