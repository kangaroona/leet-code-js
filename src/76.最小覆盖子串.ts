/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";
  let left: number = 0,
    right: number = 0,
    start: number = 0,
    end: number = 0;
  const need = new Map<string, number>();
  const curFindStrMap = new Map<string, number>();
  for (let i = 0; i < t.length; i++) {
    if (need.has(t[i])) {
      need.set(t[i], need.get(t[i])! + 1);
    } else {
      need.set(t[i], 1);
    }
  }
  let minLen = Infinity;
  let valid = 0;
  while (right < s.length) {
    const curVal = s[right];
    right++;
    // console.log(left, right);
    if (need.get(curVal)) {
      // console.log(curVal);
      const curFindVal = curFindStrMap.get(curVal)
        ? curFindStrMap.get(curVal)! + 1
        : 1;
      curFindStrMap.set(curVal, curFindVal);
      if (curFindStrMap.get(curVal) === need.get(curVal)) {
        valid++;
      }
    }

    while (valid === need.size) {
      // 要找的字符都存在了
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
        end = right;
      }
      // d 是将移出窗口的字符
      const d = s[left];
      // 缩小窗口
      left++;
      // 进行窗口内数据的一系列更新
      if (need.has(d)) {
        if (curFindStrMap.get(d) === need.get(d)) {
          valid--;
        }
        curFindStrMap.set(d, curFindStrMap.get(d)! - 1);
      }
    }
  }
  return minLen === Infinity ? "" : s.substring(start, end);
}
console.log(minWindow("aa", "aa"));
// @lc code=end
