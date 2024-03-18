//static bisa dipanggil tanpa membuat object
class MyClass {
    static FirstStaticField = 'First';
    static SecondStaticField;
    //membrikan value ke SecondStaticFiled
    static {
        MyClass.SecondStaticField = 'Second';
    }

    static FirstStaticMethod() {
        return 'Ini adalah method pertama dari class MyClass!!';
    }
}

console.log(MyClass.FirstStaticField);
console.log(MyClass.SecondStaticField);
console.log(MyClass.FirstStaticMethod());