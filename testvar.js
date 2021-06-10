function testVar() {
    var a = 30;
    if (true) {
        var a_1 = 50;
        console.log(a_1); //50
    }
    console.log(a); //30
}
testVar();
