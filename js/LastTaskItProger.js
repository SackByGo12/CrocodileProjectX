var date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getHours());
var arr = [5, 8, 9, 0]
// console.log(arr.join(", "));
// console.log(arr.sort());
// console.log(arr.reverse().join(" "));
class Person {
    constructor(name, age, happiness){
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }

    info() {
        console.log("Human" + this.name + " Возраст: " + this.age);
       }
}
var ale = new Person('Alex', 45, true);
var ale = new Person('Bob', 25, false);

alex.name = "alex";

console.log(alex.age);
console.log(bob.name);
alex.info();