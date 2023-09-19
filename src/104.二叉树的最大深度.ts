/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const leftMax: number = maxDepth(root.left);
  const rightMax = maxDepth(root.right);
  // 整棵树的最大深度等于左右子树的最大深度取最大值，
  // 然后再加上根节点自己
  console.log(leftMax, rightMax, root.val);
  const res = Math.max(leftMax, rightMax) + 1;
  console.log("res", res);
  return res;
  // return DFS(root, 0);
}

// function DFS(root: TreeNode | null, count: number): number {
//   if (!root) {
//     return count;
//   }
//   const leftMax = DFS(root.left);
//   const rightMax = count++;
//   return Math.max(DFS(root.left, count), DFS(root.right, count));
// }
// @lc code=end
