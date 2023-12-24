/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) {
    return res;
  }

  const q: TreeNode[] = [];
  q.push(root);

  while (q.length > 0) {
    console.log("🚀 ~ file: 102.二叉树的层序遍历.ts:28 ~ levelOrder ~ q:", q);

    const sz = q.length;
    console.log("🚀 ~ file: 102.二叉树的层序遍历.ts:35 ~ levelOrder ~ sz:", sz);
    const level: number[] = [];
    for (let i = 0; i < sz; i++) {
      const cur: TreeNode = q.shift()!;
      level.push(cur.val);
      console.log(cur.val, cur.left, cur.right);
      if (cur.left) {
        q.push(cur.left);
      }
      if (cur.right) {
        q.push(cur.right);
      }
    }
    res.push(level);
  }
  return res;
}
class TreeNode1 {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
levelOrder(new TreeNode1());
// @lc code=end
