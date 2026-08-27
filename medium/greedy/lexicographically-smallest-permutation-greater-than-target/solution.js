/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function (s, target) {
  const n = s.length;
  const rem = new Int32Array(26);

  for (let i = 0; i < n; i++) {
    rem[s.charCodeAt(i) - 97]++;
  }

  const res = new Array(n);

  const build = (idx, isGreater) => {
    if (idx === n) return isGreater;

    let startChar = isGreater ? 0 : target.charCodeAt(idx) - 97;

    for (let c = startChar; c < 26; c++) {
      if (rem[c] > 0) {
        rem[c]--;
        res[idx] = String.fromCharCode(c + 97);
        let nextIsGreater = isGreater || c > target.charCodeAt(idx) - 97;

        if (build(idx + 1, nextIsGreater)) {
          return true;
        }

        rem[c]++;
      }
    }
    return false;
  };

  if (build(0, false)) {
    return res.join("");
  }
  return "";
};
