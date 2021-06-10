function testVar(){
    let a = 30;
    if(true){
        let a = 50;
        console.log(a); //50
    }
    console.log(a); //30
}
testVar()