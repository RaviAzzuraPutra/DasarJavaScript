// //impure function (lawan dari pure function)
// console.log("impure function");
// let phi = 3.14;

// const HitungLuasLingkaran = (JariJari) => {
//     return phi * (JariJari * JariJari);
// }

// console.log(HitungLuasLingkaran(99));

// phi = 5;  // tidak sengaja nilai PI berubah

// console.log(HitungLuasLingkaran(99));



// //pure function
// const HitungLuasLingkaran2 = (JariJari) => {
//     return 3.14 * (JariJari * JariJari);
// }

// console.log(HitungLuasLingkaran2(99));
// console.log(HitungLuasLingkaran2(12));
// console.log(HitungLuasLingkaran2(1));


// //bukan pure function
// const person = {
//     name: "Ronaldo"
// }

// const Age = (age, person) => {
//     person.age = age;
//     return person
// }


// const newPerson = Age(18, person);

// console.log({
//     person, newPerson
// });


// //pure function
// const person = {
//     name: "Ronaldo"
// }

// const creatwNewPersonWithAge = (Age, person) => {
//     return { ...person, Age };
// };

// const newPerson = creatwNewPersonWithAge(17, person);

// console.log({
//     person, newPerson
// }); 