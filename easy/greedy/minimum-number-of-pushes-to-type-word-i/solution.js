/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  let pushes = 0;

  for (let i = 0; i < word.length; i++) {
    pushes += Math.floor(i / 8) + 1;
  }

  return pushes;
};
