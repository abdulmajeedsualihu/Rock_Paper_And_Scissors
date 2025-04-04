function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices,length)];
}

function getHumanChoice() {
    return prompt("Enter your choice (rock, paper, scissors):").toLowerCase().trim();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase().trim();
        
        if (humanChoice === computerChoice) {
            console.log(`Tie! Both chose ${humanChoice}`);
            return;
        }

        const winConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };

        if (winConditions[humanChoice] === computerChoice) {
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`--- Round ${round} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Final results
    console.log("\n=== Final Results ===");
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("You win the game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! 💻");
    } else {
        console.log("It's a tie game! 🤝");
    }
}

// Start the game
playGame();