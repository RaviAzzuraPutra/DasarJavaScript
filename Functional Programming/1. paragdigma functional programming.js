//gaya imperatif.
console.log("//gaya imperatif.")
const names = ['Maguire', 'Havertz', 'Thiago Silva', 'Kante', 'Neymar'];

const NewNameWithExcMark = [];

for (let i = 0; i < names.length; i++) {
    NewNameWithExcMark.push(`${names[i]}!!`)
}

console.log(NewNameWithExcMark)


//gaya deklaratif
console.log("//gaya deklaratif")
const names2 = ['Maguire', 'Havertz', 'Thiago Silva', 'Kante', 'Neymar'];

const NewNameWithExcMark2 = names2.map((name) => `${name}!!`);

console.log(NewNameWithExcMark2);


const myArray = [1, 66, 90, 4, 5, 22, 99, 333];
const sortedMyArray = myArray.sort(
    function (first, second) {
        return first - second;
    }
);

const isEvenNumber = (number) => (number % 2) === 0;
const filterArray = sortedMyArray.filter(isEvenNumber);
console.log(filterArray);