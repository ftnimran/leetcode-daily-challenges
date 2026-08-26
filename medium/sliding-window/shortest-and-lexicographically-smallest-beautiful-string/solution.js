/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
  const ones = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      ones.push(i);
    }
  }

  if (ones.length < k) return "";

  const find = (index, best, minLen) => {
    if (index + k - 1 >= ones.length) {
      return best;
    }

    const start = ones[index];
    const end = ones[index + k - 1];
    const len = end - start + 1;
    const current = s.slice(start, end + 1);

    if (len < minLen) {
      best = current;
      minLen = len;
    } else if (len === minLen && current < best) {
      best = current;
    }

    return find(index + 1, best, minLen);
  };

  return find(0, "", Infinity);
};
