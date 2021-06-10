interface Iperson{
    firstName:string;
    lastName:string;
    getMessage():string
}
class Customer implements Iperson{
    firstName:string = 'sri';
    lastName:string ='nith';
    getMessage():string{
        return `Welcome ${this.firstName} ${this.lastName}`
    }
}
let customer = new Customer();
console.log(customer.firstName, customer.lastName)
console.log(customer.getMessage())
