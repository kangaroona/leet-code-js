/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(-1);
  dummy.next = head;
  const removeNode = findRemoveNode(dummy, n + 1) as ListNode;
  removeNode.next = removeNode.next?.next!;
  return dummy.next;
}

function findRemoveNode(head: ListNode | null, k: number): ListNode | null {
  let p1 = head;
  for (let i = 0; i < k; i++) {
    p1 = p1 ? p1.next : null;
  }
  let p2 = head;
  while (p1) {
    p1 = p1.next;
    p2 = p2 ? p2.next : null;
  }
  return p2; //指向 n-k 的节点，就是倒数第 K 个节点
}
// @lc code=end
