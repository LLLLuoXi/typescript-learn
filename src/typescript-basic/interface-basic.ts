interface IPerson {
  readonly id: number;
  name: string;
  age?: number;
}

let LLLLuoxi: IPerson = {
  id: 1,
  name: 'Luoxi',
};

// 泛型约束
interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 1, value: 'string' };
let kp2: KeyPair<string, number> = { key: 'string', value: 1 };
