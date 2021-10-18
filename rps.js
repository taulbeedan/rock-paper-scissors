let userWinCounter = 0;  //set win counter for user
let computerWinCounter = 0;  //set win counter for computer

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3); //generate a random integer between 0 & 2
    if (randomNumber == 0) {
        return "ROCK";  //return string "Rock!" for 0
    } else if (randomNumber == 1) {
        return "PAPER";  //return string "Paper" for 1
    } else {
        return "SCISSORS";  //return string "Scissors" otherwise (2 should be only other option)
    }
}

function playRound() {
    let playerEntry = prompt("Rock, paper, or scissors?");   //prompt player to make Entry
    let playerSelection = playerEntry.toUpperCase();  //make playerEntry ALLCAPS for input case insensitivity
    let computerSelection = computerPlay();    //sets computerSelection by invoking computerPlay
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {  //compare playerSelection and computerSelection and set response
        response = "Rock beats Scissors! You Win!";
        userWinCounter++;
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        response = "Scissors beat Paper! You Win!";
        userWinCounter++;
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        response = "Paper beats Rock! You Win!";
        userWinCounter++;
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        response = "Paper beats Rock. You lose.";
        computerWinCounter++;
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        response = "Rock beats Scissors. You lose.";
        computerWinCounter++;
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        response = "Scissors beats Paper. You lose.";
        computerWinCounter++;
    } else if (playerSelection == computerSelection) {
            response = "It's a tie!";
    } else {
        response = "Invalid entry. Please enter only ROCK PAPER or SCISSORS.";
    }
    return response;
}

function game() {
    while (userWinCounter < 5 && computerWinCounter < 5) {
        console.log(playRound());
    }
    if (userWinCounter > computerWinCounter) {
        return "You Win! Final score " + userWinCounter + " to " + computerWinCounter + ".";
    } else if (userWinCounter < computerWinCounter) {
        return "Game Over! Final score " + userWinCounter + " to " + computerWinCounter + ".";
    }
}