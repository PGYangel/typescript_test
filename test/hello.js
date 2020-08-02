var hellow = "hello would";
console.log(hellow);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("啦啦啦");
    };
    return Site;
}());
var obj = new Site();
obj.name();
