try {
    const filteredArray = [true, false].filter(true);
    console.log(filteredArray)

} catch (error) {
    console.log(error);
} finally {
    console.log('Kode Ini Akan Tetap Dijalankan!!');
}

console.log('code lainnya'); //code ini akan tetap berjalan