 // Create shooting stars
 function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 20;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random properties
        const size = Math.random() * 3;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 5;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
}

// Initialize stars
createStars();

// Game state
let playerScore = 0;
let computerScore = 0;
const scoreToWin = 5;
let gameOver = false;

// DOM elements
const scoreDisplay = document.getElementById('score');
const resultsDiv = document.getElementById('results');
const gameResultDiv = document.getElementById('game-result');

// Get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// Play a single round
function playRound(playerSelection) {
    if (gameOver) return;

    const computerSelection = getComputerChoice();
    let roundResult = '';

    if (playerSelection === computerSelection) {
        roundResult = `Tie! Both chose ${playerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        roundResult = `You Win! ${playerSelection} beats ${computerSelection}`;
        // Add celebration effect for win
        if (playerScore === scoreToWin) {
            celebrate();
        }
    } else {
        computerScore++;
        roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    // Update UI
    resultsDiv.innerHTML += `${roundResult}<br>`;
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    // Check for winner
    if (playerScore >= scoreToWin || computerScore >= scoreToWin) {
        endGame();
    }
}

// Celebration effect
function celebrate() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            const size = 2 + Math.random() * 5;
            const posX = Math.random() * window.innerWidth;
            const posY = Math.random() * window.innerHeight;
            const duration = 1 + Math.random() * 2;
            
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${posX}px`;
            star.style.top = `${posY}px`;
            star.style.animationDuration = `${duration}s`;
            
            document.getElementById('stars').appendChild(star);
            
            // Remove star after animation
            setTimeout(() => {
                star.remove();
            }, duration * 1000);
        }, i * 100);
    }
}

// End the game and announce winner
function endGame() {
    gameOver = true;
    if (playerScore > computerScore) {
        gameResultDiv.textContent = 'You won the game! 🎉';
        gameResultDiv.style.color = 'white';
    } else {
        gameResultDiv.textContent = 'Computer won the game! 💻';
        gameResultDiv.style.color = 'white';
    }
    
    // Add restart button
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Play Again';
    restartBtn.style.marginTop = '10px';
    restartBtn.addEventListener('click', restartGame);
    gameResultDiv.appendChild(document.createElement('br'));
    gameResultDiv.appendChild(restartBtn);
}

// Restart the game
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    scoreDisplay.textContent = `Player: 0 | Computer: 0`;
    resultsDiv.innerHTML = 'New game started! Make your choice.';
    gameResultDiv.textContent = '';
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));