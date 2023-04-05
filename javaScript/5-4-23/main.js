// class Person {

//     constructor(firstName, lastName, passCode,computerLit,skinColor,lcda, skills){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.passCode = passCode;
//         this.computerLit = computerLit;
//         this.skinColor =  skinColor;
//         this.lcda = lcda;
//         this.skills = skills;
    
//     }
//     setFullName() {
//         const fullName = this.firstName + " " + this.lastName;
//         return(fullName);
//     }
//     // get getSkills(){

//     // }
//     set setTitle(firstName){
//         this.firstName = (`Mr ${this.firstName}`)
//     }
// };

// const person1 = new Person("Mistura", "Mutairu", 007, true, "light skin", "Idi-oro", [])
// const person2 = new Person("Ayo", "Adio", 005, false, "dark skinned", "Ikorodu")
// const person3 = new Person("Chioma", "Onyeka", 076, true, "light skinned", "Epe")
// console.log(person1, person2, person3);
// console.log(person1);
// console.log(person2);
// console.log(person3);

// console.log(person1.setFullName());
// console.log(person2.setFullName());
// console.log(person3.setFullName());

// console.log(person1.setTitle( ));

class Animal {
    constructor(name, age, colour, leg){
        this.name = name;
        this.age = age;
        this.colour = colour;
        this.leg = leg;
    }
}

const cat = new Animal("Cat", 3, "white", 4)
const hen = new Animal("Chick", 2, "white", 2)
const ram = new Animal("Ram", 5, "brown", 4)
console.log(cat);
console.log(hen);
console.log(ram);