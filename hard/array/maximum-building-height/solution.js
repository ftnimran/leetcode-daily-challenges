/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function (n, restrictions) {
  restrictions.push([1, 0]);

  let found = false;

  for (const [id] of restrictions) {
    if (id === n) {
      found = true;
      break;
    }
  }

  if (!found) {
    restrictions.push([n, n - 1]);
  }

  restrictions.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < restrictions.length; i++) {
    const dist = restrictions[i][0] - restrictions[i - 1][0];

    restrictions[i][1] = Math.min(
      restrictions[i][1],
      restrictions[i - 1][1] + dist,
    );
  }

  for (let i = restrictions.length - 2; i >= 0; i--) {
    const dist = restrictions[i + 1][0] - restrictions[i][0];

    restrictions[i][1] = Math.min(
      restrictions[i][1],
      restrictions[i + 1][1] + dist,
    );
  }

  let ans = 0;

  for (let i = 1; i < restrictions.length; i++) {
    const [id1, h1] = restrictions[i - 1];
    const [id2, h2] = restrictions[i];

    const dist = id2 - id1;

    ans = Math.max(ans, Math.floor((h1 + h2 + dist) / 2));
  }

  return ans;
};
