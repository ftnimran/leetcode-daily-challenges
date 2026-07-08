/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
  const MOD = 1000000007n;
  const n = s.length;

  const pow10 = new Array(n + 1);
  pow10[0] = 1n;
  for (let i = 1; i <= n; i++) {
    pow10[i] = (pow10[i - 1] * 10n) % MOD;
  }

  const val = new Array(4 * n).fill(0n);
  const sum = new Array(4 * n).fill(0);
  const cnt = new Array(4 * n).fill(0);

  function pull(idx) {
    cnt[idx] = cnt[idx * 2] + cnt[idx * 2 + 1];
    sum[idx] = sum[idx * 2] + sum[idx * 2 + 1];
    val[idx] =
      (val[idx * 2] * pow10[cnt[idx * 2 + 1]] + val[idx * 2 + 1]) % MOD;
  }

  function build(idx, l, r) {
    if (l === r) {
      const d = s.charCodeAt(l) - 48;
      if (d !== 0) {
        cnt[idx] = 1;
        sum[idx] = d;
        val[idx] = BigInt(d);
      }
      return;
    }

    const mid = (l + r) >> 1;
    build(idx * 2, l, mid);
    build(idx * 2 + 1, mid + 1, r);
    pull(idx);
  }

  function query(idx, l, r, ql, qr) {
    if (ql <= l && r <= qr) {
      return {
        cnt: cnt[idx],
        sum: sum[idx],
        val: val[idx],
      };
    }

    const mid = (l + r) >> 1;

    if (qr <= mid) return query(idx * 2, l, mid, ql, qr);
    if (ql > mid) return query(idx * 2 + 1, mid + 1, r, ql, qr);

    const left = query(idx * 2, l, mid, ql, qr);
    const right = query(idx * 2 + 1, mid + 1, r, ql, qr);

    return {
      cnt: left.cnt + right.cnt,
      sum: left.sum + right.sum,
      val: (left.val * pow10[right.cnt] + right.val) % MOD,
    };
  }

  build(1, 0, n - 1);

  const ans = [];

  for (const [l, r] of queries) {
    const cur = query(1, 0, n - 1, l, r);
    ans.push(Number((cur.val * BigInt(cur.sum)) % MOD));
  }

  return ans;
};
