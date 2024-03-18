function getUsers(isOffline) {
    //return a promise object
    return new Promise((resolve, reject) => {
        //simulate network delay
        setTimeout(() => {
            const users = ['Saitama', 'Anos', 'Mikey'];

            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000)
    });
}

getUsers(false)
    .then(users => console.log(users))
    .catch(error => console.log(error.message));


getUsers(true)
    .then(users => console.log(users))
    .catch(error => console.log(error.message));