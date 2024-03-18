function minMax(arrayOfNumbers) {
    // Mendefinisikan fungsi bernama 'minMax' dengan parameter 'arrayOfNumbers'.

    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    // Inisialisasi dua variabel, 'currentMin' dan 'currentMax', dengan nilai pertama dalam array.

    for (value of arrayOfNumbers) {
        // Looping melalui setiap nilai dalam array 'arrayOfNumbers'.
        if (value < currentMin) {
            // Jika nilai saat ini lebih kecil dari 'currentMin',
            currentMin = value;
            // atur 'currentMin' menjadi nilai saat ini.
        } else if (value > currentMax) {
            // Jika nilai saat ini lebih besar dari 'currentMax',
            currentMax = value;
            // atur 'currentMax' menjadi nilai saat ini.
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
    // Cetak hasil minimum dan maksimum ke konsol.
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
// Panggil fungsi 'minMax' dengan array sebagai argumen.

// Output:
// currentMin: -23, currentMax: 71
