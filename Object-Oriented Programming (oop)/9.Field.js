class MycClass {
    firstField = 'Chelsea';
    secondField = 'Fantech';

    #PrivateFirstField = 'Private Chelsea';
    #PrivateSecondField = 'Private Fantech';

    get PrIvateFirstField() {
        return this.#PrivateFirstField;
    }
}

const myClass = new MycClass();
console.log(myClass.firstField);
console.log(myClass.secondField);
console.log(myClass.PrIvateFirstField);
