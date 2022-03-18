import http, { request } from 'http'
import fs from 'fs'

const file = './src/index.html'

const server = http.createServer((request, response) => {

    response.writeHead(200, {'Content-type':"text/html; charset=UTF-8"})
   
    fs.readFile(file, (err, content) => {
        if(err){
            return console.log("Error: "+err)
        }
        response.write({key: "valor"})
        response.end()
    })
})


server.listen(8000,'localhost',err => {
    if(err){
        return console.log("Error: "+err)
    }
    console.log("Server iniciado: http://localhost:8000");
})