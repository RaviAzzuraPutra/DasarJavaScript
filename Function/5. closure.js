//lexical scope.
function init() {
    const name = "Ravi Azzura Putra";

    function greet() {
        console.log(`Nama saya ${name}`)
    }
    greet();
}

init();

function init2() {
    const name2 = "Kaneki ken";

    function greet2() {
        console.log(`Nama saya ${name2}`)
    }
    return greet2;
}

const myFunction = init2();
myFunction();


const add = () => {
    let counter = 100;
    return () => {
        return ++counter;
    };
}

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());