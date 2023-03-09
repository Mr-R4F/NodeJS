class Person {
    constructor(name) {
       this.name = name;
    }
 
    get myName() {
       return `${this.name} é muito linda <3 :D`;
    }
}

module.exports = {
    Person
}