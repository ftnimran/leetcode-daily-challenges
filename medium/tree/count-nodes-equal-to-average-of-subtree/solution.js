/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let ans = 0;

  const dfs = (node) => {
    if (!node) return [0, 0];

    const [ls, lc] = dfs(node.left);
    const [rs, rc] = dfs(node.right);

    const sum = ls + rs + node.val;
    const count = lc + rc + 1;

    if (Math.floor(sum / count) === node.val) ans++;

    return [sum, count];
  };

  dfs(root);
  return ans;
};
