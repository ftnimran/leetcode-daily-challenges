/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const n = s.length;
  const pair = new Int32Array(n);
  const stack = [];

  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      const j = stack.pop();
      pair[i] = j;
      pair[j] = i;
    }
  }

  let res = "";
  let curr = 0;
  let step = 1;

  while (curr < n) {
    if (s[curr] === "(" || s[curr] === ")") {
      curr = pair[curr];
      step = -step;
    } else {
      res += s[curr];
    }
    curr += step;
  }

  return res;
};
