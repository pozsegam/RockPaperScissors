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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper, Scissors?")
        let res =  round(computerSelection, playerSelection);
        console.log(res);
        if(res === 1) playerScore++;
        if (res ===0)computerScore++;
        
    }   
    console.log("Computer:" + computerScore);
    console.log("You:" + playerScore);
    if(playerScore>computerScore) return "YAAAY, You Win!"
    else if (playerScore === computerScore) return "Draw! :|"
    else return "You Lose... :( "
}


console.log(game());

