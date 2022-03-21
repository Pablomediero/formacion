/* 
   Con = 1 especificamos un parametro por defecto
   Con | convertimos un parametro a opcional 
   Con ? no sera un parametro obligatorio 
*/

export {}

function add(a: number, b: number = 1): number{
    return a+b;
}

function add1(a: number, b: number | undefined): number{
    return a+b;
}

function add2(a: number, b?: number): number{
    return a+b;
}

const result = add(2,1)
console.log("El resultado es "+result)