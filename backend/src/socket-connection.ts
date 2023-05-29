import { Server } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';

let socketServer: any = null;

module.exports = (server: Server) => {
    if (socketServer) return socketServer;

    socketServer = new SocketServer(server, {
        cors: {
            origin:
                process.env.NODE_ENV === 'development'
                    ? 'http://localhost:3001'
                    : 'https://e-commerce-final-penwtklslq-ew.a.run.app',
        },
    });

    socketServer.on('connection', (socket: Socket) => {
        console.log('Socket connected: ', socket.id);
    });

    return socketServer;
};
