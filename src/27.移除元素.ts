/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  let i = 0;
  while (i < len && nums[i] !== undefined) {
    if (nums[i] === val) {
      console.log(val);
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  console.log(nums);
  return nums.length;
}
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
// @lc code=end
