class Person{
    name:string;
    designation:string;
    constructor(name:string, designation:string){
        this.name = name;
        this.designation=designation;
    }
    getInfo(){
        console.log(`Name:${this.name} and Designation:${this.designation}`)
    }
    getInfo2(){
        console.log('parent getinfo2')
    }
    learn(){
        console.log('Person learn methdod implmentation...')
    }
  }
  
  class Programmer extends Person{
      employer:string;
      constructor(name,designation,employer){
          super(name,designation)
          this.employer = employer;
      }
      coding(){
          console.log('Programmer special method implmentation...')
      }
      getInfo(){
          console.log(`Name:${this.name} and Designation:${this.designation} and CompanyName:${this.employer}`)
      }
      parentGetInfo(){
          console.log('chiru child')
          super.getInfo()
          super.getInfo2()
      }
  }
  
  let programmer = new Programmer("sri","SE", "VAM")
  console.log(programmer.name, programmer.designation,programmer.employer)
  //consol
  