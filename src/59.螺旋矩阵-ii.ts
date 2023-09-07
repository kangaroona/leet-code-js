/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  let top: number = 0,
    left: number = 0,
    right: number = n - 1,
    bottom = n - 1;
  let curNum = 1;
  let dir = 0;
  let matrix: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  console.log(matrix);
  while (left <= right && top <= bottom) {
    //
    switch (dir) {
      case 0: //➡️
        for (let i = left; i <= right; i++) {
          matrix[top][i] = curNum++;
        }
        top++;
        break;
      case 1: //⬇️
        for (let i = top; i <= bottom; i++) {
          // console.log(i, right);
          matrix[i][right] = curNum++;
        }
        right--;
        break;
      case 2: //⬅️
        for (let i = right; i >= left; i--) {
          matrix[bottom][i] = curNum++;
        }
        bottom--;
        break;
      case 3: //⬆️
        for (let i = bottom; i >= top; i--) {
          matrix[i][left] = curNum++;
        }
        left++;
        break;
    }
    dir = (dir + 1) % 4;
  }
  return matrix;
}
console.log(generateMatrix(3));
// @lc code=end
