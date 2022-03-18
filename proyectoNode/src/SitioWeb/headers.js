import http, { request } from 'http'
const server = http.createServer((request, response) => {
    /* response.writeHead(200, {'Content-type':"text/html; charset=UTF-8"}) */
    /* response.writeHead(400, {'Content-type':"aplication/json;"}) */
    response.setHeader("Content-type","aplication/json")
    response.statusCode = 301
    
    
    if(request.method === 'GET'){
        response.write("<h2>METODO NO PERMITIDO</H2>")
        return response.end()
    }
    response.write("<h1>Node</h1>");
    response.end()
})


server.listen(8000,'localhost',err => {
    if(err){
        return console.log("Error: "+err)
    }
    console.log("Server iniciado: http://localhost:8000");
})