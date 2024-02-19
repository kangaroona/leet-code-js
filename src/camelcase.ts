const inputObject = {
  'my-key': 'value',
  'nested-object': {
    'another-key': 'anotherValue',
  },
  'another-key': 'moreValue',
};
function toCamelCase(str: string): string {
  const regx = /([-_][a-z])/g;
  return str.replace(regx, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
}
function toSnakeCase(str: string): string {
  return str.replace(/([A-Z])/g, (match) => {
    return '-' + match.toLowerCase();
  });
}
function converKey(obj: any, covertFn: (k: string) => string) {
  const keys: string[] = Object.keys(obj);
  return keys.reduce((acc: any, key: string) => {
    const newKey = covertFn(key);
    if (typeof obj[key] === 'string') {
      acc[newKey] = obj[key];
    }
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      acc[newKey] = converKey(obj[key], covertFn);
    }
    return acc;
  }, {});
}
// function chunk(arr: any[], size: number): any[][] {
//   const res: any[] = [];
//   let count: number = -1;
//   arr.map((item: any, idx) => {
//     if (idx % size == 0) {
//       const curArr = [item];
//       res.push(curArr);
//       count++;
//     } else {
//       res[count].push(item);
//     }
//   });
//   return res;
// }
function chunk(arr: any[], size: number): any[][] {
  return arr.reduce((acc, cur, curIdx) => {
    if (curIdx % size == 0) {
      acc.push([cur]);
    } else {
      const curKey: number = Math.floor(curIdx / size);
      acc[curKey].push(cur);
    }
    return acc;
  }, []);
}
console.log(chunk(['a', 'b', 'c', 'd'], 2));
const camelObj = converKey(inputObject, toCamelCase);
console.log('camelObj', camelObj);
console.log('kebe', converKey(camelObj, toSnakeCase));
