import { Server } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';

let socketServer: any = null;

module.exports = (server: Server) => {
    if (socketServer) return socketServer;

    socketServer = new SocketServer(server);

    socketServer.on('connection', (socket: Socket) => {
        console.log('Socket connected: ', socket.id);
    });

    return socketServer;
};
