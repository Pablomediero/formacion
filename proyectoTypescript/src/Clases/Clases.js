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
var Person = /** @class */ (function () {
    function Person(gender) {
        this.activities = ["Frontenis", "Piraguismo", "Futbol"];
        this.gender = gender;
    }
    Person.sayHello = function () {
        console.log("Hola");
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Person.age = 20;
    return Person;
}());
var persona = new Person("Male");
console.log("Genero: " + persona.getGender());
Person.sayHello();
console.log("Edad: " + Person.age);
console.log(persona.activities);
