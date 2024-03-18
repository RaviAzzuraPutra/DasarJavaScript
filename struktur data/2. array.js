let array = ["SD", "MTs", "SMA", "Kuliah", "Jepang"];
let arrayNew = ["MORATA"];
const gabungan_array = [...array, ...arrayNew];
//array.push("BMW");
//array.pop();
//array.shift();
//array.unshift("Morata")
//delete array[1];
//array.splice(1, 1);
console.log(array);
console.log("");
console.log("Jika menggunakan spread operator");
console.log(...array);
console.log(gabungan_array);