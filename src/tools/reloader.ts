import { Socket } from "socket.io-client";


const reloader = (socket: Socket) => {
    var MODE = "production"
    socket.on("set-mode", (message: string) => {
        MODE = message
        console.log(MODE)
    })
    socket.io.on("reconnect", () => {
        if (MODE === "development") location.reload()
    })
}

export default reloader