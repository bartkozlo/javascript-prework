let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('The drawn number is: ' + randomNumber);

let computerMove = 'unknown choose';

if(randomNumber == 1){
  computerMove = 'stone';
}

else if(randomNumber == 2){
  computerMove = 'paper';
}

else if(randomNumber == 3){
  computerMove = 'scissors';
}

printMessage('I choose: ' + computerMove);