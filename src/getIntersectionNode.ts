/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const mySet = new Set<ListNode>();
  while (headA) {
    mySet.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (mySet.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
}
// @lc code=end
