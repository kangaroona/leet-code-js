const combine = function (nums: number[], k: number): number[][] {
  const arr: number[] = [];
  const ans: number[][] = [];
  function helper(index: number) {
    if (arr.length == k) {
      ans.push([...arr]);
      return;
    }
    for (let i = index; i < nums.length; i++) {
      arr.push(nums[i]);
      helper(i + 1);
      arr.pop();
    }
  }
  helper(0);
  return ans;
};
console.log(combine([1, 2, 3, 4, 5], 3));
