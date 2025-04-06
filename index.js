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

        // End the game and announce winner
        function endGame() {
            gameOver = true;
            if (playerScore > computerScore) {
                gameResultDiv.textContent = 'You won the game! 🎉';
                gameResultDiv.style.color = '#27ae60';
            } else {
                gameResultDiv.textContent = 'Computer won the game! 💻';
                gameResultDiv.style.color = '#c0392b';
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