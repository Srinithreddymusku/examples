var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, designation) {
        this.name = name;
        this.designation = designation;
    }
    Person.prototype.getInfo = function () {
        console.log("Name:" + this.name + " and Designation:" + this.designation);
    };
    Person.prototype.getInfo2 = function () {
        console.log('parent getinfo2');
    };
    Person.prototype.learn = function () {
        console.log('Person learn methdod implmentation...');
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, designation, employer) {
        var _this = _super.call(this, name, designation) || this;
        _this.employer = employer;
        return _this;
    }
    Programmer.prototype.coding = function () {
        console.log('Programmer special method implmentation...');
    };
    Programmer.prototype.getInfo = function () {
        console.log("Name:" + this.name + " and Designation:" + this.designation + " and CompanyName:" + this.employer);
    };
    Programmer.prototype.parentGetInfo = function () {
        console.log('chiru child');
        _super.prototype.getInfo.call(this);
        _super.prototype.getInfo2.call(this);
    };
    return Programmer;
}(Person));
var programmer = new Programmer("sri", "SE", "VAM");
console.log(programmer.name, programmer.designation, programmer.employer);
//consol
