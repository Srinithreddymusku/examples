class Employee{
    empName:string;
    empAge:number;
    constructor(name:string, age:number){
        this.empName = name;
        this.empAge = age;
    }
    getEmployeInfo(){
        return `EmployeeName:${this.empName} and EmployeeAge:${this.empAge}`
    }
}
let emp1 = new Employee('ram', 20) 
let emp2 = new Employee('lakshman', 19) 

console.log(emp1.empName, emp1.empAge)
console.log(emp2.empName, emp2.empAge)
console.log(emp1.getEmployeInfo())
console.log(emp2.getEmployeInfo())
