/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return b[1] - a[1];
  });

  const dfs = (i, maxEnd, count) => {
    if (i === intervals.length) return count;

    const end = intervals[i][1];

    if (end > maxEnd) return dfs(i + 1, end, count + 1);

    return dfs(i + 1, maxEnd, count);
  };

  return dfs(0, -1, 0);
};
