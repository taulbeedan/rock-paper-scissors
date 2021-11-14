let userWinCounter = 0;  //set win counter for user
let computerWinCounter = 0;  //set win counter for computer
let round = 0;

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
    const resultBox = document.getElementById("result");
    const playerBox = document.getElementById("pIcon");
    const cpuBox = document.getElementById("cIcon");
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
    };

    if (playerSelection == "ROCK") {
        playerBox.src = "../rock-paper-scissors/images/rock.jpg";
    } else if (playerSelection == "PAPER") {
        playerBox.src = "../rock-paper-scissors/images/paper.jpeg";
    } else {
        playerBox.src = "../rock-paper-scissors/images/scissors.jpeg";
    };

    if (computerSelection == "ROCK") {
        cpuBox.src = "../rock-paper-scissors/images/rock.jpg";
    } else if (computerSelection == "PAPER") {
        cpuBox.src = "../rock-paper-scissors/images/paper.jpeg";
    } else {
        cpuBox.src = "../rock-paper-scissors/images/scissors.jpeg";
    };
    
    resultBox.textContent = response;
    round++;
    console.log(response);
    game();
}

const victory = document.createElement('div');
victory.setAttribute("id", "victory");
victory.textContent = "You Win! Final score " + userWinCounter + " to " + computerWinCounter;

const gameover = document.createElement('div');
gameover.setAttribute("id", "gameover");
gameover.textContent = "Game Over! Final score " + userWinCounter + " to " + computerWinCounter;

function game() {
    let middle = document.getElementById("middle");
    let result = document.getElementById("result");
    if (userWinCounter >= 5) {
        middle.removeChild(result);
        middle.insertBefore(victory,log);
    } else if (computerWinCounter >=5) {
        middle.removeChild(result);
        middle.insertBefore(gameover,log);
    } else {
        return;
    }
};


document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      playerSelection = event.target.id;
      playRound();
      updateScore();
    }
});

function updateScore() {
    const playerScoreBox = document.getElementById("playerScore");
    const cpuScoreBox = document.getElementById("cpuScore");

    playerScoreBox.textContent = userWinCounter;
    cpuScoreBox.textContent = computerWinCounter;
}

(function () {
    let logger = document.getElementById("log");
    console.log = function (message) {
            logger.innerHTML += "Round " + round + " : " + message + "<br />";
        }
})();

