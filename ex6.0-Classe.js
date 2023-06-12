
//Exerice 6.1
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let skitty = new Cat("Sktty","9 ans");
let pixel = new Cat("Pixel","6 ans");

console.log(skitty, pixel);

//Exercice 6.2

class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHi() {
        console.log(this.firstname, this.lastname);
    }
}
let me = new Person("Steeve","Zych");
me.sayHi();

//Exercice 6.3

class Animal {
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}
