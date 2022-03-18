import { read } from 'fs'
import readLine from 'readline'
import async from './async'
import events from './events'

const file = process.argv[2]

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(
    `Menu Principal 
    1. Asincrona
    2. Eventos
    Introduce opción`,
    value => {
        console.log(`Opcion Seleccionada: ${value}`)
        switch(value){
            case "1": 
                async(file);
                break;
            case "2":
                events(file);
                break;
        }

        rl.close()
    }
)