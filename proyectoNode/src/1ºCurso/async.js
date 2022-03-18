// ASINCRONIA

import fs from 'fs'
const file = process.argv[2]

export default files => {
console.log("Asincronia")

    fs.readFile(file, (err, content) => {

        if(err){
            return console.log(err);
        }
    
        const lines = content.toString().split('\n');
        let aux = 0;
        for(let linea of lines){
            aux++
            console.log("Linea "+aux+": "+linea.length);
        }
    
        console.log("Lineas Total: "+lines.length);
    
    })
}


