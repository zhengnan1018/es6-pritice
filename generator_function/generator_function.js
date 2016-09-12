//TODO 生成器函数
// 生成器是一种可以从中退出并在之后可以重新进入的函数。
// 生成器的环境（绑定的变量）会在每次执行后保存，下次进入时可以继续使用

// 调用一个生成器函数并不马上执行它的主体, 而是返回一个生成器函数的迭代器 （iterator）对象
// 当这个迭代器的 next() 方法被调用时，生成器函数会被执行直至第一个 yield 表达式， 该表达式定义了迭代器返回的值
// next() 方法返回一个对象，该对象有一个 value 属性， 表示产出的值，还以一个 done 属性，表示生成器时候已经产出最后的值
function* idMaker() {
  var index = 0
  while (index < 3) {
    yield index ++
  }
}

var gen = idMaker()
console.log(gen.next().value); // 0
console.log(gen.next().done); //false
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
console.log(gen.next().done); // true

function* anotherGenerator(i) {
  yield i + 1
  yield i + 2
  yield i + 3
}

function* generator(i) {
  yield i
  yield* anotherGenerator(i)
  yield i + 10
}

var gen2 = generator(10)
console.log(gen2.next().value); // 10
console.log(gen2.next().value); // 11
console.log(gen2.next().value); // 12
console.log(gen2.next().value); // 13
console.log(gen2.next().value); // 20
console.log(gen2.next().done); // true
