/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function (s) {
  let first = new Int32Array(26).fill(-1);
  let last = new Int32Array(26);
  let len = s.length;

  for (let i = 0; i < len; i++) {
    let c = s.charCodeAt(i) - 97;
    if (first[c] === -1) first[c] = i;
    last[c] = i;
  }

  let intervals = [];
  for (let i = 0; i < 26; i++) {
    if (first[i] !== -1) {
      let l = first[i],
        r = last[i],
        valid = true;
      for (let j = l; j <= r && valid; j++) {
        let c = s.charCodeAt(j) - 97;
        if (first[c] < l) valid = false;
        else if (last[c] > r) r = last[c];
      }
      if (valid) intervals.push([l, r]);
    }
  }

  intervals.sort((a, b) =>
    a[1] === b[1] ? a[1] - a[0] - (b[1] - b[0]) : a[1] - b[1],
  );

  const solve = (idx, end) => {
    if (idx === intervals.length) return [];
    if (intervals[idx][0] > end) {
      return [
        s.substring(intervals[idx][0], intervals[idx][1] + 1),
        ...solve(idx + 1, intervals[idx][1]),
      ];
    }
    return solve(idx + 1, end);
  };

  return solve(0, -1);
};
