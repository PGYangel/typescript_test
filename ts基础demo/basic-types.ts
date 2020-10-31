/** 原始数据类型 */
let isDone: boolean =false;

let age: number = 20;
let binaryNumber: number = 0b1111;

let firstName:string ='姓'
let message: string = `Hello，${firstName}，age is ${age}`

let u:undefined = undefined;
let n:null = null;

let num:number = undefined

/** any类型 */
let notSure: any =4;
notSure = 'string'
notSure = false

notSure.myName
notSure.getName()

/**联合类型 */
let numberOrString: number | string = 'string'
numberOrString = 20

/**数组 */
let arrOfNumbers: number[] = [1,2,3,4] //数字数组
arrOfNumbers.push(5)

/**类数组 */
function arrTest(){
    console.log(arguments);//arguments就是类数组，有数组一定的属性，但是不能赋值为数组
}

/**元组 */
let user: [string,number] = ['string',123]

