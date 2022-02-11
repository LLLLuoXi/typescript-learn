class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
// queue.push('str');
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());

let arrTwo: Array<number> = [1, 2, 3, 4];
