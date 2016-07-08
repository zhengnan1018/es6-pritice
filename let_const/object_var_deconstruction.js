//对象变量的解构赋值
var {love, duty} = {love: 'aaa', duty: 'bbb'}
console.log(love); //'aaa'
console.log(duty); //'bbb'

//TODO 对象的解构赋值和数组有一个显著的不同 数组元素是按照次序排列的，变量的取值由位置决定
// 而变量属性没有次序，变量必须与属性同名，才能取到正确的值

//TODO 对象的解构赋值可以很方便的将现有对象的方法赋值到某个变量
let {log, sin, cos} = Math
// log = () => {
//   console.log('I am the log method');
// }
// sin = () => {
//   console.log('I am the sin method');
// }
// cos = () => {
//   console.log('I am the cos method');
// }
console.log(Math.log); //[Function: log]
console.log(Math.sin); //[Function: sin]
console.log(Math.cos); //[Function: cos]

//TODO 字符串也可以解构赋值， 此时字符串被转成一个类似数组的对象
const [a, b, c, d, e] = 'hello'
console.log(a + '' + b + '' + c + '' + d + '' + e); //hello

//TODO 类似数组的对象都有 length 属性，还可以对这个属性解构赋值
let {length: len} = 'hello'
console.log(len); //5

//TODO 函数参数的解构可以使用默认值
let move = ({x = 0, y = 0} = {}) => { //位x, y 设定默认值 === x = 0 y = 0
  return [x, y]
}
console.log(move({x: 3, y: 4})); // [3, 4]
console.log(move({x: 3})); // [3, 0]
console.log(move({})); // [0, 0]
console.log(move()); //[0, 0]

let move2 = ({x, y} = {x: 0, y: 0}) => { // 为函数move2 的参数设定默认值 === {0, 0}
  return [x, y]
}
console.log(move2({x: 3, y: 4})); // [3, 4]
console.log(move2({x: 3})); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]
