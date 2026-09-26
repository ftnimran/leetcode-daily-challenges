/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const map = new Map(knowledge);

  const dfs = (i) => {
    if (i >= s.length) return "";

    let openIdx = s.indexOf("(", i);

    if (openIdx === -1) return s.slice(i);

    let closeIdx = s.indexOf(")", openIdx);
    let key = s.slice(openIdx + 1, closeIdx);
    let val = map.has(key) ? map.get(key) : "?";

    return s.slice(i, openIdx) + val + dfs(closeIdx + 1);
  };

  return dfs(0);
};
