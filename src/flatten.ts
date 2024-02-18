const arr1: any[] = [1, [2, [3, 4], 5], 6];

function flatten(inputArr: any[]) {
  let res: any[] = [];
  inputArr.forEach((element) => {
    if (Array.isArray(element)) {
      res = res.concat(flatten(element));
    } else {
      res.push(element);
    }
  });
  return res;
}
console.log(flatten(arr1));
/**
 * @description 用最精炼的代码实现数组非零最小值 index
 * @param {array} arr 数组
 * @returns {number} index 索引
 */
function getIndex(arr: number[]): number {
  let index = -1;
  const minVal = arr.reduce((cur, pre) => {
    return cur <= 0 || pre <= 0 ? Math.max(cur, pre) : cur > pre ? pre : cur;
  }, -1);
  index = arr.findIndex((item) => item == minVal && minVal > 0);
  return index;
}
console.log(getIndex([10, 21, 0, -7, 35, 7, 9, 23, 18]));
