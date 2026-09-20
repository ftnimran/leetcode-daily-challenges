/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s, i = 0) {
  if (i === s.length) {
    return 0;
  }
  return (123 - s.charCodeAt(i)) * (i + 1) + reverseDegree(s, i + 1);
};
