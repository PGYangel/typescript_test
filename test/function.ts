// 定义函数
function fn1() {
  console.log("fn1");
}
fn1(); //调用函数

// 函数返回值，使用return实现
// 返回值类型必须与函数定义的返回类型一致
function fn2(): string {
  return "啦啦拉";
}

// 带参函数
// 如果定义了参数，则这些参数必须传入，否则会报错
function add(x: number, y: number): number {
  return x + y;
}

// 可选参数，可选参数使用？来标识，传参时可以不传
// 可选参数必须在必要参数后面定义
function fn3(firstName: string, lastName?: string): string {
  return firstName + lastName;
}

// 默认参数，在调用时不传入该参数会使用默认值
function fn4(x: number, y: number = 4): number {
  return x + y;
}

// 剩余参数，在我们不知道要传入多少个参数时，可以使用剩余参数来定义
// 剩余参数允许我们将一个不确定数量的参数作为一个数组传入
function fn5(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// 匿名函数，赋值给一个变量叫做函数表达式
var msg = function () {
  return "啦啦";
};
