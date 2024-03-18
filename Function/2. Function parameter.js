//Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. Contohnya seperti berikut:
const object = {
    Id: "90",
    Nama_Barang: "Teh Gelas",
    Harga: 1000,
};

function introduce({ Nama_Barang, Harga }) {
    console.log(`${Nama_Barang}, ${Harga}`)
};

introduce(object);

function experiment(NilaiAwal, NilaiAkhir = 2) {
    const result = NilaiAwal ** NilaiAkhir;
    console.log(`${NilaiAwal}^${NilaiAkhir} = ${result}`)
};

experiment(3);

function chelsea(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(chelsea(1, 3, 6, 9));

//named pramaneter menggunakan sperand operator
function NoteBook({ parameter1 = 100, parameter2 } = {}) {
    console.log(`Parameter1: ${parameter1}, Parameter2: ${parameter2}`)
}

console.log(NoteBook({
    parameter2: 'Sembilan Puluh Sembilan',
    parameter1: 99,
}));

//return keyword 
function Persegi(Sisi) {
    return Sisi * Sisi
}

console.log(`Luas Persegi Adalah: `, Persegi(10));

//function expression
function displayResult(data) {
    console.log(data);
}

function sum(x, y, callback) {
    const result = x + y;
    callback(result);
}

sum(5, 5, displayResult);
