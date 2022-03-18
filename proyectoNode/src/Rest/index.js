import express from 'express'
import config from './config'
import router from './router'

let _server
const server = {
    start() {
        const app = express()

        config(app)
        router(app)

        // RUTAS
        app.get('/', (req, res, next) => {
            res 
                .status(200)
                .json({ data: 'metodo get'})
        })

        app.post('/', (req, res, next) => {
            res 
                .status(201)
                .json({ data: 'metodo post'})
        })

        app.put('/', (req, res, next) => {
            res 
                .status(201)
                .json({ data: 'metodo put'})
        })

        app.delete('/', (req, res, next) => {
            res 
                .status(200)
                .json({ data: 'metodo delete'})
        })

        _server = app.listen('9000', () => {
            if(process.env.NODE_ENV !== 'test'){
                console.log("Servidor Iniciado http://localhost:9000")
            }
        })
    },
    close(){
        _server.close()
    }
}

export default server
if(!module.parent){
    server.start()
}