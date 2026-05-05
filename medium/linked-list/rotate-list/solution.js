/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  let len = 0;
  let temp = head;
  while (temp) {
    len++;
    temp = temp.next;
  }

  k = k % len;
  if (k === 0) return head;

  function rotateOnce(head) {
    if (!head || !head.next) return head;

    let prev = null;
    let curr = head;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    curr.next = head;

    return curr;
  }

  function solve(head, k) {
    if (k === 0) return head;
    return solve(rotateOnce(head), k - 1);
  }

  return solve(head, k);
};
