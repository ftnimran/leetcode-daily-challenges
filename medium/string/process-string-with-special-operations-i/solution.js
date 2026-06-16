/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
  let result = "";

  for (const ch of s) {
    if (ch >= "a" && ch <= "z") {
      result += ch;
    } else if (ch === "*") {
      if (result.length > 0) {
        result = result.slice(0, -1);
      }
    } else if (ch === "#") {
      result += result;
    } else {
      // '%'
      result = result.split("").reverse().join("");
    }
  }

  return result;
};
