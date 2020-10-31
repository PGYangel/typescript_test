/**
 * interface接口的作用
 * 1.对对象的形状（shape）进行描述
 * 2.对类（class）进行抽象
 * 3.Duck Typing（鸭子类型）
 */
interface IPerson {
    readonly id: number; // 在前面加readonly定义只读属性
    name: string;
    age?: number; // 属性后面加？为可选属性，最终定义可有可无。
}

let petter: IPerson = {
    id: 1234, //只读属性只能在定义时赋值，后面不能修改
    name: 'petter',
}