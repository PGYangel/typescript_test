/* typescript的基本类型 */
// any 任意类型 声明any的变量可以赋予任意类型的值
var myany = "asdfasdf";
// number 数字类型 双精度64位浮点值，它可以用来表示整数和分数。
var binaryNum = 10; //二进制
var octalNum = 484; //八进制
var decNum = 6; //十进制
var hexNum = 0xf00d; //十六进制
// boolean 布尔类型 表达逻辑值：true和false
var myboolean = true;
// 数组类型
var arr1 = [1, 2]; //在元素类型后面加上[]
var arr2 = [1, 2]; //使用数组泛型
// 元组 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
var myTuple;
myTuple = ["啦啦啦", 123]; //运行正常
// myTuple = [1, "啦啦啦"]; //报错
console.log(myTuple[0]); //输出 啦啦啦
// enum 枚举 枚举类型用于定义数值集合
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c); //输出 2
