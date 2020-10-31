/**
 * 类Class：定义了一切事物的抽象特点
 * 对象Object：类的实例
 * 面向对象OOP三大特性：封装、继承、多态
 */

class Animal {
    /**
     * 修饰符：
     * public 公有的
     * private 私有的，只能在本类中访问，子类无法访问
     * protected 受保护的，只有本类和子类可以访问，其他类不能访问
     * readonly 只读
     */
    public name: string;
    /**
     * 静态属性，无需实例化即可调用
     */
    static categoies: string[] = ['mammal', 'bird'];
    /**
     * 静态方法，无需实例化即可调用
     */
    static isAnimal(a) {
        return a instanceof Animal
    }
    constructor(name: string) {
        this.name = name;
    }
    run() {
        return `${this.name} is running`
    }

}
// 调用静态属性
console.log(
    Animal.categoies
)

//实例化
const snake = new Animal('lily');
console.log(snake.run())
snake.name = 'lucy'
console.log(snake.name)
//调用静态方法
console.log(Animal.isAnimal(snake))

//继承
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}
const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

//方法重写
class Cat extends Animal {
    constructor(name) {
        super(name)
        console.log(this.name)
    }
    run() {
        return 'Meow, ' + super.run()
    }
}

const maomao = new Cat('maomoa')
console.log(maomao.run())

/**
 * 使用接口提取不同类共同的方法
 */
interface Radio {
    switchRadio(): void;
}
interface Battery {
    checkBatteryStatus(): void;
}
// 接口可以继承接口
interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void;
}

class Car implements Radio {
    switchRadio() { }
}

class Cellphone implements Radio, Battery {
    switchRadio() { }
    checkBatteryStatus() { }
}

class Cellphone2 implements RadioWithBattery {
    switchRadio() { }
    checkBatteryStatus() { }
}
