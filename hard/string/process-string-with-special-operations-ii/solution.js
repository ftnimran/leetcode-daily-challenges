/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var processStr = function (s, k) {
  const lens = [];
  let len = 0n;

  for (const ch of s) {
    if (ch >= "a" && ch <= "z") {
      len++;
    } else if (ch === "*") {
      if (len > 0n) len--;
    } else if (ch === "#") {
      len *= 2n;
    }
    lens.push(len);
  }

  let pos = BigInt(k);

  if (pos >= len) return ".";

  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s[i];
    const after = lens[i];
    const before = i === 0 ? 0n : lens[i - 1];

    if (ch >= "a" && ch <= "z") {
      if (pos === after - 1n) return ch;
    } else if (ch === "#") {
      pos %= before;
    } else if (ch === "%") {
      pos = after - 1n - pos;
    } else {
      if (before > after) {
        if (pos >= after) {
          pos = before - 1n;
        }
      }
    }
  }

  return ".";
};
