/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const q = [];
  let flag: boolean = true; //false：从右往左，true：从左往右
  if (!root) {
    return res;
  }
  q.push(root);
  while (q.length > 0) {
    const level: number[] = [];
    const curSize = q.length;
    console.log("curSize=", curSize); //当前层的个数
    for (let i = 0; i < curSize; i++) {
      //遍历当前层的节点
      const cur = q.shift();
      console.log(cur?.val);
      if (flag) {
        level.push(cur?.val as number);
      } else {
        level.unshift(cur?.val as number);
      }
      if (cur?.left) {
        //收集下一层的节点
        q.push(cur.left);
      }
      if (cur?.right) {
        q.push(cur.right);
      }
    }
    flag = !flag;
    res.push(level);
  }
  return res;
}
// @lc code=end
