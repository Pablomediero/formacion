/* Function: Tipo que valida una function */

let combineValues: Function

function add(a: number, b: number){
    return a + b
}

function sayHello(){
    console.log("Hola")
}

let user = 'Bob'

if(user === 'Pep'){
    combineValues = add
}else {
    combineValues = sayHello
}

// No es boolean, error
// combineValues = true
combineValues(1, 2)