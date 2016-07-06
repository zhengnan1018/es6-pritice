//let const 为块及作用域
let foo = () => {
  if (true) {
    let test = 1
  }
  // console.log(test);
}
foo()
// ReferenceError: test is not defined

//let const变量不可以重复申明
// let foo = 1
//Duplicate declaration "foo"

//const 用来定义常量，定义之后就必须立即赋值，尝试修改const 定义的变量值会报错
const num = 1
// num = 2
// "num" is read-only

//可以修改 const 定义的对象属性
const testobj = {}
testobj.aa = 'bb'
console.log(testobj.aa); //'bb'

//阻止对象属性被修改
let constantize = (obj) => {
  Object.freeze(obj)
  Object.keys(obj).forEach((key, value) => {
    typeof obj[key] === 'object' ? constantize(obj[key]) : null
  })
}

// constantize(testobj)
testobj.cc = 2
//TypeError: Can't add property cc, object is not extensible

// testobj = {a: 1}
// 'obj' is read-only
//但不可以重新定义对象

//可以给 const 定义的数组填充元素
const arr = []
arr[0] = 1
console.log(arr[0]); // 1

//跨模块常量
export const A = 1
export const B = 2
export const C = 3
// 常量引用见 importConst1.js ; importConst2.js
