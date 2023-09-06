/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function palindrome(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length && s[left] == s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}

function longestPalindromeStr(s: string): string {
  let s1,
    s2,
    res: string = "";

  for (let i = 0; i < s.length; i++) {
    s1 = palindrome(s, i, i);
    s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
}
// @lc code=end
