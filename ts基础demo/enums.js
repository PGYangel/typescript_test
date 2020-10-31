/**
 * 枚举
 */
/**
 * 数字枚举
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[0]);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 10] = "Up";
    Direction2[Direction2["Down"] = 11] = "Down";
    Direction2[Direction2["Left"] = 12] = "Left";
    Direction2[Direction2["Right"] = 13] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
console.log(Direction2[10]);
