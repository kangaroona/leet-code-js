/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  const res: number[][] = [];
  if (len < 3) return [nums];
  nums.sort((a, b) => a - b);

  nums.forEach((value, idx) => {
    // console.log(idx, value, nums[idx - 1]);
    if (idx > 0 && value === nums[idx - 1]) return;
    let left = idx + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum: number = value + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([value, nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
      }
    }
  });
  return res;
}
threeSum([-1, 0, 1, 2, -1, -4]);
// @lc code=end
