import net from 'net'
const server = net.createServer(socket => {
    socket.on("data", data=> {
        console.log(data.toString())
        socket.write("Enviar Mensaje")
    })
})

server.on("error", ()=> {
    console.log("Se ha producido un error en el servidor");
})

server.listen(
    {
        host: 'localhost',
        port: 8000,
        exclusive: true

    },
    () => console.log(`Iniciando Servidor en ${server.address()}`)
)
