/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let p: ListNode | null = list1;
  let q: ListNode | null = list2;
  const dummy: ListNode = new ListNode(-1);
  let p1 = dummy;
  while (p && q) {
    console.log(p.val, q.val);
    if (p.val < q.val) {
      p1.next = p;
      p = p.next;
    } else {
      p1.next = q;
      q = q.next;
    }
    p1 = p1.next;
  }
  if (p !== null) {
    p1.next = p;
  }
  if (q !== null) {
    p1.next = q;
  }
  return dummy.next;
}
// @lc code=end
