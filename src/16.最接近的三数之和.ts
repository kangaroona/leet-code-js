/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closest: number = nums[0] + nums[1] + nums[nums.length - 1];
  let left: number;
  let right: number;
  let current: number;
  let currentMod: number;
  let dif: number;

  for (let i = 0; i < nums.length; i++) {
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      current = nums[i] + nums[left] + nums[right];
      currentMod = Math.abs(current - target);
      dif = Math.abs(closest - target);

      if (dif === currentMod && current > closest) closest = current;
      else if (dif > currentMod) closest = current;

      if (current > target) right--;
      else if (current < target) left++;
      else if (current === target) return target;
    }
  }

  return closest;
}
threeSumClosest([2, 3, 8, 9, 10], 16);
// @lc code=end
