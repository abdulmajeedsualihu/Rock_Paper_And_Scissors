let humanScore = 0;
let computerScore = 0;

function playGame() {
    

    // function playRound(humanChoice, computerChoice) {
    //     computer = 
    //     playRound(computer, human)
    // }

// playRound();
// playRound();
// playRound();
// playRound();
// playRound();

}



//console.log(playRound("You lose!, Paper beats Rock"));

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let human = prompt("Enter your choice(rock, paper, scissors)" ).toLowerCase().trim();
    return human;
}

console.log(getHumanChoice());
playGame();