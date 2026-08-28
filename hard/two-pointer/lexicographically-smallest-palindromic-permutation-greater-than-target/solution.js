/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexPalindromicPermutation = function (s, target) {
  const n = s.length;
  const halfLen = Math.floor(n / 2);

  const freq = new Int32Array(26);

  for (const ch of s) {
    freq[ch.charCodeAt(0) - 97]++;
  }

  let oddChar = "";

  for (let i = 0; i < 26; i++) {
    if (freq[i] % 2 === 1) {
      if (oddChar !== "") return "";
      oddChar = String.fromCharCode(97 + i);
    }
  }

  const halfCount = new Int32Array(26);

  for (let i = 0; i < 26; i++) {
    halfCount[i] = freq[i] >> 1;
  }

  const buildPalindrome = (half) => {
    const left = half.join("");
    return left + oddChar + half.slice().reverse().join("");
  };

  const count = new Int32Array(halfCount);

  const dfs = (pos, half) => {
    if (pos === halfLen) {
      const palindrome = buildPalindrome(half);
      return palindrome > target ? palindrome : null;
    }

    const targetChar = target.charCodeAt(pos) - 97;

    if (count[targetChar] > 0) {
      count[targetChar]--;
      half.push(target[pos]);

      const result = dfs(pos + 1, half);

      if (result !== null) {
        return result;
      }

      half.pop();
      count[targetChar]++;
    }

    for (let c = targetChar + 1; c < 26; c++) {
      if (count[c] === 0) continue;

      count[c]--;
      half.push(String.fromCharCode(97 + c));

      for (let x = 0; x < 26; x++) {
        while (count[x] > 0) {
          half.push(String.fromCharCode(97 + x));
          count[x]--;
        }
      }

      return buildPalindrome(half);
    }

    return null;
  };

  return dfs(0, []) || "";
};
