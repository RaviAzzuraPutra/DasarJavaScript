// // Array Map
// const EPL = ['Chelsea', 'Liverpool', 'Newcastle United'].map((name) => {
//     return `${name}!!`
// });

// console.log(EPL);


// //Array Filter
// const ArrayFilter = [1, "", "Chelsea", 99, null, 0, undefined, "Ravi"].filter((item) => Boolean(item));
// console.log(ArrayFilter);

// const siswa = [{
//     name: 'Shinobu',
//     score: 100,
// },
// {
//     name: 'Ethan',
//     score: 95,
// },
// {
//     name: 'Morata',
//     score: 70,
// },
// {
//     name: 'Tom',
//     score: 55,
// }]

// const beasiswa = siswa.filter((siswa) => siswa.score > 90);

// console.log(`Siswa Yang Berhak Mendapatkan Beasiswa Adalah: `, beasiswa);



// //Array Reduce
// const siswa = [
//     {
//         name: 'Shinobu',
//         score: 100,
//     },
//     {
//         name: 'Ethan',
//         score: 95,
//     },
//     {
//         name: 'Morata',
//         score: 70,
//     },
//     {
//         name: 'Tom',
//         score: 55,
//     }
// ];

// const total = siswa.reduce((semua, siswa) => semua + siswa.score, 0);

// console.log(total);



// //Array Some
// const ArraySome = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const genap = ArraySome.some(AngkaGenap => AngkaGenap % 2 === 0);
// console.log(genap);



// //Array Find
// const siswa = [
//     {
//         name: 'Shinobu',
//         score: 100,
//     },
//     {
//         name: 'Ethan',
//         score: 95,
//     },
//     {
//         name: 'Morata',
//         score: 70,
//     },
//     {
//         name: 'Tom',
//         score: 55,
//     }
// ];

// const findEthan = siswa.find(siswa => siswa.name === 'Ethan');
// console.log(findEthan);



// //Array Sort
// const party = ['Blade', 'JingLiu', 'Bronya', 'Luocha'];
// party.sort();
// console.log(party);

// const array = [1, 2, 99, 54, 100000];
// const ComporateNUmbers = (a, b) => {
//     return a - b;
// }

// const sorting = array.sort(ComporateNUmbers);
// console.log(sorting);



// //Array Every
// const score = [70, 95, 100];
// const minimal = 60;

// const lulusUjian = score.every(nilai => nilai >= minimal);
// console.log(lulusUjian);



// //Array ForEach
// //cara imperatif
// const names = ['Blade', 'Jingliu', 'Bronya', 'Luocha'];
// for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]}!!`);
// }

// //cara deklaratif
// const names2 = ['Blade', 'Jingliu', 'Bronya', 'Luocha'];

// names2.forEach((names2) => {
//     console.log(`${names2}!!`);
// });