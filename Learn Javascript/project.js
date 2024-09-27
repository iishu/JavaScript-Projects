//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4.Spin the slot machine
//5. check if the user won 
//6. give the user their winnings
//7. play again

const prompt = require('prompt-sync')();

//1
//arrow function
const deposit=()=>{
    while(true) {
    const depositAmount = prompt("Enter deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if(isNaN(numberDepositAmount)|| numberDepositAmount<=0){
        console.log("Invalid deposit amount, try again");
    }else{
        return numberDepositAmount;

    }
} 
};

//2

const getNumberOfLines = ()=>{

while(true) {
    const  Lines = prompt("Enter the number of lines to bet on(1-3): ");
    const NumberOfLines = parseFloat(Lines);
    if(isNaN(NumberOfLines)|| NumberOfLines<=0||NumberOfLines>3){
        console.log("Invalid number of lines, try again");
    }else{
        return NumberOfLines;

    }
} 
}
//3
const getBet=(balance,lines)=>{
    while(true) {
        const  bet = prompt("Enter the bet per line: ");
        const NumberOfBet = parseFloat(bet);
        if(isNaN(NumberOfBet)|| NumberOfBet<=0||NumberOfBet>(balance,lines)){
            console.log("Invalid bet, try again");
        }else{
            return NumberOfBet;
    
        }
    }
}
let balance =deposit();
 
const NumberOfLines=getNumberOfLines();
const bet=getBet(balance, NumberOfLines);
 