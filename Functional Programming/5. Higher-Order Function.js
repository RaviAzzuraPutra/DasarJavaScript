const hello = () => {
    console.log('こんにちは');
}

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('こんにちは');
    }
}

hello();
say(hello);
sayHello()();


const names = ['Maguire', 'Havertz', 'Thiago Silva', 'Kante', 'Neymar'];

const arrayMap = (arr, action) => {
    const loop = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if (!item) return newArray;
        return loop(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loop(arr, action);
}

const newNames = arrayMap(names, (name) => `${name}!!`);

console.log({
    names,
    newNames,
});

function kalikan(a, b) {
    return a * b;
}

function HitungLuasPersegi(sisi) {
    return kalikan(sisi, sisi);
}

function Cetak(sisi) {
    const luas = HitungLuasPersegi(sisi);
    console.log(luas);
}

Cetak(6);

