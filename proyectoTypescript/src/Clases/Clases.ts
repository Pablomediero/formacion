/* Tipos de Atributo */

// PUBLICO

// class Person{
//     gender:string
//     constructor(gender?: string){
//         this.gender = gender

//     }
//     sayHello() {
//         console.log("Hola")
//     }   
// }

// const persona = new Person("Masculino")
// const persona1 = new Person()
// console.log("Genero: "+persona.gender)
// // Modificar atrib
// persona.gender = "Fem"
// console.log("Genero: "+persona.gender)

// PRIVADO

// class Person{
//     private gender:string
//     constructor(gender?: string){
//         this.gender = gender

//     }
//     sayHello() {
//         console.log("Hola")
//     }   
//     private getGender(): string{
//         return this.gender
//     }

//     private setGender(gender: string): any{
//         this.gender = gender
//     }
// }

// const persona = new Person()
// // console.log(persona.getGender())



// PROTECTED

class Person{
    protected gender:string
    static age = 20
    public readonly activities: string[] = ["Frontenis","Piraguismo","Futbol"]

    constructor(gender?: string){
        this.gender = gender

    }
    static sayHello() {
        console.log("Hola")
    }   
    getGender(): string{
        return this.gender
    }

    setGender(gender: string): any{
        this.gender = gender
    }
}

const persona = new Person("Male")
console.log("Genero: "+persona.getGender())
Person.sayHello()
console.log("Edad: "+Person.age)
console.log(persona.activities)