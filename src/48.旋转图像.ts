/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  //step1 按对角线 swap
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  //step2 按 row reverse
  for (let k = 0; k < matrix.length; k++) {
    matrix[k].reverse();
  }
}
rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// @lc code=end
