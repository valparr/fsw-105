var readlineSync = require('readline-sync');
var playerName = readlineSync.question('May I have your name? ');

console.log("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ");
console.log("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ");


var welcomeMessage = `Hi there, ${playerName}, welcome to ESCAPE IT -----the escape room game simulation! `;
console.log(welcomeMessage);


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

var welcomeMessage = `HERE'S HOW TO PLAY:: \n You're locked in a room. \n In order to escape the room, you need to search and find the KEY to be able to open the door. \n Sounds simple right? Sure! \n But, BEWARE there's boobytraps hidden in the room that can be FATAL if activated! So BE CAREFUL and choose wisely! \n Goodluck, have fun and ESCAPE IT!! `;
console.log(welcomeMessage);



console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");



var isAlive = true;
var hasKey = false;

while(isAlive == true){
    const menuOptions = readlineSync.keyIn(' Enter 1 to Put hand in hole: \n Enter 2 to Find the key: \n Enter 3 to Open the door: ', {limit: '$<1-3>'});
    //console.log(menuOptions);
    //isAlive = false;
    if (menuOptions == 1){
        console.log(`Oh Noooo ${playerName}, you've ACTIVATED a BOOBYTRAP, you are now DEAD. GAME OVER!!!! :( `);
        isAlive = false;
    }
    else if (menuOptions == 2 && hasKey == false){
        //first time player chooses option 2
        console.log(` ${playerName}, you have found the key successfully! Proceed to option 3. `);
        hasKey = true; 
    }
    else if (menuOptions == 2 && hasKey == true){
        //Subsequent entry with option 2
        //Display a message that the player is waiting time and they need to proceed to option-3
        console.log(` ${playerName}, you have ALREADY found the key. Please proceed to option 3 asap!! `);
    }
    else if (menuOptions == 3 && hasKey == false){
        //first time player chooses option 2, and has NOT found the key 
        console.log(` ${playerName}, unfortunately, you do not possess the key, please find the key first...then continue!`);
    }
    else if (menuOptions == 3 && hasKey == true){
        //player choose option 3 and has FOUND the key
        console.log(` ${playerName}, yayyy! YOU FOUND THE KEY, opened the door, and YOU ESCAPED the game room successfully!! CONGRATULATIONS!!! YOU ESCAPED!!! `);
        isAlive = false;
    }
}
