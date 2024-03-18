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

function usersCallback(error, user) {
    if (error) {
        console.log('process failed', error.message);
        return;
    }
    console.log('process success', user)
}

getUsers(false, usersCallback);
getUsers(true, usersCallback);

