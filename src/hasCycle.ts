/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.next = next === undefined ? null : next;
    this.val = val === undefined ? 0 : val;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast) {
    slow = slow ? slow.next : null;
    fast = fast.next ? fast.next.next : null;
    if (slow === fast) return true;
  }
  return false;
}
const arr = [0, 1, 3];
// @lc code=end
