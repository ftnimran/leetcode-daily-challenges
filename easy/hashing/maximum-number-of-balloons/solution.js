/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const mp = {};

  for (const ch of text) {
    mp[ch] = (mp[ch] || 0) + 1;
  }

  return Math.min(
    mp["b"] || 0,
    mp["a"] || 0,
    Math.floor((mp["l"] || 0) / 2),
    Math.floor((mp["o"] || 0) / 2),
    mp["n"] || 0,
  );
};
