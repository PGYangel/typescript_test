// 函数声明
/**加个问号是可选参数,可选参数后面不能加确定参数所以z不能再xy前面 */
function add(x, y, z) {
    if (y === void 0) { y = 10; }
    if (typeof z === 'number') {
        return x + y + z;
    }
    return x + y;
}
var result = add(2, 3);
// 函数表达式
/**
const add =function(x: number, y: number = 10, z?: number): number {
    if (typeof z === 'number') {
        return x + y + z
    }
    return x + y
}
// 这里的=>不是ES6的箭头函数，是函数的返回类型
const add2:(x: number, y: number = 10, z?: number)=>number = add
 */ 
