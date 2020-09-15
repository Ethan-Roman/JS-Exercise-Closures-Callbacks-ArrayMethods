// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 1. What is the difference between counter1 and counter2?
 * counter 1 is set in the innerscope of a function.
 * counter2 has count in the global scope.
 * 2. Which of the two uses a closure? How can you tell?
 * counter2 is a closure because it has to reach out of local scopoe to access information.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter1 would be used when you need the information on a local scale.
 *counter2 would be used when you need to have the information on a global scale.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */



function inning(){
  return Math.floor(Math.random()*3);

}
console.log('The-team-scored', inning(), 'points.');
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb , numofInnings){
  let teamBlue = 0;
  let teamRed = 0;

  for (let i = 0; i < numofInnings; i++ ) {
    teamBlue = teamBlue + cb();
    teamRed = teamRed + cb();
  }
  let finalScore = {home: teamBlue, away: teamRed}
  return finalScore;

}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

// function scoreboard(cb, cb2, numOfInnings) {
//   const container = []
//   let counter;
//   for (let counter = 1; counter < numOfInnings+1; counter++) {
//     if(counter == 1){
//        container.push(`${counter}st`, {homeTeam:cb(), awayTeam: cb()})
//     } else if (counter === 2){
//       container.push(`${counter}nd inning: `, {homeTeam:cb(), awayTeam: cb()})
//     } else if (counter === 3){
//       container.push(`${counter}rd inning: `, {homeTeam:cb(), awayTeam: cb()})
//     } else {
//       container.push(`${counter}th inning: `, {homeTeam:cb(), awayTeam: cb()})
//     }
//  }
//   container.push(`Final score: ?`;
//   return container
//  }
//  console.log("Scoreboard: ", scoreboard(inning, finalScore, 9));


function scoreboard(cb, cb2, numOfInnings){
  let container = [];
for (let i = 1; i < numOfInnings+1; i++){
  container.push({homeTeam:cb()}, `-`, {awayTeam: cb()})
  }
  return container;
}
console.log(inning,finalScore, 9)
