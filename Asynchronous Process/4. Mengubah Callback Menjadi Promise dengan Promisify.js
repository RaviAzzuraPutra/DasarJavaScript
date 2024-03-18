const { promisify } = require('util');

function getUsers(isOffline, callback) {
    setTimeout(() => {
        const user = ["Saitama", "Mikey", "Anos"];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null)
            return;
        }

        callback(null, user);
    }, 3000);
}

const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
    .then(user => console.log(user))
    .catch(err => console.log(err.message));

getUsersPromise(true)
    .then(user => console.log(user))
    .catch(err => console.log(err.message));