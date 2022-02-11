function add(x: number, y: number, z?: number): number {
  return x + y;
}

add(1, 2);

const add1 = (x: number, y: number, z?: number): number => {
  return x + y + z;
};

interface ISum {
  (x: number, y: number, z?: number): number;
}
// let add2: (x: number, y: number, z?: number) => number = add;
let add2: ISum = add;
