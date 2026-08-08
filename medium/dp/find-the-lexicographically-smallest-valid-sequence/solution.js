/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function (word1, word2) {
  const n = word1.length;
  const m = word2.length;

  const last = new Array(m).fill(-1);
  const ans = new Array(m);

  let i = n - 1;
  let j = m - 1;

  while (i >= 0 && j >= 0) {
    if (word1[i] === word2[j]) {
      last[j] = i;
      j--;
    }
    i--;
  }

  let used = false;
  j = 0;

  for (i = 0; i < n && j < m; i++) {
    if (word1[i] === word2[j]) {
      ans[j++] = i;
    } else if (!used && (j === m - 1 || i < last[j + 1])) {
      ans[j++] = i;
      used = true;
    }
  }

  return j === m ? ans : [];
};
