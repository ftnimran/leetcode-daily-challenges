/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
function smallestNumber(num, t) {
  const p = [2, 3, 5, 7];
  const need = [0, 0, 0, 0];

  for (let i = 0; i < 4; i++) {
    while (t % p[i] === 0) {
      t /= p[i];
      need[i]++;
    }
  }

  if (t !== 1) return "-1";

  const f = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [2, 0, 0, 0],
    [0, 0, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [3, 0, 0, 0],
    [0, 2, 0, 0],
  ];

  const memo = new Map();

  const solve = (a, b, c, d) => {
    if (a <= 0 && b <= 0 && c <= 0 && d <= 0) return "";

    a = Math.max(0, a);
    b = Math.max(0, b);
    c = Math.max(0, c);
    d = Math.max(0, d);

    const key = `${a},${b},${c},${d}`;

    if (memo.has(key)) return memo.get(key);

    let best = null;

    for (let x = 2; x <= 9; x++) {
      const q = f[x];

      const na = Math.max(0, a - q[0]);
      const nb = Math.max(0, b - q[1]);
      const nc = Math.max(0, c - q[2]);
      const nd = Math.max(0, d - q[3]);

      if (na === a && nb === b && nc === c && nd === d) continue;

      const rest = solve(na, nb, nc, nd);

      if (rest === null) continue;

      const cur = x + rest;

      if (
        best === null ||
        cur.length < best.length ||
        (cur.length === best.length && cur < best)
      ) {
        best = cur;
      }
    }

    memo.set(key, best);
    return best;
  };

  const build = (a) => solve(a[0], a[1], a[2], a[3]);
  const required = build(need);

  if (required === null) return "-1";

  if (required.length > num.length) return required;

  const total = [0, 0, 0, 0];
  let zero = -1;

  for (let i = 0; i < num.length; i++) {
    const d = num.charCodeAt(i) - 48;

    if (d === 0 && zero === -1) zero = i;

    total[0] += f[d][0];
    total[1] += f[d][1];
    total[2] += f[d][2];
    total[3] += f[d][3];
  }

  if (
    zero === -1 &&
    total[0] >= need[0] &&
    total[1] >= need[1] &&
    total[2] >= need[2] &&
    total[3] >= need[3]
  ) {
    return num;
  }

  for (let i = num.length - 1; i >= 0; i--) {
    const cur = num.charCodeAt(i) - 48;

    total[0] -= f[cur][0];
    total[1] -= f[cur][1];
    total[2] -= f[cur][2];
    total[3] -= f[cur][3];

    if (zero !== -1 && i > zero) continue;

    for (let d = cur + 1; d <= 9; d++) {
      const rem = [
        Math.max(0, need[0] - total[0] - f[d][0]),
        Math.max(0, need[1] - total[1] - f[d][1]),
        Math.max(0, need[2] - total[2] - f[d][2]),
        Math.max(0, need[3] - total[3] - f[d][3]),
      ];

      const suffix = build(rem);

      if (suffix === null) continue;

      const slots = num.length - i - 1;

      if (suffix.length <= slots) {
        return num.slice(0, i) + d + "1".repeat(slots - suffix.length) + suffix;
      }
    }
  }

  return "1".repeat(num.length + 1 - required.length) + required;
}
