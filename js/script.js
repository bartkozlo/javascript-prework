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

let playerInput = prompt('Your turn! 1: stone, 2: paper, 3: scissors.');

console.log('Player choose: ' + playerInput);

let playerMove = 'unknown choose';

if(playerInput == '1'){
  playerMove = 'stone';
}

else if(playerInput == '2'){
  playerMove = 'paper';
}

else if(playerInput == '3'){
  playerMove = 'scissors';
}

printMessage('Your choose: ' + playerMove);