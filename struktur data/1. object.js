const pengguna = {
    nama_depan: "Ravi",
    nama_belakang: "Azzura Putra",
    umur: 20,
    "home world": "Indonesia"
}

//pengguna.nama_depan = "Cid";
//pengguna.nama_belakang = "Kagenou";
//pengguna.univ = "universitas komputer indonesia";
//delete pengguna.univ;

console.log(`Perkenalkan nama saya ${pengguna.nama_depan} ${pengguna.nama_belakang}`);
console.log(`Umur saya ${pengguna.umur}`);
console.log(`Saya berasal dari ${pengguna["home world"]}`);
console.log(pengguna);