function randomInt(max){
    return Math.floor(Math.random() * max);
}

function computerPlay(){
    switch(randomInt(3)){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function round(computerSelection, playerSelection){
    if(computerSelection === 'rock' && playerSelection.toLowerCase()=== 'scissors')
        return 0;
    else if(computerSelection === 'rock' && playerSelection.toLowerCase()=== 'paper')
        return 1;
    else if(computerSelection === 'rock' && playerSelection.toLowerCase()=== 'rock')
        return 2;
    else if(computerSelection === 'paper' && playerSelection.toLowerCase()=== 'scissors')
        return 1;
    else if(computerSelection === 'paper' && playerSelection.toLowerCase()=== 'paper')
        return 2;
    else if(computerSelection === 'paper' && playerSelection.toLowerCase()=== 'rock')
        return 0;
    else if(computerSelection === 'scissors' && playerSelection.toLowerCase()=== 'scissors')
        return 2;
    else if(computerSelection === 'scissors' && playerSelection.toLowerCase()=== 'paper')
        return 0;
    else if(computerSelection === 'scissors' && playerSelection.toLowerCase()=== 'rock')
        return 1;
}


function play(event ){
        //reset();
        eventDiv.textContent = "Let's go!";
        const compC = computerPlay();
        const res = round(compC,event);
        if(res === 1) {
            playerScore++;
            rounds++;
            playerScoreDiv.textContent = "You: " + playerScore;
            eventDiv.textContent ="+1 for you!";
        }        
        if(res === 0) {
            computerScore++;
            rounds++;
            computerScoreDiv.textContent = "Computer: " + computerScore;
            eventDiv.textContent ="meh :(";
        }
        if(res === 2){
            rounds++;
            eventDiv.textContent ="Draw!";
        } 
        
        if(computerScore===5){
            computerScore = 0;
            computerScoreDiv.textContent = "Computer: " + computerScore;
            playerScore = 0;
            playerScoreDiv.textContent = "You: " + playerScore;
            rounds = 0;
            eventDiv.textContent ="You Lose!";
        }
         
        if(playerScore===5){
            computerScore = 0;
            computerScoreDiv.textContent = "Computer: " + computerScore;
            playerScore = 0;
            playerScoreDiv.textContent = "You: " + playerScore;
            rounds = 0;
            winStyling();
        }

    
   }   


function winStyling(){
    const playAgain = document.getElementById('playAgain');
    document.getElementById('win').style.visibility = 'visible'; 
    document.getElementById('hero').style.visibility = 'hidden';
    this.styclassName = 'hero_playAgain';
    playAgain.addEventListener('click', function(e){
        reset();
        play();
    });
}

function reset(){
    document.getElementById('win').style.visibility = 'hidden'; 
    document.getElementById('hero').style.visibility = 'visible';
}





const hero = document.getElementById('hero');
hero.classList.add('heroClass');

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', function (e) {
    play(e.target.id); 
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', function (e) {
    play(e.target.id); 
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', function (e) {
    play(e.target.id); 
});


let playerScore = 0;
let computerScore = 0;
let rounds = 0;

reset();


const scoreboard = document.getElementById('scoreBoard');
const eventDiv = document.getElementById('event');

let playerScoreDiv = document.createElement('div')
playerScoreDiv.textContent = "You: " + computerScore;


let computerScoreDiv = document.createElement('div')
computerScoreDiv.textContent = "Computer: " + computerScore;


scoreboard.appendChild(playerScoreDiv);
scoreboard.appendChild(computerScoreDiv);

