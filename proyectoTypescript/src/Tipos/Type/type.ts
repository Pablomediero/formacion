/* TypeName: Nos permite crear nuestro propio tipo, no puede tener nombre con palabra reservada */

type Persona = { 
    name: string;
    edad: number;
    altura?: number; // Atr?: Atributo Opcional
}

const persona1: Persona = {
    name: 'Pablo',
    edad: 20,
    altura: 170
}

const persona2: Persona = {
    name: 'Sergio',
    edad: 22
}

const persona3: Persona = {
    name: 'Antonio',
    edad: 24
}

