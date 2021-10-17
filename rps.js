function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3); //generate a random integer between 0 & 2
    if (randomNumber == 0) {
        return "Rock!";  //return string "Rock!" for 0
    } else if (randomNumber == 1) {
        return "Paper!";  //return string "Paper" for 1
    } else {
        return "Scissors!";  //return string "Scissors" otherwise (2 should be only other option)
    }
}