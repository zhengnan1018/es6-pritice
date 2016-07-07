//TODO 字符串的遍历器接口
for (let codePoint of 'liu') {
  console.log(codePoint);
}
// l
// i
// u

//TODO at() 方法 返回字符串给定位置的字符
let testString = 'liu peng'
console.log(testString.at(4)); // p

console.log(testString.includes('iu', 1)); // true
console.log(testString.startsWith('liu')); // true
console.log(testString.endsWith('liu')); // false
// 上面的三个函数都支持第二个参数 , 指定开始搜索的位置

//repeat(n) //TODO 将原字符串重复 n 次
console.log(testString.repeat(2)); //'liu pengliu peng'
console.log(testString.repeat(2.8)); //'liu pengliu peng' 如果是小数，会被取整
//console.log(testString.repeat(Infinity)); //RangeError: Invalid count value
//console.log(testString.repeat(-1)); //RangeError: Invalid count value
console.log(testString.repeat(-0.5)); //介于0~1 之间的小数 等同于0
console.log(testString.repeat(NaN)); //NaN 等同于0
