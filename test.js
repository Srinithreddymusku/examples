var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.empName = name;
        this.empAge = age;
    }
    Employee.prototype.getEmployeInfo = function () {
        return "EmployeeName:" + this.empName + " and EmployeeAge:" + this.empAge;
    };
    return Employee;
}());
var emp1 = new Employee('ram', 20);
var emp2 = new Employee('lakshman', 19);
console.log(emp1.empName, emp1.empAge);
console.log(emp2.empName, emp2.empAge);
console.log(emp1.getEmployeInfo());
console.log(emp2.getEmployeInfo());
