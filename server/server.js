const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.send('working');
});

app.use(
    cors({
        origin: '*'
    })
);

io.on('connection', (socket) => {
    socket.emit('me', socket.id);
    socket.on('joinRoom', (room) => {
        socket.join(room);
    });
    socket.on('disconnect', () => {
        socket.broadcast.emit('callEnded');
    });

    socket.on('callRoom', ({ room, signalData, from, name }) => {
        io.to(room).emit('callUser', { signal: signalData, from, name });
    });

    socket.on('callUser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit('callUser', { signal: signalData, from, name });
    });

    socket.on('answerCall', (data) => {
        io.to(data.to).emit('callAccepted', data.signal);
    });
});

server.listen(5000);
