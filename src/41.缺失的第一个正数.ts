/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 * 核心思想如果数组里没有最小正整数 1 的话，则返回 1.否则，就看这个数组正整数区间缺失的是哪个值
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
  const set = new Set(nums);
  let i = 1;
  while (set.has(i)) i++;
  return i;
}
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
// @lc code=end
