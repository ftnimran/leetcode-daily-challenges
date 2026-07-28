/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function (s) {
  const freq = new Array(26).fill(0);

  for (const ch of s) freq[ch.charCodeAt(0) - 97]++;

  const ans = new Array(s.length);

  let l = 0;
  let r = s.length - 1;
  let mid = "";

  for (let i = 0; i < 26; i++) {
    while (freq[i] >= 2) {
      const ch = String.fromCharCode(i + 97);
      ans[l++] = ch;
      ans[r--] = ch;
      freq[i] -= 2;
    }

    if (freq[i] === 1) mid = String.fromCharCode(i + 97);
  }

  if (mid) ans[l] = mid;

  return ans.join("");
};
