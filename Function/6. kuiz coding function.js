function findIndex(array = [], number) {
    // Mendeklarasikan fungsi bernama 'findIndex' dengan dua parameter: array dan number.
    // Parameter array memiliki nilai default berupa array kosong jika tidak ada argumen yang diberikan.

    if (array.indexOf(number) != -1) {
        // Menggunakan metode indexOf untuk mencari indeks dari nilai 'number' dalam array.
        // Jika 'number' ditemukan (indeks tidak sama dengan -1),
        // maka blok berikutnya akan dijalankan.
        return array.indexOf(number);
        // Mengembalikan indeks pertama kali 'number' ditemukan dalam array.
    } else {
        // Jika 'number' tidak ditemukan dalam array, maka blok berikutnya akan dijalankan.
        return -1;
        // Mengembalikan -1 untuk menandakan bahwa 'number' tidak ditemukan dalam array.
    }
}

console.log(findIndex([1, 2, 3, 4, 5], 3));
// Memanggil fungsi findIndex dengan array [1, 2, 3, 4, 5] dan number 3.
// Hasilnya akan menjadi indeks pertama kali nilai 3 ditemukan dalam array, yaitu 2.
console.log(findIndex([1, 2, 3, 4, 5], 6));
// Memanggil fungsi findIndex dengan array [1, 2, 3, 4, 5] dan number 6.
// Karena 6 tidak ditemukan dalam array, hasilnya akan -1.
console.log(findIndex([1, 2, 3, 4, 5], 5));
// Memanggil fungsi findIndex dengan array [1, 2, 3, 4, 5] dan number 5.
// Hasilnya akan menjadi indeks pertama kali nilai 5 ditemukan dalam array, yaitu 4.
