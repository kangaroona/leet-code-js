/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let fast: number = 0,
    slow: number = 0;
  while (fast < nums.length) {
    //等于 0 则用后面的数覆盖掉
    if (nums[fast] != 0) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  for (let j = slow; j < nums.length; j++) {
    nums[j] = 0;
  }
  console.log(nums);
}
moveZeroes([0, 1, 0, 3, 12]);
// @lc code=end
