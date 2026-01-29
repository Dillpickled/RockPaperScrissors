body = document.querySelector('body');
modeButton = document.getElementById('light-dark-button');
rock = document.getElementById('rock');
paper = document.getElementById('paper');
scissors = document.getElementById('scissors');

/* Dark Mode Toggle */
modeButton.addEventListener('click', function changeMode() {
    body.classList.toggle('darkmode');
});

/* Game Logic */
/* 1 = Rock, 2 = Paper, 3 = Scissors */
function playGame(userChoice) {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if ((userChoice === 1 && computerChoice === 3) ||
               (userChoice === 2 && computerChoice === 1) ||
               (userChoice === 3 && computerChoice === 2)) {
        alert("You win!");
    } else {
        alert("Computer wins!");
    }
}