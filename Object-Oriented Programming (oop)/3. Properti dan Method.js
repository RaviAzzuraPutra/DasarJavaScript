class Car {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this._chassisNumber = this._generateChassisNumber();
    }

    get chassisNumber() {
        return this._chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number');
    }

    // Methods
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn(direction) {
        console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }

    _generateChassisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}

const car = new Car('BMW', 'RED', 200);
car.drive();
car.turn('Left');
car.reverse();
console.log(car._chassisNumber);
car._chassisNumber = "BMW-1";
console.log(car._chassisNumber);
console.log(car._generateChassisNumber());

class Mail {
    constructor(sender, receiver, subject, body) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }

    // Methods
    send() {
        console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
    }

    sendLater(delay) {
        console.log(`Sending after ${delay} ms`);

        setTimeout(() => {
            this.send();
        }, delay);
    }

    saveAsDraft() {
        console.log('Saving mail as draft');
    }
}

class MyClass {
    static {
        console.log('Japan');
    }
}

