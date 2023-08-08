
import express from "express"
import { createServer } from "http"
import path from "path"
import ip from "ip"
import { Socket, Server } from "socket.io";

const server = express()
const httpServer = createServer(server)
const io = new Server(httpServer);

const PORT: string = process.env.PORT || "3000"
const MODE: string = process.env.MODE || "development"

server.use(express.static('./build'))
server.use(express.json())

io.on('connection', (socket: Socket) => {
    console.log('User connected');
    socket.emit("set-mode", MODE)
});

server.get('/*', (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'))
})

httpServer.on("error", (err: Error): void => {
    throw err
})

httpServer.listen(PORT, () => {
    console.log(`Server setting mode "${MODE}"`)
    console.log(`Custom server avaliable on`)
    console.log(`Localhost => http://localhost:${PORT}`)
    console.log(`Globalhost => http://${ip.address()}:${PORT}`)
})