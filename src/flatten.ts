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
