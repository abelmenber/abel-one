// 1. Despot some money
// 2. Determine number of line to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();


<<<<<<< HEAD
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
    
}
=======
// const ROWS = 3;
// const COLS = 3;

// const SYMBOLS_COUNT = {
//     "A": 2,
//     "B": 4,
//     "C": 6,
//     "D": 8
// }

// const SYMBOLS_VALUES = {
//     "A": 5,
//     "B": 4,
//     "C": 3,
//     "D": 2
    
// }

// const deposit = () => {
//     while (true) {
//         const depositAmount = prompt("Enter a deposite amount: ");
//         const numberDepositAmount = parseFloat(depositAmount);

//         if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
//             console.log("Invalid deposit amount, try again.");
//         }else{
//             return numberDepositAmount;
//         }
//     }
// };

// const getNumberofLine = () =>{
//     while (true) {
//         const lines = prompt("Enter the number of line to bet on(1-3): ");
//         const numberoflines = parseFloat(lines);

//         if(isNaN(numberoflines) || numberoflines <= 0 || numberoflines > 3) {
//             console.log("Invalid deposit amount, try again.");
//         }else{
//             return numberoflines;
//         }
//     }
// };


// const getBet = (balance, lines) => {
//     while (true) {
//         const bet = prompt("Enter the bet per line: ");
//         const numberBet = parseFloat(bet);

//         if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
//             console.log("Invalid bet, try again.");
//         }else{
//             return numberBet;
//         }
//     }
// };

// const spin = () => {
//     const symbols = [];
//     for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
//         for (let i = 0; i < count; i++) {
//             symbols.push(symbol);
//         }
//     }
//     console.log(symbols);
// };
// spin();
// let balance = deposit();
// const numberOfLines = getNumberofLine();
// const bet = getBet(balance, numberOfLines) ;



// one of example
>>>>>>> master

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposite amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again.");
        }else{
            return numberDepositAmount;
        }
    }
};

<<<<<<< HEAD
const getNumberofLine = () =>{
    while (true) {
        const lines = prompt("Enter the number of line to bet on(1-3): ");
        const numberoflines = parseFloat(lines);

        if(isNaN(numberoflines) || numberoflines <= 0 || numberoflines > 3) {
            console.log("Invalid deposit amount, try again.");
        }else{
            return numberoflines;
        }
    }
};


const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        }else{
            return numberBet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    console.log(symbols);
};
spin();
let balance = deposit();
const numberOfLines = getNumberofLine();
const bet = getBet(balance, numberOfLines) ;



// one of example

const deposit3 = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposite amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again.");
        }else{
            return numberDepositAmount;
        }
    }
};

const deposiAmount = deposit3();
=======
const deposiAmount = deposit();
>>>>>>> master
console.log(deposiAmount);