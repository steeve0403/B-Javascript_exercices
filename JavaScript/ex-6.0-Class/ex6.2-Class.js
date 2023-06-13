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