function chelsea() {
    console.log("Chelsea Juara");
}

chelsea();

function Greeting(name, language) {
    if (language == "Japanese") {
        return `おはようございます ${name}`;
    } else if (language == "Indonesia") {
        return `Selamat Pagi ${name}`
    } else if (language == "English") {
        return `Good Morning ${name}`
    }
}

let GreetingMassage = Greeting('Ravi', 'Japanese');
console.log(GreetingMassage);

function MTK(x, y) {
    return x * y;
}

let hasil = MTK(90, 1);
console.log(hasil);

//exxpretion function
const Greeting2 = function (name2, language2) {
    if (language2 == "Japanese") {
        return "おはようございます" + name2 + "!";
    } else if (language2 == "Indonesia") {
        return "Selamat Pagi" + name2 + "!";
    } else if (language2 == "English") {
        return "Good Morning" + name2 + "!";
    }
}

console.log(Greeting2("Nicolas", "English"));




function data(data) {
    console.log(data);
}

function penjumlahan(x, y, callback) {
    const result = x + y;
    callback(result);
}

penjumlahan(99, 1, data);