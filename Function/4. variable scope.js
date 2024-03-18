// global scope
const nama = "Ravi Azzura Putra";
function print() {
    console.log(nama);
}

print();
//console.log(nama);


//local scope
function local_scope() {
    const keyboard = "mechanical";
    console.log(keyboard);
}

local_scope();
//console.log(keyboard);// Akan menghasilkan error karena 'local_scope' tidak dikenali di luar fungsi

//Block Scope (ES6):
if (true) {
    const mosue = "rexus";
    console.log(mosue);
}

//console.log(mosue);// Akan menghasilkan error karena 'mouse' tidak dikenali di luar blok