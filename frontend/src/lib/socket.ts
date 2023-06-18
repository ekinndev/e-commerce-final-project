import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.NODE_ENV === 'production'
    ? 'ws://e-commerce-final-be-penwtklslq-ew.a.run.app/draw'
    : 'ws://localhost:3000/draw';

export const socket = io(URL);
