/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function (s, queryCharacters, queryIndices) {
  const n = s.length;
  const tree = new Array(4 * n);

  const merge = (a, b) => {
    const same = a.right === b.left;

    const res = {
      left: a.left,
      right: b.right,
      pref: a.pref,
      suff: b.suff,
      best: Math.max(a.best, b.best),
    };

    if (same) {
      if (a.pref === a.len) {
        res.pref = a.len + b.pref;
      }

      if (b.suff === b.len) {
        res.suff = a.suff + b.len;
      }

      res.best = Math.max(res.best, a.suff + b.pref);
    }

    res.len = a.len + b.len;

    return res;
  };

  const build = (node, l, r) => {
    if (l === r) {
      const c = s.charCodeAt(l);

      tree[node] = {
        left: c,
        right: c,
        pref: 1,
        suff: 1,
        best: 1,
        len: 1,
      };

      return;
    }

    const mid = (l + r) >> 1;

    build(node << 1, l, mid);
    build((node << 1) | 1, mid + 1, r);

    tree[node] = merge(tree[node << 1], tree[(node << 1) | 1]);
  };

  const update = (node, l, r, index, charCode) => {
    if (l === r) {
      tree[node] = {
        left: charCode,
        right: charCode,
        pref: 1,
        suff: 1,
        best: 1,
        len: 1,
      };

      return;
    }

    const mid = (l + r) >> 1;

    if (index <= mid) {
      update(node << 1, l, mid, index, charCode);
    } else {
      update((node << 1) | 1, mid + 1, r, index, charCode);
    }

    tree[node] = merge(tree[node << 1], tree[(node << 1) | 1]);
  };

  build(1, 0, n - 1);

  const ans = new Array(queryIndices.length);

  for (let i = 0; i < queryIndices.length; i++) {
    update(1, 0, n - 1, queryIndices[i], queryCharacters.charCodeAt(i));

    ans[i] = tree[1].best;
  }

  return ans;
};
