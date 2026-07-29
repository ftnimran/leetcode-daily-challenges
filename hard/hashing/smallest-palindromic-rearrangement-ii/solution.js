/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function (s, k) {
  const freq = Array(26).fill(0);

  for (const c of s) {
    freq[c.charCodeAt(0) - 97]++;
  }

  const half = freq.map((x) => Math.floor(x / 2));

  let middle = "";

  for (let i = 0; i < 26; i++) {
    if (freq[i] % 2) {
      middle = String.fromCharCode(97 + i);
      break;
    }
  }

  const countWays = () => {
    let ways = 1;
    let total = 0;

    for (let i = 0; i < 26; i++) {
      const cnt = half[i];

      if (!cnt) continue;

      for (let j = 1; j <= cnt; j++) {
        ways = (ways * (total + j)) / j;

        if (ways >= k) {
          return k;
        }
      }

      total += cnt;
    }

    return ways;
  };

  if (countWays() < k) {
    return "";
  }

  const left = [];
  const n = s.length >> 1;

  for (let pos = 0; pos < n; pos++) {
    for (let ch = 0; ch < 26; ch++) {
      if (half[ch] === 0) continue;

      half[ch]--;

      const ways = countWays();

      if (ways >= k) {
        left.push(String.fromCharCode(97 + ch));
        break;
      }

      k -= ways;
      half[ch]++;
    }
  }

  const L = left.join("");

  return L + middle + [...L].reverse().join("");
};
