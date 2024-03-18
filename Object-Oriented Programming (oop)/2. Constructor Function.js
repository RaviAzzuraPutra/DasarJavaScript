// function Car(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
// }

// Car.prototype.drive = function () {
//     console.log(`${this.brand} ${this.color} is driving`);
// };

// Car.prototype.reverse = function () {
//     console.log(`${this.brand} ${this.color} is reverse`);
// };

// Car.prototype.turn = function () {
//     console.log(`${this.brand} ${this.color} is turning`);
// };

// const car_1 = new Car('Toyota', 'Green', 400, '9901');
// const car_2 = new Car('Honda', 'Red', 500, '8751');
// const car_3 = new Car('Lamborgini', 'Gold', 900, '0824');

// console.log(car_1);
// console.log(car_2);
// console.log(car_3);

// car_1.drive();
// car_2.reverse();
// car_3.turn();

console.log("")
console.log("Cara modern (ES6)")

//ES6
class CarES6 {
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.colo = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    }
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }
    reverse() {
        console.log(`${this.brand} ${this.color} is reverse`);
    }
    turn() {
        console.log(`${this.brand} ${this.color} is turning`);
    }
}
const car_1ES6 = new Car('Toyota', 'Green', 400, '9901');
const car_2ES6 = new Car('Honda', 'Red', 500, '8751');
const car_3ES6 = new Car('Lamborgini', 'Gold', 900, '0824');

console.log(car_1ES6);
console.log(car_2ES6);
console.log(car_3ES6);

car_1ES6.drive();
car_2ES6.reverse();
car_3ES6.turn();