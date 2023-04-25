function getComputerChoice(arr) {
    const randomChoice = Math.floor(Math.random() * arr.length);  //get random index value from array
    const computerValue = arr[randomChoice]; //get random item from array from the index value (?)
    return computerValue; 
}

const array = ["Rock", "Paper", "Scissors"]; //the values
const computerChoice = getComputerChoice(array)

//console.log(computerChoice)

const playerChoice = "Rock"

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!"
} else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "You win!"
} else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "You win!"
} else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "You win!"
} else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You lose!"
} else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "You lose!"
} else (playerSelection == "Scissors" && computerSelection == "Rock") 
    return "You lose!"

}


console.log(playRound(playerChoice, computerChoice))