class ValidasiError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidasiError";
    }
}

json = '{"age" : "28"}';
try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new ValidasiError("'name' is required.");
    }

    if (!user.age) {
        throw new ValidasiError("'age' is required.");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON error: ${error.message}`);
    }
    else if (error instanceof ReferenceError) {
        console.log(error.message);
    }
    else if (error instanceof ValidasiError) {
        console.log(`Invalid Data: ${error.message}`);
    }
    else {
        console.log(error.stack);
    }
}

