/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function (nums, k, queries) {
  const n = nums.length;
  const tree_prod = new Uint8Array(4 * n + 1);
  const tree_counts = new Int32Array((4 * n + 1) * k);

  const build = (node, L, R) => {
    if (L === R) {
      let p = nums[L] % k;
      tree_prod[node] = p;
      tree_counts[node * k + p] = 1;
      return;
    }
    let mid = (L + R) >> 1,
      left = node * 2,
      right = left + 1;
    build(left, L, mid);
    build(right, mid + 1, R);

    let lp = tree_prod[left];
    tree_prod[node] = (lp * tree_prod[right]) % k;
    let nk = node * k,
      lk = left * k,
      rk = right * k;

    for (let i = 0; i < k; i++) tree_counts[nk + i] = tree_counts[lk + i];
    for (let i = 0; i < k; i++) {
      let p = (lp * i) % k;
      tree_counts[nk + p] += tree_counts[rk + i];
    }
  };

  const update = (node, L, R, idx, val) => {
    if (L === R) {
      let p = val % k;
      tree_prod[node] = p;
      let nk = node * k;
      for (let i = 0; i < k; i++) tree_counts[nk + i] = 0;
      tree_counts[nk + p] = 1;
      return;
    }
    let mid = (L + R) >> 1,
      left = node * 2,
      right = left + 1;

    if (idx <= mid) update(left, L, mid, idx, val);
    else update(right, mid + 1, R, idx, val);

    let lp = tree_prod[left];
    tree_prod[node] = (lp * tree_prod[right]) % k;
    let nk = node * k,
      lk = left * k,
      rk = right * k;

    for (let i = 0; i < k; i++) tree_counts[nk + i] = tree_counts[lk + i];
    for (let i = 0; i < k; i++) {
      let p = (lp * i) % k;
      tree_counts[nk + p] += tree_counts[rk + i];
    }
  };

  const query = (node, L, R, ql, qr) => {
    if (ql <= L && R <= qr) {
      let nk = node * k;
      let res = [tree_prod[node]];
      for (let i = 0; i < k; i++) res.push(tree_counts[nk + i]);
      return res;
    }
    let mid = (L + R) >> 1,
      left = node * 2,
      right = left + 1;

    if (qr <= mid) return query(left, L, mid, ql, qr);
    if (ql > mid) return query(right, mid + 1, R, ql, qr);

    let leftRes = query(left, L, mid, ql, qr);
    let rightRes = query(right, mid + 1, R, ql, qr);

    let lp = leftRes[0];
    let res = [(lp * rightRes[0]) % k];

    for (let i = 0; i < k; i++) res.push(leftRes[i + 1]);
    for (let i = 0; i < k; i++) {
      let p = (lp * i) % k;
      res[p + 1] += rightRes[i + 1];
    }
    return res;
  };

  build(1, 0, n - 1);

  const ans = new Int32Array(queries.length);
  for (let q = 0; q < queries.length; q++) {
    let [idx, val, start, x] = queries[q];
    update(1, 0, n - 1, idx, val);
    let res = query(1, 0, n - 1, start, n - 1);
    ans[q] = res[x + 1];
  }

  return Array.from(ans);
};
