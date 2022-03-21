"use strict";
/*
   Con = 1 especificamos un parametro por defecto
   Con | convertimos un parametro a opcional
   Con ? no sera un parametro obligatorio
*/
exports.__esModule = true;
function add(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
function add1(a, b) {
    return a + b;
}
function add2(a, b) {
    return a + b;
}
var result = add(2, 1);
console.log("El resultado es " + result);
