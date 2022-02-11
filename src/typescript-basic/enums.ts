enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 0
//反向映射
console.log(Direction[0]); // Up

//自动递增
enum Direction1 {
  Up = 10,
  Down, //11
  Left, //12
  Right, //13
}

enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
const value = 'UP';
if (value === Direction2.Up) {
  console.log('go up!');
}

// 常量枚举
// 不会把枚举Direction3编译成JavaScript代码
const enum Direction3 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
const value1 = 'UP';
if (value === Direction3.Up) {
  console.log('go up!');
}
