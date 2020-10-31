/**
 * 枚举
 */

/**
 * 数字枚举
 */
enum Direction {
    Up,//0
    Down,//1
    Left,//2
    Right,//3
}
console.log(Direction.Up)
console.log(Direction[0])

enum Direction2 {
    Up = 10,//10
    Down,//11
    Left,//12
    Right,//13
}
console.log(Direction2.Up)
console.log(Direction2[10])

//字符串枚举
enum Direction3 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}
const value = 'UP'
if (value === Direction3.Up) {
    console.log('is up')
}

//常量枚举，可以提升性能
const enum Direction4 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}
const value2 = 'UP'
if (value2 === Direction4.Up) {
    console.log('is up')
}