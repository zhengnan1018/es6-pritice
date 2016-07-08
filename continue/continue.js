//TODO continue
// 与 break 语句的区别在于， continue 并不会终止循环的迭代

// 在 while 循环中，控制流 跳转回 条件判断
var i = 0
var n = 0
let foo = () => {
  while (i < 5) {
    i ++
    if (i === 3) {
      continue
    }
    n += i
    console.log(n);
  }
}

foo()
//1 3 7 12

// 在 for 循环中， 控制流跳转到更新语句
var m = 0
let baz = () => {
  for (let j = 0; j < 5; j ++) {
    if (j === 3) continue
    m += j
    console.log(m);
  }
}
baz()
// 0 1 3 7
