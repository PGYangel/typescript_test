/* typescript的基本类型 */

// any 任意类型 声明any的变量可以赋予任意类型的值
const myany: any = "asdfasdf";

// number 数字类型 双精度64位浮点值，它可以用来表示整数和分数。
let binaryNum: number = 0b1010; //二进制
let octalNum: number = 0o744; //八进制
let decNum: number = 6; //十进制
let hexNum: number = 0xf00d; //十六进制

// boolean 布尔类型 表达逻辑值：true和false
let myboolean: boolean = true;

// 数组类型
let arr1: number[] = [1, 2]; //在元素类型后面加上[]
let arr2: Array<number> = [1, 2]; //使用数组泛型

// 元组 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
let myTuple: [string, number];
myTuple = ["啦啦啦", 123]; //运行正常
// myTuple = [1, "啦啦啦"]; //报错
console.log(myTuple[0]); //输出 啦啦啦

// enum 枚举 枚举类型用于定义数值集合
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;
console.log(c); //输出 2

// void void 用于标识方法返回值的类型，表示该方法没有返回值
function hell(): void {
  alert("啦啦");
}

// null null 表示对象值缺失

// undefined undefined 用于初始化变量为一个未定义的值

// never never 是其他类型（包括 null 和 undefined）的子类型，代表从不会出现的值
