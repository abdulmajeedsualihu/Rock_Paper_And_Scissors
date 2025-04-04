function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        // Normalize human input to lowercase and trim whitespace
        humanChoice = humanChoice.toLowerCase().trim();
        
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
            return;
        }
    
        // Define what each choice beats
        const winningConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };
    
        // Determine winner
        if (winningConditions[humanChoice] === computerChoice) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }
    
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let human = prompt("Enter your choice(rock, paper, scissors)" ).toLowerCase().trim();
    return human;
}

console.log(getHumanChoice());
