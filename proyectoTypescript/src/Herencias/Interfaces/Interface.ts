interface IDPerson {
    gender: string
    sayHi: () => void
}

class Person implements IDPerson{
    public gender:string
    
    constructor(gender: string){
        this.gender = gender

    }
    
   sayHi(): void {
       console.log("Hola")
   }
}


