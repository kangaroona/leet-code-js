/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let k: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums);
  return k;
}
console.log(removeDuplicates([1, 1, 2]));
// @lc code=end
