import { Server } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';

let socketServer: any = null;
let users: { id: string; name: string }[] = [];

const socketConnection = (server: Server) => {
    if (socketServer) return socketServer;

    socketServer = new SocketServer(server, {
        cors: {
            origin:
                process.env.NODE_ENV === 'development'
                    ? 'http://localhost:3001'
                    : 'https://e-commerce-final-penwtklslq-ew.a.run.app',
        },
    });

    socketServer.of('/draw').on('connection', (socket: Socket) => {
        socket.emit('hello', 'world');

        socket.on('joinRoom', ({ name }) => {
            socket.join('draw');
            users.push({ id: new Date().getMilliseconds().toString(), name });
            socket.emit('joinedUser', `Welcome ${name} to the draw room`);
            socketServer.of('/draw').to('draw').emit('userList', users);
        });

        socket.on('draw', data => {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            socketServer.of('/draw').to('draw').emit('drawedUser', randomUser);
        });
        socket.on('clear', () => {
            users = [];
            socketServer.of('/draw').to('draw').emit('userList', users);
        });
        socket.on('getUserList', () => {
            socket.emit('userList', users);
        });
    });

    return socketServer;
};

module.exports = socketConnection;

export default socketConnection;
