let userName = 'jão'; // input the user's name
let userQuestion = 'Am i going to be rich?;' // input the user's question
let eightBall = ''; // create a variable for the eightball answer
let randomNumber = Math.floor(Math.random()*8); //generate a random number between 0 and 7

userName ? console.log(`Hello, ${userName}!`): 
  console.log('Hello!');

if(userQuestion){ console.log(`You asked \"${userQuestion}" and the Answer is:`);
switch (randomNumber) {
  case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
    console.log('Reply hazy try again');
    break;
  case 4:
    console.log('Cannot predict now');
    break;
  case 5:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not so good');
    break;
  case 0:
    console.log('Signs point to yes');
    break;
}
} else {
  console.log('You need to ask a Question!');
}




