/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
  let res: number = 0;
  const resArr: number[] = [];
  if (!root) {
    return res;
  }
  const level: number[] = [];
  const travers = (root: TreeNode) => {
    if (root) {
      level.push(root.val);
      travers(root.left!);
      travers(root.right!);
      resArr.push(parseInt(level.join("")));
      level.pop();
    }
  };
  travers(root);
  res = resArr.reduce((prev, cur) => {
    return prev + cur;
  });
  console.log(res - root.val);
  return 0;
}
// @lc code=end
