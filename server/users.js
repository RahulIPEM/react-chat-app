const users = [];

module.exports = {
    addUser({ id, username, room }) {
        /**
         * This helper function will be used to create user object and add it to the users array,
         * and to check if user is already exisiting in users or not.
         */
        username = username.trim().toLowerCase();
        room = room.trim().toLowerCase();

        // will return if there is any existing user in users array fullfilling the specified condition.
        if(!username || !room)
            return {error: 'Username and room are required.'};

        const existingUser = users.find((user) => user.room === room && user.username === username);

        // check if there is value in existingUser
        if (existingUser) {
            return { error: 'Username is already taken.' };
        }

        // else create user and push it to the users array
        const user = { id, username, room };
        users.push(user);

        // return user object
        return { user };
    },
    removeUser(id) {
        /**
         * This helper function will be used to remove the specific user from users array.
         */

        // finding the index of user in users array. This will return the index of user if user exist
        // in users array else it will return -1.
        const index = users.findIndex((user) => user.id === id);

        if (index !== -1) {
            // this will remove the user from users array. and will return that user.
            return users.splice(index, 1)[0];
        }
    },
    getUser(id) {
        /**
         * This method will be used to find a specific user
         */
        return users.find((user) => user.id === id);
    },
    getUserInRoom(room) {
        /**
         * This method will be used to find the users that belongs to a specific room/group.
         */
        return users.filter((user) => user.room === room);
    }
};