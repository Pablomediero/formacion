/* Never: Especificamos al programador que el codigo lanza un error y el compilador no lo ejecutara */
function generarError(message) {
    throw new Error(message);
}
var res = generarError("Ha ocurrido un error");
console.log(res);
