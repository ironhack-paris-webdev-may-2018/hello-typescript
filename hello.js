var Greeting = /** @class */ (function () {
    function Greeting(message) {
        this.message = message;
    }
    Greeting.prototype.sayHi = function () {
        return "Hello, " + this.message + "!";
    };
    return Greeting;
}());
// ----------
var myGreeter = new Greeting("Donald");
var otherGreeter = new Greeting("Céline");
console.log(myGreeter.message);
console.log(otherGreeter.sayHi());
console.log(myGreeter.sayHi());
