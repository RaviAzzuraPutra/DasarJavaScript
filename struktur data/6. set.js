const number = new Set([7, 0, 9, 0, 1]);

number.add(10);
number.add(99);

number.delete(0);

console.log(number);