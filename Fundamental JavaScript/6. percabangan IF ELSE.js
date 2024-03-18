const hujan = false;

if (hujan == true) {
    console.log("Hari Ini Hujan");
}
else {
    console.log("Hari Ini tidak hujan");
}

const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda Mendapatkan discount sebesar ${discount} %`);

//Truthy & Falsy
const name = "Fredrinn";

if (name) {
    console.log(`nama : ${name}`);
} else {
    console.log("Nama Masih Kodong");
}