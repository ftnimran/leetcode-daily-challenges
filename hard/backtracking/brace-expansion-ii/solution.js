/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
  let res = new Set();
  let stack = ["{" + expression + "}"];
  let seen = new Set(stack);

  while (stack.length > 0) {
    let s = stack.pop();
    let right = s.indexOf("}");

    if (right === -1) {
      res.add(s);
      continue;
    }

    let left = s.lastIndexOf("{", right);
    let before = s.substring(0, left);
    let after = s.substring(right + 1);
    let parts = s.substring(left + 1, right).split(",");

    for (let part of parts) {
      let nextStr = before + part + after;
      if (!seen.has(nextStr)) {
        seen.add(nextStr);
        stack.push(nextStr);
      }
    }
  }

  let ans = Array.from(res);
  ans.sort();
  return ans;
};
