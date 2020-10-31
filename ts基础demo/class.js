/**
 * 类Class：定义了一切事物的抽象特点
 * 对象Object：类的实例
 * 面向对象OOP三大特性：封装、继承、多态
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    /**
     * 静态方法，无需实例化即可调用
     */
    Animal.isAnimal = function (a) {
        return a instanceof Animal;
    };
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    /**
     * 静态属性，无需实例化即可调用
     */
    Animal.categoies = ['mammal', 'bird'];
    return Animal;
}());
// 调用静态属性
console.log(Animal.categoies);
//实例化
var snake = new Animal('lily');
console.log(snake.run());
snake.name = 'lucy';
console.log(snake.name);
//调用静态方法
console.log(Animal.isAnimal(snake));
//继承
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return this.name + " is barking";
    };
    return Dog;
}(Animal));
var xiaobao = new Dog('xiaobao');
console.log(xiaobao.run());
console.log(xiaobao.bark());
//方法重写
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.run = function () {
        return 'Meow, ' + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var maomao = new Cat('maomoa');
console.log(maomao.run());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function () { };
    return Car;
}());
var Cellphone = /** @class */ (function () {
    function Cellphone() {
    }
    Cellphone.prototype.switchRadio = function () { };
    Cellphone.prototype.checkBatteryStatus = function () { };
    return Cellphone;
}());
var Cellphone2 = /** @class */ (function () {
    function Cellphone2() {
    }
    Cellphone2.prototype.switchRadio = function () { };
    Cellphone2.prototype.checkBatteryStatus = function () { };
    return Cellphone2;
}());
