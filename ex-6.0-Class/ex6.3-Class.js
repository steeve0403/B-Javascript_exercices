//Exercice 6.3

class Animal {
    constructor(name, greeting){
        this.name = name;
        this.greeting = greeting;
    }
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name, "Miaow");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name,"Woof" );
    }
}

console.log( new Cat("Cat").sayHello());
console.log(new Dog("Dog").sayHello());