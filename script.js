function getComputerChoice(arr) {
    const randomChoice = Math.floor(Math.random() * arr.length);  //get random index value from array
    const computerValue = arr[randomChoice]; //get item from array from the random index value (?)
    return computerValue;
}

const array = ["Rock", "Paper", "Scissors"]; //the values
const computerChoice = getComputerChoice(array)


//const playerChoice = "Paper"

let playerScore = 0;
let computerScore = 0;
let currentRound = 0;


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        currentRound = currentRound + 1;
        return console.log("It's a tie!")
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = playerScore + 1;
        currentRound = currentRound + 1;
        return console.log("You win!")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore = playerScore + 1;
        currentRound = currentRound + 1;
        return console.log("You win!")
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore = playerScore + 1;
        currentRound = currentRound + 1;
        return console.log("You win!")
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore = computerScore + 1;
        currentRound = currentRound + 1;
        return console.log("You lose!")
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore = computerScore + 1;
        currentRound = currentRound + 1;
        return console.log("You lose!")
    } else (playerSelection == "scissors" && computerSelection == "rock")
    computerScore = computerScore + 1;
    currentRound = currentRound + 1;
    return console.log("You lose!")

}

function getUserPrompt() {
    const playerInput = prompt("Type either Rock, Paper or Scissors!")
    if (playerInput.toLowerCase() == "rock" || playerInput.toLowerCase() == "paper" || playerInput.toLowerCase() == "scissors") {
        return playerInput
    } else {
        return getUserPrompt()
    }
}





function getUserPromptAndPlayRound() {
    const playerInput = getUserPrompt()
    const computerInput = getComputerChoice(array)
    const matchResult = playRound(playerInput.toLowerCase(), computerInput.toLowerCase())
}


function declareWinner() {
    const roundScore = playRound(playerInput.toLowerCase(), computerInput.toLowerCase())
    return roundScore
}




function game() {


    getUserPromptAndPlayRound()

    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)
    console.log("Current round: " + currentRound)
    console.log("------------------------------")

    getUserPromptAndPlayRound()

    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)
    console.log("Current round: " + currentRound)
    console.log("------------------------------")

    getUserPromptAndPlayRound()

    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)
    console.log("Current round: " + currentRound)
    console.log("------------------------------")

    getUserPromptAndPlayRound()

    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)
    console.log("Current round: " + currentRound)
    console.log("------------------------------")

    getUserPromptAndPlayRound()

    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)
    console.log("Current round: " + currentRound)
    console.log("------------------------------")

}


function gameEnd() {
    if (currentRound == 5 && playerScore == computerScore) {
        return alert("The game is tied!")
    } else if (currentRound == 5 && playerScore > computerScore) {
        return alert("You won the game!")
    } else if (currentRound == 5 && playerScore < computerScore) {
        return alert("You lost the game!")
    }
}

game()
gameEnd()


