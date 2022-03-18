/*  LEER FICHERO */

import fs from 'fs'
import readline from 'readline'

export default files => {
console.log("Eventos")

    const file = process.argv[2]
    let lines = 0
    
    const rl = readline.createInterface({
        input: fs.createReadStream(file),
        crlfDelay: Infinity
    })
    
    rl.on("close", () => {
        console.log(`Numero de lineas: ${lines}`)
    })
    
    rl.on('line', line => {
        ++lines
        console.log(`Numero de Caracteres por linea: ${line.length}`)
    })
}

