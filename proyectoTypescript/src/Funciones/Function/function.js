/* Function: Tipo que valida una function */
var combineValues;
function add(a, b) {
    return a + b;
}
function sayHello() {
    console.log("Hola");
}
var user = 'Bob';
if (user === 'Pep') {
    combineValues = add;
}
else {
    combineValues = sayHello;
}
// No es boolean, error
// combineValues = true
combineValues(1, 2);
