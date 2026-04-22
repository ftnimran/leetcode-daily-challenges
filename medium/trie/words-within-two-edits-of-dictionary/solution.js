/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  function check(q, d, i = 0, diff = 0) {
    if (diff > 2) return false;
    if (i === q.length) return true;

    return check(q, d, i + 1, diff + (q[i] !== d[i] ? 1 : 0));
  }

  const res = [];

  for (let q of queries) {
    for (let d of dictionary) {
      if (check(q, d)) {
        res.push(q);
        break;
      }
    }
  }

  return res;
};
