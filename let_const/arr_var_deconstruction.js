// 数组变量解构
let [a, b, c] = [3, 4, 5]
console.log(a + '' + b + '' + c);
// 345

let [head, ...tail] = [1, 2, 3, 4]
console.log(head);
console.log(tail);
//1
//[2, 3, 4]

//解构赋值允许指定默认值
var [foo = true] = []
console.log(foo);
//true

var [x, y = 'b'] = ['a']
console.log(x + '|' + y);
//a|b

[x, y = 'b'] = ['a', undefined]
console.log(x + '|' + y);
//a|b
//es6 内部采用严格等于（===）判断赋值是否等于 undefined , 如果不严格等于，则默认值不会生效

[x, y = 'b'] = ['a', null]
console.log(x + '|' + y);
//a|null
