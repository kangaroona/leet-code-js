const twoSum = (inputArr:number[], target:number):number[] => {
  const len = inputArr.length;
  const outputArr = [];
  const dataMap = new Map();
  if (len < 2) {
    return [];
  }
  for (let i = 0; i < len; i++) {
    let needItem = target - inputArr[i];
    if (dataMap.has(needItem)) {
      outputArr.push(dataMap.get(needItem), i);
    }
    dataMap.set(inputArr[i], i);
  }
  return outputArr;
};
console.log(twoSum([2, 3, 4], 6));
