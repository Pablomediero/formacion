class Person{
    public gender:string
    
    constructor(gender?: string){
        this.gender = gender

    }
    
    sayHello(){
        console.log("Hola")
    }
}

class Developer extends Person{
    public idiomas: string[]

    constructor(gender: string, idiomas:string[]){
        super()
        this.idiomas = idiomas
    }
}


const persona = new Person("male")
const programador = new Developer("male",["Es","En"])

console.log(programador.gender+" y "+programador.idiomas)