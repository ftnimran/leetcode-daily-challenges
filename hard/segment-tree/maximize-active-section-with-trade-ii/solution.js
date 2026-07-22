/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxActiveSectionsAfterTrade = function (s, queries) {
  const n = s.length;
  let totalOnes = 0;

  const bStart = [],
    bEnd = [],
    bLen = [];

  let i = 0;
  while (i < n) {
    if (s[i] === "1") {
      totalOnes++;
      i++;
    } else {
      let start = i;
      while (i < n && s[i] === "0") i++;
      bStart.push(start);
      bEnd.push(i - 1);
      bLen.push(i - start);
    }
  }

  const M = bStart.length;
  let adj = new Int32Array(M > 1 ? M - 1 : 0);
  for (let j = 0; j < M - 1; j++) adj[j] = bLen[j] + bLen[j + 1];

  const tree = new Int32Array(M > 1 ? 4 * (M - 1) : 0);

  const buildTree = (node, l, r) => {
    if (l === r) {
      tree[node] = adj[l];
      return;
    }
    let mid = (l + r) >> 1;
    buildTree(node * 2, l, mid);
    buildTree(node * 2 + 1, mid + 1, r);
    tree[node] = Math.max(tree[node * 2], tree[node * 2 + 1]);
  };

  const queryTree = (node, l, r, ql, qr) => {
    if (ql <= l && r <= qr) return tree[node];
    if (qr < l || r < ql) return 0;

    let mid = (l + r) >> 1;
    return Math.max(
      queryTree(node * 2, l, mid, ql, qr),
      queryTree(node * 2 + 1, mid + 1, r, ql, qr),
    );
  };

  if (M > 1) buildTree(1, 0, M - 2);

  const getBoundaries = (l, r) => {
    let low = 0,
      high = M - 1;
    let a = M,
      b = -1;

    while (low <= high) {
      let mid = (low + high) >> 1;
      if (bEnd[mid] >= l) {
        a = mid;
        high = mid - 1;
      } else low = mid + 1;
    }

    low = 0;
    high = M - 1;
    while (low <= high) {
      let mid = (low + high) >> 1;
      if (bStart[mid] <= r) {
        b = mid;
        low = mid + 1;
      } else high = mid - 1;
    }
    return [a, b];
  };

  return queries.map(([l, r]) => {
    const [a, b] = getBoundaries(l, r);
    if (a >= b) return totalOnes;

    let zA = bEnd[a] - Math.max(l, bStart[a]) + 1;
    let zB = Math.min(r, bEnd[b]) - bStart[b] + 1;

    if (b === a + 1) return totalOnes + zA + zB;

    let maxGain = Math.max(zA + bLen[a + 1], bLen[b - 1] + zB);
    if (b - 2 >= a + 1) {
      maxGain = Math.max(maxGain, queryTree(1, 0, M - 2, a + 1, b - 2));
    }
    return totalOnes + maxGain;
  });
};
