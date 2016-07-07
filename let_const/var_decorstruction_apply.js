//变量解构赋值的用途
// TODO 交换变量的值

//TODO 从函数返回多个值
let example = () => { //返回一个数组
  return [1, 2, 3]
}

let [a, b, c] = example()
console.log(a); // 1

let example_obj = () => { //返回一个对象
  return {
    love: 1,
    duty: 2
  }
}
let {love, duty} = example_obj()
console.log(love); // 1

//TODO 函数参数的定义

//TODO 提取 JSON 数据
let jsonData = {
  id: 1018,
  gender: 'female',
  data: {lesson: 'nodeJS', type: 'es6'}
}
let {id, gender, data: information} = jsonData
console.log(id, gender, information); // 1018 'female' { lesson: 'nodeJS', type: 'es6' }

// TODO 遍历 Map 结构
let map = new Map()
map.set('name', 'zhengnan')
map.set('gender', 'female')
for (let [key, value] of map) {
  console.log(key + ' is ' + value);
}
// name is zhengnan
// gender is female
