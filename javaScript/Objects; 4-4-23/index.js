// class Player {

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
    // score = 0;

    // welcome(){
    //     console.log("Welcome player 1 ");
    // }

    // thankYou(){
    //     console.log("Thank you player 1 ");
    // }
// }

// const player1 = new Player("${hello}", 40); //a instance of instatiating player1
// const player2 = new Player("Oyin", 120);

// console.log(player2.age);
// console.log(player1.name);

// const player1 = new Player(); //a instance of instatiating player1
// const player2 = new Player();
// player1.score +=1 //the value is updated
// player2.score -=1
// console.log(player1.score)
// console.log(player2.score)
// console.log(this.welcome)

class Car {
    static numberOfCars = 0

constructor() {
    Car.numberOfCars +=1;
   //this.numberOfCars +=1; this.numberOfCars did not result in an increase
}

    drive() {
        console.log("You are driving");
    }
}

const car1 = new Car()
const car2 = new Car()
const car3 = new Car()
// console.log(car1.numberOfCars); for this, use this in place of Car in the constructor

console.log(Car.numberOfCars);









// const car = {
//     color: "Black",
//     brand: "Lexus",
//     model: "RX-350",
//     year: "2022",
//     drive:function () {
//         console.log("Lexus is in drive mood");
//     },

//     neutral: function () {
//         console.log("Lexus is in neutral");
//     },

//     reverse: function() {
//         console.log("Lexus is in neutral");
//     },

//     park: function() {
//         console.log("Lexus is in neutral");
//     }
// }

// console.log(car.drive())

// const car2 = {
//     color: "Black",
//     brand: "Toyota",
//     model: "Venza",
//     year: "2022",
//     drive:function () {
//         console.log("Lexus is in drive mood");
//     },

//     neutral: function () {
//         console.log("Lexus is in neutral");
//     },

//     reverse: function() {
//         console.log("Lexus is in neutral");
//     },

//     park: function() {
//         console.log("Lexus is in neutral");
//     }
// }

// console.log(this);
