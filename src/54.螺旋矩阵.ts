/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */
// enum DIR {
//   "->" = 0,
//   "⬇" = 1,
//   "<-" = 2,
//   "↑" = 3,
// }
// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  let resArr: number[] = [];
  let top: number = 0,
    left: number = 0,
    right: number = matrix[0].length - 1,
    bottom = matrix.length - 1;
  let dir = 0;
  while (left <= right && top <= bottom) {
    switch (dir) {
      case 0: //➡️
        for (let i = left; i <= right; i++) {
          resArr.push(matrix[top][i]);
        }
        top++;
        break;
      case 1: //⬇️
        for (let i = top; i <= bottom; i++) {
          resArr.push(matrix[i][right]);
        }
        right--;
        break;
      case 2: //⬅️
        for (let i = right; i >= left; i--) {
          resArr.push(matrix[bottom][i]);
        }
        bottom--;
        break;
      case 3: //⬆️
        for (let i = bottom; i >= top; i--) {
          resArr.push(matrix[i][left]);
        }
        left++;
        break;
    }
    dir = (dir + 1) % 4;
  }
  return resArr;
}
// @lc code=end
