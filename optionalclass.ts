class Calculator{
    add(a:number, b?:number, c?:number){
      console.log(a)
      console.log(b)
      console.log(c)
    }
  }
  let calc = new Calculator();
  calc.add(2)
  calc.add(2,3)
  calc.add(2,3,4)