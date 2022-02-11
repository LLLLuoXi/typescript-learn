function echo<T>(arg: T): T {
  return arg;
}

const str: string = 'string';
const result = echo(str);

function swap<T, U>(tuple): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap(['string', 123]);

// 泛型约束
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
const arrs = echoWithArr([1, 2, 3]);

//传入的参数要有length属性
interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const strLength = echoWithLength('str');
const obj = echoWithLength({ length: 10 });
const arr2 = echoWithLength([1, 2, 3]);
