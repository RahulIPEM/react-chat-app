const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

module.exports = (io) => {
    io.on('connection', socket => {
        socket.on('join', ({ username, room }, callback) => {
            const { error, user } = addUser({ id: socket.id, username, room });

            if (error){
                return callback(error);
            }

            socket.emit('message', {user: `${user.room}: chat-bot`, text: `${user.username}, welcome to ${user.room} room.`});
            socket.broadcast.to(user.room).emit('message', {user:`${user.room}: chat-bot`, text:`${user.username} has joined.`});

            socket.join(user.room);
            
            callback();
        })

        socket.on('send_message', (message, callback) => {
            const user = getUser(socket.id);
            if(!user){
                callback({error: "You have been disconnected from chat room"});
            }
            io.to(user.room).emit('message', { user: user.username, text: message});
            callback();
        })

        socket.on('disconnect', () => {
            const user = removeUser(socket.id);

            if(user){
                io.to(user.room).emit('message', {user: `${user.room}: chat-bot`, text: `${user.username} has left.`});
            }
        })
    })
}