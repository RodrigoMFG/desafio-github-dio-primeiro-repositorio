let raceNumber = Math.floor(Math.random() * 1000); //RNG
let earlyRegister = true;
let runnerAge = 19;

if(runnerAge > 18 && earlyRegister){
  raceNumber += 1000;
}

if(runnerAge === 18){
  console.log('Go see the Registration Desk, please.')
} else if (runnerAge > 18 && earlyRegister){
  console.log(`Your race starts at 9:30 am and your number is ${raceNumber}`);
} else if(runnerAge > 18 && !earlyRegister){
  console.log(`Late adults run at 11:00 am and you number is ${raceNumber}`);
} else{
  console.log(`Youth registrants run at 12:30 pm (regardless of registration) and your number is ${raceNumber}`);
}