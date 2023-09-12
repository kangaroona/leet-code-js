/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0,
    right: number = nums.length - 1;
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    // console.log(middle);
    if (nums[middle] < target) {
      //说明要查的在右边
      left = middle + 1;
    } else if (nums[middle] > target) {
      //说明要查的在左边
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
console.log(search([-1, 0, 3, 5, 9, 12], 9));
// @lc code=end
