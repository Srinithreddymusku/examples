function getCustomerInfo(name:string, age:number, ...hobbies:string[]){
    console.log(`Name: ${name} and Age: ${age}`)
    console.log(`Hobbies are: ${hobbies}`)
}
//getCustomerInfo('sri', 21)
getCustomerInfo('sri', 21, 'Playing cricket','watchingTV')