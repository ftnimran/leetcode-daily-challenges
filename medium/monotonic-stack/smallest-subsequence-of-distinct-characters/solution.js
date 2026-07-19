/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  function solve(str) {
    if (str.length === 0) return "";

    const last = {};

    for (let i = 0; i < str.length; i++) {
      last[str[i]] = i;
    }

    let pos = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] < str[pos]) pos = i;

      if (i === last[str[i]]) break;
    }

    const ch = str[pos];

    return ch + solve(str.slice(pos + 1).replace(new RegExp(ch, "g"), ""));
  }

  return solve(s);
};
