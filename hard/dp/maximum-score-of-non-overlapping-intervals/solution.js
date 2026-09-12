/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function (intervals) {
  const n = intervals.length;

  const arr = intervals.map((x, i) => [x[0], x[1], x[2], i]);

  arr.sort((a, b) => a[0] - b[0]);

  const starts = new Array(n);

  for (let i = 0; i < n; i++) {
    starts[i] = arr[i][0];
  }

  const getNext = (r) => {
    let lo = 0;
    let hi = n;

    while (lo < hi) {
      const mid = (lo + hi) >> 1;

      if (starts[mid] > r) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
  };

  const next = new Array(n);

  for (let i = 0; i < n; i++) {
    next[i] = getNext(arr[i][1]);
  }

  const memo = new Map();

  const compare = (a, b) => {
    if (a.score !== b.score) {
      return a.score > b.score ? a : b;
    }

    const A = a.ids;
    const B = b.ids;

    for (let i = 0; i < Math.min(A.length, B.length); i++) {
      if (A[i] !== B[i]) {
        return A[i] < B[i] ? a : b;
      }
    }

    return A.length <= B.length ? a : b;
  };

  const solve = (i, k) => {
    if (i >= n || k === 0) {
      return {
        score: 0,
        ids: [],
      };
    }

    const key = i * 5 + k;

    if (memo.has(key)) {
      return memo.get(key);
    }

    const skip = solve(i + 1, k);

    const after = solve(next[i], k - 1);

    const take = {
      score: arr[i][2] + after.score,
      ids: [...after.ids, arr[i][3]].sort((a, b) => a - b),
    };

    const ans = compare(take, skip);

    memo.set(key, ans);

    return ans;
  };

  return solve(0, 4).ids;
};
