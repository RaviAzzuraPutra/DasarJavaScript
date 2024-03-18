// const json = '{"name" : "Gojo Satoru", "age" : "28"}';
// try {
//     const user = JSON.parse(json);
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }


// const Badjson = '{ bad json }';
// try {
//     const user = JSON.parse(Badjson);

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }


// const NewJson = '{"age":"31"}';
// try {
//     const user = JSON.parse(NewJson);

//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(`JSON error: ${error.message}`);
// }


// json = '{"name" : "Gojo Satoru", "age" : "28"}';
// try {
//     const user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }

//     errorCode;

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON error: ${error.message}`);
//     }
//     else if (error instanceof ReferenceError) {
//         console.log(error.message);
//     }
//     else {
//         console.log(error.stack);
//     }
// } 