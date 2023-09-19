/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let l: number = 0,
    r: number = height.length - 1;
  let res = 0;
  while (l <= r) {
    const curArea = Math.min(height[l], height[r]) * (r - l);
    // console.log(curArea);
    res = curArea < res ? res : curArea;
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// @lc code=end
