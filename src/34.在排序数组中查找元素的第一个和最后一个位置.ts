/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  return [left_bound(nums, target), right_bound(nums, target)];
}
const left_bound = function (nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    console.log(mid);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1; //查左侧
    } else if (nums[mid] == target) {
      // 锁定左侧边界，右侧往 mid 的前一位移动，再次缩短查询范围
      right = mid - 1;
    }
  }
  console.log(left, right);
  // 判断 target 是否存在于 nums 中
  if (left < 0 || left >= nums.length) {
    return -1;
  }
  // 判断一下 nums[left] 是不是 target
  return nums[left] == target ? left : -1;
};
const right_bound = function (nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      // 这里改成收缩左侧边界即可
      left = mid + 1;
    }
  }
  // 这里改为检查 right 越界的情况，见下图
  if (right < 0 || nums[right] !== target) {
    return -1;
  }
  return right;
};

console.log(searchRange([5, 6, 7, 7, 7, 8, 8, 10], 8));
// @lc code=end
