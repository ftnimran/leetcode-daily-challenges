/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const freq = new Array(26).fill(0);

  for (const ch of word) freq[ch.charCodeAt(0) - 97]++;

  freq.sort((a, b) => b - a);

  let ans = 0;

  for (let i = 0; i < 26; i++) {
    if (freq[i] === 0) break;

    ans += freq[i] * (Math.floor(i / 8) + 1);
  }

  return ans;
};
