/** 原始数据类型 */
var isDone = false;
var age = 20;
var binaryNumber = 15;
var firstName = '姓';
var message = "Hello\uFF0C" + firstName + "\uFF0Cage is " + age;
var u = undefined;
var n = null;
var num = undefined;
/** any类型 */
var notSure = 4;
notSure = 'string';
notSure = false;
notSure.myName;
notSure.getName();
/**联合类型 */
var numberOrString = 'string';
numberOrString = 20;
/**数组 */
var arrOfNumbers = [1, 2, 3, 4]; //数字数组
arrOfNumbers.push(5);
/**类数组 */
function arrTest() {
    console.log(arguments); //arguments就是类数组，有数组一定的属性，但是不能赋值为数组
}
/**元组 */
var user = ['string', 123];
