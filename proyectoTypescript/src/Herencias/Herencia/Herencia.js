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
var Person = /** @class */ (function () {
    function Person(gender) {
        this.gender = gender;
    }
    Person.prototype.sayHello = function () {
        console.log("Hola");
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(gender, idiomas) {
        var _this = _super.call(this) || this;
        _this.idiomas = idiomas;
        return _this;
    }
    return Developer;
}(Person));
var persona = new Person("male");
var programador = new Developer("male", ["Es", "En"]);
console.log(programador.gender + " y " + programador.idiomas);
