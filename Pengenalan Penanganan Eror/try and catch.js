try {
    console.log('Chelsea');
} catch {
    console.log('Jika Tidak Error Catch akan diabaikan');
}

try {
    errorCode;
} catch (error) {
    console.log("Terjadi Error!!!");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.")
}