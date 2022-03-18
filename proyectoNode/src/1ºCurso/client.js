import net from 'net'

const socket = net.Socket()
socket.connect(8000, 'localhost')

socket.write("Cliente: Hola")

socket.on('data', data => console.log("Server:"+data.toString()))