const pengguna = {
    nama_depan: "Ravi",
    nama_belakang: "Azzura Putra",
    umur: 20,
    "home world": "Indonesia"
}

//const { nama_depan, nama_belakang, umur } = pengguna;
//console.log(nama_depan, nama_belakang, umur);

let nama_depan = "asta";
let umur = 17;
({ nama_depan, umur } = pengguna);
console.log(nama_depan);
console.log(umur);