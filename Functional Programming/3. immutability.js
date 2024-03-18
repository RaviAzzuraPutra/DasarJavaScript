/** //mutable
const names = ['Maguire', 'Havertz', 'Kante', 'Neymar'];

const newName = names.map((name) => ` ${name}!!`);

console.log({
    names,
    newName,
})**/

//immutability
const user = {
    FirstName: "Kai",
    LastName: "Kante" // typo
}

const CreateNewLastName = (newLastName, user) => {
    return { ...user, LastName: newLastName }
}

const newUser = CreateNewLastName('Havertz', user);

console.log(user);