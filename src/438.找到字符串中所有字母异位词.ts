/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  let left: number = 0,
    right: number = 0;
  const len = p.length;
  let res: number[] = [];
  let needMap = new Map();
  let valid = 0;
  let slideMap = new Map<string, number>();
  for (let i = 0; i < len; i++) {
    let c = p[i];
    if (needMap.has(c)) {
      needMap.set(c, needMap.get(c) + 1);
    } else {
      needMap.set(c, 1);
    }
  }
  while (right < s.length) {
    let d = s[right];
    right++;
    if (needMap.has(d)) {
      if (slideMap.has(d)) {
        slideMap.set(d, slideMap.get(d)! + 1);
      } else {
        slideMap.set(d, 1);
      }
      if (needMap.get(d) === slideMap.get(d)) {
        //滑动窗口找到的字符是需要字符
        valid++;
      }
    }
    // console.log("valid=", valid, "left=", left, "right=", right);
    while (right - left >= len) {
      //滑动窗口长度需要>=子串的长度，进行判断
      if (valid === needMap.size) {
        // console.log(valid, left, right);
        res.push(left);
      }
      let c = s[left];
      if (needMap.has(c)) {
        //滑动窗口内的当前值是需要的值的话
        if (slideMap.get(c) === needMap.get(c)) {
          valid--;
        }
        slideMap.set(c, slideMap.get(c)! - 1);
      }
      left++;
    }
  }
  return res;
}
console.log(findAnagrams("dfcbaebabacd", "abc"));
// @lc code=end
