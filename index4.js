const prompt = require("prompt-sync")();

const answer = prompt("would you like to play (y/n) ");

if (answer.toLowerCase() === "y"){
    const answer2 = prompt("would you like to go left or go right (left/right)? ")

        if(answer2 === "left"){
            console.log("Oops, you go left and fail of a bridge! lost!")
            // right
        }else{
            console.log("Nice! You go right and approach a bridge...")
            const answer3 = prompt(
                "Would you like to cross the bridge, or turn around and find another way(cross/turn)? ")
        
        if(answer3 === "cross") {
            console.log("You cross  the bridge and reach the end of the game!");
        }else{
            console.log(
                "You turn back and trip on a log and hurt your leg. You lose."
        );
     }
 }
}else{
    console.log("That's too bad!")
}


// class Car{
//     constructor(power){
//         this._gas = 25;
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `Your Gas Amont is ${this._gas}L (${this._gas / 50 * 100}%)`;
//     }
//     set gas(value){
//         if(value > 50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }
// let car = new Car(400);
// car.gas = 30;


// console.log(car.power);
// console.log(car.gas);
