/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  let left: number = 0,
    right: number = 0;
  let needMap = new Map<string, number>();
  let valid = 0;
  let slideMap = new Map<string, number>();
  for (let i = 0; i < s1.length; i++) {
    needMap.set(s1[i], needMap.get(s1[i]) ? needMap.get(s1[i])! + 1 : 1);
  }

  while (right < s2.length) {
    let curVal = s2[right];
    if (needMap.has(curVal)) {
      slideMap.set(curVal, (slideMap.get(curVal) || 0) + 1);
      if (slideMap.get(curVal) === needMap.get(curVal)) {
        valid++;
      }
    }

    right++;
    while (right - left >= s1.length) {
      //开始缩小滑动窗口
      if (valid === needMap.size) {
        //子串长度和滑动窗口收缩的长度一样
        return true;
      }
      let d = s2[left];
      if (needMap.has(d)) {
        if (slideMap.get(d) === needMap.get(d)) {
          valid--;
        }
        slideMap.set(d, slideMap.get(d)! - 1);
      }
      left++;
    }
  }
  return false;
}

// @lc code=end
