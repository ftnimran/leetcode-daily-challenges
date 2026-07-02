/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  const buildLPS = (pat) => {
    const lps = new Array(pat.length).fill(0);

    for (let i = 1, len = 0; i < pat.length; ) {
      if (pat[i] === pat[len]) {
        lps[i++] = ++len;
      } else if (len) {
        len = lps[len - 1];
      } else {
        i++;
      }
    }

    return lps;
  };

  const kmp = (text, pat) => {
    const lps = buildLPS(pat);

    let i = 0,
      j = 0;

    while (i < text.length) {
      if (text[i] === pat[j]) {
        i++;
        j++;

        if (j === pat.length) return true;
      } else if (j) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }

    return false;
  };

  let ans = 0;

  for (const pat of patterns) {
    if (kmp(word, pat)) ans++;
  }

  return ans;
};
