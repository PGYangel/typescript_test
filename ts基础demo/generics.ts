// 泛型
function echo<T>(arg: T): T {
    return arg;
}
// const result: string = echo(123);因为返回的是number所以定义string会报错
const result: number = echo(123)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
    length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

const str = echoWithLength('str')

const obj = echoWithLength({ length: 10 })
const arr2 = echoWithLength([1, 2, 3])

class Queue<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().toFixed())

interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = { key: 1, value: 'str' }
let kp2: KeyPair<string, number> = { key: '1', value: 1 }

let arr: number[] = [1, 2, 3]
let arrT: Array<number> = [1, 2, 3]

interface IPlus<T> {
    (a: T, b: T): T
}
function plus(a: number, b: number): number {
    return a + b
}
function connect(a: string, b: string): string {
    return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect
