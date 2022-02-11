// type alias
let sum: (x: number, y: number) => number;
const sumResult = sum(1, 2);

type PlusType = (x: number, y: number) => number;
let sum2: PlusType;
const sumResult2 = sum2(2, 3);

type StrOrNumber = string | number;
let result3: StrOrNumber = '123';
// let result3: StrOrNumber = 123

//字符串字面量 提供一系列常见的常量写法
const str: 'name' = 'name';
const number: 1 = 1;
type Direction = 'Up' | 'Down' | 'Left' | 'Right';
let toWhere: Direction = 'Left';

//交叉类型 用type扩展对象的一种方式
interface IName {
  name: string;
}

type IPerson = IName & { age: number };
let person: IPerson = { name: 'LLLLuoxi', age: 18 };
