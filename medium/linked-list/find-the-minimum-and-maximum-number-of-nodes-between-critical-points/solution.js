/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  let first = -1;
  let last = -1;
  let min = Infinity;
  let max = -1;
  let index = 1;

  const solve = (prev, curr) => {
    if (!curr || !curr.next) {
      return;
    }

    if (
      (curr.val > prev.val && curr.val > curr.next.val) ||
      (curr.val < prev.val && curr.val < curr.next.val)
    ) {
      if (first === -1) {
        first = index;
      } else {
        min = Math.min(min, index - last);
        max = index - first;
      }

      last = index;
    }

    index++;
    solve(curr, curr.next);
  };

  solve(head, head.next);

  return first === -1 || first === last ? [-1, -1] : [min, max];
};
