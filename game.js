// Game Logic for QuizBattle

// Game state variables
let players = [
    { name: '', score: 0, tokens: 0, questionsInStreak: 0, roundScores: [] },
    { name: '', score: 0, tokens: 0, questionsInStreak: 0, roundScores: [] }
];
let currentCategory = '';
let tokenBout = 0;
let currentRound = 0;
let totalRounds = 5;
let currentPlayer = 0; // 0 for player 1, 1 for player 2
let currentQuestion = null;
let timer = null;
let timeLeft = 10; // seconds per question
let gameActive = false;
let questionsPerStreak = 3; // Number of questions each player answers in a row
let askedQuestions = {}; // Track asked questions to prevent repetition across the entire game
let answerProcessing = false;

// DOM Elements
const gameSetupSection = document.getElementById('game-setup');
const gameAreaSection = document.getElementById('game-area');
const gameResultsSection = document.getElementById('game-results');

const player1NameInput = document.getElementById('player1-name');
const player2NameInput = document.getElementById('player2-name');
const categorySelect = document.getElementById('category-select');
const tokenButtons = document.querySelectorAll('.token-btn');
const startGameBtn = document.getElementById('start-game-btn');
const speedIndicators = [1, 2, 3, 4, 5].map(i => document.getElementById(`speed-${i}`));
const speedBonusDisplay = document.getElementById('speed-bonus');

// Countdown elements
const countdownOverlay = document.querySelector('.countdown-overlay');
const countdownNumber = document.querySelector('.countdown-number');
const playerNameDisplay = document.querySelector('.player-name-display');

const player1DisplayName = document.getElementById('player1-display-name');
const player2DisplayName = document.getElementById('player2-display-name');
const player1Score = document.getElementById('player1-score');
const player2Score = document.getElementById('player2-score');
const player1Tokens = document.getElementById('player1-tokens');
const player2Tokens = document.getElementById('player2-tokens');
const timerDisplay = document.getElementById('timer');
const currentRoundDisplay = document.getElementById('current-round');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');
const player1Turn = document.getElementById('player1-turn');
const player2Turn = document.getElementById('player2-turn');

const winnerText = document.getElementById('winner-text');
const resultPlayer1Name = document.getElementById('result-player1-name');
const resultPlayer2Name = document.getElementById('result-player2-name');
const resultPlayer1Score = document.getElementById('result-player1-score');
const resultPlayer2Score = document.getElementById('result-player2-score');
const resultPlayer1Tokens = document.getElementById('result-player1-tokens');
const resultPlayer2Tokens = document.getElementById('result-player2-tokens');
const playAgainBtn = document.getElementById('play-again-btn');

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeGame);
document.addEventListener('keydown', handleKeyboardInput);

// Handle keyboard shortcuts for answer selection
function handleKeyboardInput(event) {
    // Only process keyboard input if game is active, we're showing a question, and not currently processing an answer
    if (gameActive && currentQuestion && !answerProcessing) {
        // Check if the key pressed is 1, 2, 3, or 4
        if (event.key >= '1' && event.key <= '4') {
            // Convert key to answer index (0-3)
            const answerIndex = parseInt(event.key) - 1;
            
            // Simulate clicking the corresponding answer button
            if (answerIndex >= 0 && answerIndex < 4) {
                // Add visual feedback for the pressed key
                const button = document.getElementById(`answer-${answerIndex}`);
                button.classList.add('key-pressed');
                
                // Remove the class after a short delay
                setTimeout(() => {
                    button.classList.remove('key-pressed');
                }, 100);
                
                // Handle the answer
                handleAnswer(answerIndex);
            }
        }
    }
}

function initializeGame() {
    // Set up token selection
    tokenButtons.forEach(button => {
        button.addEventListener('click', () => {
            tokenButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            tokenBout = parseInt(button.dataset.value);
        });
    });
    
    // Default selection for tokens
    tokenButtons[0].click();
    
    // Start game button
    startGameBtn.addEventListener('click', setupGame);
    
    // Answer buttons
    answerButtons.forEach(button => {
        button.addEventListener('click', () => handleAnswer(parseInt(button.id.split('-')[1])));
    });
    
    // Play again button
    playAgainBtn.addEventListener('click', resetGame);
}

function setupGame() {
    // Validate inputs
    const player1Name = player1NameInput.value.trim() || 'Player 1';
    const player2Name = player2NameInput.value.trim() || 'Player 2';
    
    if (!tokenBout) {
        alert('Please select a token bout!');
        return;
    }
    
    // Check if quizQuestions is defined
    if (typeof quizQuestions === 'undefined') {
        alert('Quiz questions not loaded properly. Please refresh the page and try again.');
        return;
    }
    
    // Set up player data
    players[0].name = player1Name;
    players[0].tokens = tokenBout;
    players[0].score = 0;
    players[0].questionsInStreak = 0;
    players[0].roundScores = [];
    
    players[1].name = player2Name;
    players[1].tokens = tokenBout;
    players[1].score = 0;
    players[1].questionsInStreak = 0;
    players[1].roundScores = [];
    
    // Set category
    currentCategory = categorySelect.value;
    
    // Update display
    player1DisplayName.textContent = player1Name;
    player2DisplayName.textContent = player2Name;
    player1Score.textContent = '0';
    player2Score.textContent = '0';
    player1Tokens.textContent = tokenBout;
    player2Tokens.textContent = tokenBout;
    
    // Reset game state
    currentRound = 1;
    currentPlayer = 0; // Player 1 starts
    currentRoundDisplay.textContent = currentRound;
    
    // Show game area, hide setup
    gameSetupSection.classList.add('hidden');
    gameAreaSection.classList.remove('hidden');
    gameResultsSection.classList.add('hidden');
    
    // Start the game
    gameActive = true;
    updateTurnIndicator();
    
    // Load the first question (which will show countdown first)
    loadQuestion();
}

// Show countdown before starting a question
function showCountdown() {
    return new Promise(resolve => {
        // Show the overlay with fade-in animation
        countdownOverlay.classList.add('active');
        countdownOverlay.classList.add('fade-in');
        
        // Display player name
        playerNameDisplay.textContent = `${players[currentPlayer].name}'s Turn`;
        
        // Start from 3
        let count = 3;
        countdownNumber.textContent = count;
        countdownNumber.classList.add('pulse-countdown');
        
        // Update countdown every second
        const countdownTimer = setInterval(() => {
            count--;
            
            if (count > 0) {
                // Add animation effect when changing numbers
                countdownNumber.classList.remove('pulse-countdown');
                // Trigger reflow to restart animation
                void countdownNumber.offsetWidth;
                countdownNumber.textContent = count;
                countdownNumber.classList.add('pulse-countdown');
            } else {
                // Countdown finished
                clearInterval(countdownTimer);
                // Add fade-out animation before hiding
                countdownOverlay.classList.add('fade-out');
                setTimeout(() => {
                    countdownOverlay.classList.remove('active', 'fade-in', 'fade-out');
                    resolve();
                }, 500); // Match the fade-out animation duration
            }
        }, 1000);
    });
}

async function loadQuestion() {
    // Add debug logging to check if quizQuestions is defined
    console.log('Current category:', currentCategory);
    console.log('Quiz questions object:', quizQuestions);
    
    // Check if we have questions for the category
    if (!quizQuestions || !quizQuestions[currentCategory] || quizQuestions[currentCategory].length === 0) {
        alert('No questions available for this category!');
        resetGame();
        return;
    }
    
    // Show countdown if this is the first question for this player's turn
    if (players[currentPlayer].questionsInStreak === 0) {
        await showCountdown();
    }
    
    // Initialize tracking for this category if it doesn't exist
    if (!askedQuestions[currentCategory]) {
        askedQuestions[currentCategory] = [];
    }
    
    // Check if we've asked all available questions
    // If we have more rounds to play but have used all questions, load additional questions
    if (askedQuestions[currentCategory].length >= quizQuestions[currentCategory].length * 0.8) {
        console.log('Warning: Most questions in this category have been asked, loading additional questions.');
        
        // Check if we have additional questions available for the current category
        if (currentCategory === 'sports' && typeof moreSportsQuestions !== 'undefined') {
            console.log('Adding more sports questions to prevent repetition');
            
            // Add the additional sports questions to the main quiz questions
            if (!quizQuestions.sportsExtended) {
                quizQuestions.sportsExtended = [...moreSportsQuestions];
                
                // Replace the current category with the extended version
                currentCategory = 'sportsExtended';
                
                // Initialize tracking for this new category
                askedQuestions[currentCategory] = [];
            }
        } else if (currentCategory === 'general' && typeof moreGeneralQuestions !== 'undefined') {
            console.log('Adding more general knowledge questions to prevent repetition');
            
            // Add the additional general questions to the main quiz questions
            if (!quizQuestions.generalExtended) {
                quizQuestions.generalExtended = [...moreGeneralQuestions];
                
                // Replace the current category with the extended version
                currentCategory = 'generalExtended';
                
                // Initialize tracking for this new category
                askedQuestions[currentCategory] = [];
            }
        } else if (currentCategory === 'science' && typeof moreScienceQuestions !== 'undefined') {
            console.log('Adding more science questions to prevent repetition');
            
            // Add the additional science questions to the main quiz questions
            if (!quizQuestions.scienceExtended) {
                quizQuestions.scienceExtended = [...moreScienceQuestions];
                
                // Replace the current category with the extended version
                currentCategory = 'scienceExtended';
                
                // Initialize tracking for this new category
                askedQuestions[currentCategory] = [];
            }
        } else if (currentCategory === 'history' && typeof moreHistoryQuestions !== 'undefined') {
            console.log('Adding more history questions to prevent repetition');
            
            // Add the additional history questions to the main quiz questions
            if (!quizQuestions.historyExtended) {
                quizQuestions.historyExtended = [...moreHistoryQuestions];
                
                // Replace the current category with the extended version
                currentCategory = 'historyExtended';
                
                // Initialize tracking for this new category
                askedQuestions[currentCategory] = [];
            }
        } else if (currentCategory === 'geography' && typeof moreGeographyQuestions !== 'undefined') {
            console.log('Adding more geography questions to prevent repetition');
            
            // Add the additional geography questions to the main quiz questions
            if (!quizQuestions.geographyExtended) {
                quizQuestions.geographyExtended = [...moreGeographyQuestions];
                
                // Replace the current category with the extended version
                currentCategory = 'geographyExtended';
                
                // Initialize tracking for this new category
                askedQuestions[currentCategory] = [];
            }
        } else if (currentCategory === 'entertainment' && typeof moreEntertainmentQuestions !== 'undefined') {
            console.log('Adding more entertainment questions to prevent repetition');
            
            // Add the additional entertainment questions to the main quiz questions
            if (!quizQuestions.entertainmentExtended) {
                quizQuestions.entertainmentExtended = [...moreEntertainmentQuestions];
                
                // Replace the current category with the extended version
                currentCategory = 'entertainmentExtended';
                
                // Initialize tracking for this new category
                askedQuestions[currentCategory] = [];
            }
        } else {
            // For other categories or if no additional questions are available
            // As a fallback, we'll have to reset the tracking, but log a warning
            console.warn('Not enough unique questions for all rounds. Some questions will repeat.');
            askedQuestions[currentCategory] = [];
        }
    }
    
    // Get available questions (those not yet asked in this game)
    const availableQuestions = quizQuestions[currentCategory].filter((_, index) => 
        !askedQuestions[currentCategory].includes(index)
    );
    
    // Get a random question from the available questions
    const randomAvailableIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomAvailableIndex];
    
    // Find the original index of this question in the full category array
    const originalIndex = quizQuestions[currentCategory].findIndex(q => q.question === selectedQuestion.question);
    
    // Add this question to the asked questions tracking
    askedQuestions[currentCategory].push(originalIndex);
    
    // Set the current question
    currentQuestion = selectedQuestion;
    
    // Display the question and answers
    questionText.textContent = currentQuestion.question;
    
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const button = document.getElementById(`answer-${i}`);
        button.textContent = currentQuestion.answers[i];
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
    }
    
    // Reset speed indicators
    speedIndicators.forEach(indicator => {
        if (indicator) indicator.classList.remove('active');
    });
    if (speedBonusDisplay) speedBonusDisplay.innerHTML = 'Speed Bonus: <span>0</span>';
    
    // Start the timer
    timeLeft = 10;
    timerDisplay.textContent = timeLeft;
    
    if (timer) clearInterval(timer);
    
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        // Update speed indicators based on time left
        updateSpeedIndicators();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

function updateSpeedIndicators() {
    // Calculate how many speed bars to show based on time left
    // More time left = more speed bars active
    const speedLevel = Math.min(5, Math.ceil(timeLeft / 2));
    
    // Update the speed bars
    speedIndicators.forEach((indicator, index) => {
        if (indicator) {
            if (index < speedLevel) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        }
    });
}


function handleAnswer(answerIndex) {
    // Prevent multiple answers
    if (answerProcessing) return;
    
    // Set flag to indicate we're processing an answer
    answerProcessing = true;
    
    // Stop the timer
    clearInterval(timer);
    
    // Disable all answer buttons
    answerButtons.forEach(button => button.disabled = true);
    
    // Check if the answer is correct
    const isCorrect = (answerIndex === currentQuestion.correctAnswer);
    
    // Highlight the correct and incorrect answers
    answerButtons[currentQuestion.correctAnswer].classList.add('correct');
    if (!isCorrect) {
        answerButtons[answerIndex].classList.add('incorrect');
    }
    
    // Update score and tokens based on answer
    if (isCorrect) {
        // Calculate speed bonus multiplier (faster = higher multiplier)
        const speedMultiplier = calculateSpeedMultiplier(timeLeft);
        
        // Calculate base points and apply speed multiplier
        const basePoints = 10;
        const speedBonus = Math.floor(basePoints * speedMultiplier) - basePoints;
        const totalPoints = basePoints + speedBonus;
        
        // Update score
        players[currentPlayer].score += totalPoints;
        
        // Track score for the current round
        if (!players[currentPlayer].roundScores[currentRound-1]) {
            players[currentPlayer].roundScores[currentRound-1] = 0;
        }
        players[currentPlayer].roundScores[currentRound-1] += totalPoints;
        
        // Log the updated round scores for debugging
        console.log(`Round ${currentRound} scores:`, {
            [players[0].name]: players[0].roundScores[currentRound-1] || 0,
            [players[1].name]: players[1].roundScores[currentRound-1] || 0
        });
        
        // Award tokens based on speed (faster = more tokens)
        const tokensAwarded = Math.max(1, Math.ceil(timeLeft / 3));
        players[currentPlayer].tokens += tokensAwarded;
        
        // Deduct token from opponent
        const opponentIndex = currentPlayer === 0 ? 1 : 0;
        players[opponentIndex].tokens = Math.max(0, players[opponentIndex].tokens - 1);
        
        // Update the display
        if (currentPlayer === 0) {
            player1Score.textContent = players[0].score;
            player1Tokens.textContent = players[0].tokens;
            player2Tokens.textContent = players[1].tokens;
        } else {
            player2Score.textContent = players[1].score;
            player2Tokens.textContent = players[1].tokens;
            player1Tokens.textContent = players[0].tokens;
        }
        
        // Display speed bonus information
        if (speedBonusDisplay) {
            speedBonusDisplay.innerHTML = `Speed Bonus: <span>+${speedBonus}</span> points, <span>+${tokensAwarded}</span> tokens`;
            speedBonusDisplay.style.display = 'block';
        }
    }
    
    // Wait a moment to show the result, then move to next question or end game
    setTimeout(() => {
        // Check if game should end (one player has no tokens or max rounds reached and both players completed their streaks)
        if (players[0].tokens === 0 || players[1].tokens === 0 || 
            (currentRound > totalRounds) || 
            (currentRound === totalRounds && currentPlayer === 1 && players[currentPlayer].questionsInStreak >= questionsPerStreak - 1)) {
            endGame();
            return;
        }
        
        // Increment questions in streak for current player
        players[currentPlayer].questionsInStreak++;
        
        // Check if player has completed their streak
        if (players[currentPlayer].questionsInStreak >= questionsPerStreak) {
            // Reset streak counter
            players[currentPlayer].questionsInStreak = 0;
            
            // Switch to next player
            currentPlayer = currentPlayer === 0 ? 1 : 0;
            updateTurnIndicator();
            
            // If we've gone through both players, increment the round
            if (currentPlayer === 0) {
                // Store the scores from the previous round
                if (currentRound > 0) {
                    players[0].roundScores[currentRound-1] = players[0].roundScores[currentRound-1] || 0;
                    players[1].roundScores[currentRound-1] = players[1].roundScores[currentRound-1] || 0;
                }
                
                currentRound++;
                currentRoundDisplay.textContent = currentRound;
                
                // Initialize scores for the new round
                players[0].roundScores[currentRound-1] = 0;
                players[1].roundScores[currentRound-1] = 0;
            }
        }
        
        // Reset the answer processing flag before loading next question
        answerProcessing = false;
        
        // Load next question
        loadQuestion();
    }, 2000); // 2 second delay
}

function handleTimeOut() {
    // Set flag to indicate we're processing an answer
    answerProcessing = true;
    
    // Disable all answer buttons
    answerButtons.forEach(button => button.disabled = true);
    
    // Highlight the correct answer
    answerButtons[currentQuestion.correctAnswer].classList.add('correct');
    
    // No points awarded for timeout
    // Deduct a token from current player for timeout
    players[currentPlayer].tokens = Math.max(0, players[currentPlayer].tokens - 1);
    
    // Update the display
    if (currentPlayer === 0) {
        player1Tokens.textContent = players[0].tokens;
    } else {
        player2Tokens.textContent = players[1].tokens;
    }
    
    // Wait a moment, then move to next question or end game
    setTimeout(() => {
        // Check if game should end
        if (players[0].tokens === 0 || players[1].tokens === 0 || 
            (currentRound > totalRounds) || 
            (currentRound === totalRounds && currentPlayer === 1 && players[currentPlayer].questionsInStreak >= questionsPerStreak - 1)) {
            endGame();
            return;
        }
        
        // Increment questions in streak for current player
        players[currentPlayer].questionsInStreak++;
        
        // Check if player has completed their streak
        if (players[currentPlayer].questionsInStreak >= questionsPerStreak) {
            // Reset streak counter
            players[currentPlayer].questionsInStreak = 0;
            
            // Switch to next player
            currentPlayer = currentPlayer === 0 ? 1 : 0;
            updateTurnIndicator();
            
            // If we've gone through both players, increment the round
            if (currentPlayer === 0) {
                // Store the scores from the previous round
                if (currentRound > 0) {
                    players[0].roundScores[currentRound-1] = players[0].roundScores[currentRound-1] || 0;
                    players[1].roundScores[currentRound-1] = players[1].roundScores[currentRound-1] || 0;
                }
                
                currentRound++;
                currentRoundDisplay.textContent = currentRound;
                
                // Initialize scores for the new round
                players[0].roundScores[currentRound-1] = 0;
                players[1].roundScores[currentRound-1] = 0;
            }
        }
        
        // Reset the answer processing flag before loading next question
        answerProcessing = false;
        
        // Load next question
        loadQuestion();
    }, 2000); // 2 second delay
}

function updateTurnIndicator() {
    const questionsLeft = questionsPerStreak - players[currentPlayer].questionsInStreak;
    
    if (currentPlayer === 0) {
        player1Turn.classList.add('active');
        player2Turn.classList.remove('active');
        player1Turn.textContent = `${players[0].name}'s Turn (${questionsLeft} questions left)`;
        player2Turn.textContent = `${players[1].name}'s Turn`;
    } else {
        player1Turn.classList.remove('active');
        player2Turn.classList.add('active');
        player1Turn.textContent = `${players[0].name}'s Turn`;
        player2Turn.textContent = `${players[1].name}'s Turn (${questionsLeft} questions left)`;
    }
}

function endGame() {
    // Stop the game
    gameActive = false;
    clearInterval(timer);
    
    // Determine the winner
    let winnerIndex;
    if (players[0].tokens === 0) {
        winnerIndex = 1; // Player 2 wins if Player 1 has no tokens
    } else if (players[1].tokens === 0) {
        winnerIndex = 0; // Player 1 wins if Player 2 has no tokens
    } else {
        // If max rounds reached, winner is the one with more tokens
        // If tokens are equal, winner is the one with higher score
        if (players[0].tokens > players[1].tokens) {
            winnerIndex = 0;
        } else if (players[1].tokens > players[0].tokens) {
            winnerIndex = 1;
        } else {
            // If tokens are equal, check score
            winnerIndex = players[0].score >= players[1].score ? 0 : 1;
        }
    }
    
    // Update results display
    winnerText.textContent = `${players[winnerIndex].name} Wins!`;
    resultPlayer1Name.textContent = players[0].name;
    resultPlayer2Name.textContent = players[1].name;
    resultPlayer1Score.textContent = players[0].score;
    resultPlayer2Score.textContent = players[1].score;
    resultPlayer1Tokens.textContent = players[0].tokens;
    resultPlayer2Tokens.textContent = players[1].tokens;
    
    // Create round-by-round score breakdown
    const scoreBreakdownDiv = document.getElementById('score-breakdown');
    scoreBreakdownDiv.innerHTML = '';
    
    // Create header
    const headerRow = document.createElement('div');
    headerRow.className = 'breakdown-row header';
    headerRow.innerHTML = `
        <div class="breakdown-cell">Round</div>
        <div class="breakdown-cell">${players[0].name}</div>
        <div class="breakdown-cell">${players[1].name}</div>
    `;
    scoreBreakdownDiv.appendChild(headerRow);
    
    // Add rows for each round
    const maxRounds = Math.max(currentRound, players[0].roundScores.length, players[1].roundScores.length);
    for (let i = 0; i < maxRounds; i++) {
        const roundRow = document.createElement('div');
        roundRow.className = 'breakdown-row';
        roundRow.innerHTML = `
            <div class="breakdown-cell">Round ${i+1}</div>
            <div class="breakdown-cell">${players[0].roundScores[i] || 0}</div>
            <div class="breakdown-cell">${players[1].roundScores[i] || 0}</div>
        `;
        scoreBreakdownDiv.appendChild(roundRow);
    }
    
    // Show results screen
    gameAreaSection.classList.add('hidden');
    gameResultsSection.classList.remove('hidden');
}

function resetGame() {
    // Reset game state
    players = [
        { name: '', score: 0, tokens: 0, questionsInStreak: 0, roundScores: [] },
        { name: '', score: 0, tokens: 0, questionsInStreak: 0, roundScores: [] }
    ];
    currentCategory = '';
    currentRound = 0;
    currentPlayer = 0;
    currentQuestion = null;
    gameActive = false;
    
    // Reset asked questions tracking for a completely fresh game
    askedQuestions = {};
    
    if (timer) clearInterval(timer);
    
    // Reset speed indicators
    speedIndicators.forEach(indicator => {
        if (indicator) indicator.classList.remove('active');
    });
    if (speedBonusDisplay) speedBonusDisplay.innerHTML = 'Speed Bonus: <span>0</span>';
    
    // Show setup screen
    gameResultsSection.classList.add('hidden');
    gameAreaSection.classList.add('hidden');
    gameSetupSection.classList.remove('hidden');
}

function calculateSpeedMultiplier(timeRemaining) {
    // Calculate a multiplier based on time remaining
    // 10 seconds = 2.0x multiplier
    // 5 seconds = 1.5x multiplier
    // 1 second = 1.1x multiplier
    // 0 seconds = 1.0x multiplier
    return 1 + (timeRemaining / 10);
}