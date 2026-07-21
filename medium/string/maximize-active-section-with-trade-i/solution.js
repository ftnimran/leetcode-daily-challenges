/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function (s) {
  const n = s.length;

  let ones = 0;
  for (const ch of s) {
    if (ch === "1") ones++;
  }

  const t = "1" + s + "1";

  function solve(i, best) {
    if (i >= t.length - 1) return best;

    if (t[i] !== "1") {
      return solve(i + 1, best);
    }

    let l = i;
    while (i < t.length && t[i] === "1") i++;
    let r = i - 1;

    if (l > 0 && r < t.length - 1 && t[l - 1] === "0" && t[r + 1] === "0") {
      let left = 0;
      let p = l - 1;
      while (p >= 0 && t[p] === "0") {
        left++;
        p--;
      }

      let right = 0;
      p = r + 1;
      while (p < t.length && t[p] === "0") {
        right++;
        p++;
      }

      best = Math.max(best, ones + left + right);
    }

    return solve(i, best);
  }

  return Math.min(solve(1, ones), n);
};
