function getCustomerInfo(name, age) {
    var hobbies = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        hobbies[_i - 2] = arguments[_i];
    }
    console.log("Name: " + name + " and Age: " + age);
    console.log("Hobbies are: " + hobbies);
}
//getCustomerInfo('sri', 21)
getCustomerInfo('sri', 21, 'Playing cricket', 'watchingTV');
