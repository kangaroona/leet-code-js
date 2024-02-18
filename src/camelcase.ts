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
const camelObj = converKey(inputObject, toCamelCase);
console.log('camelObj', camelObj);
console.log('kebe', converKey(camelObj, toSnakeCase));
