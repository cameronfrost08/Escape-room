var readlineSync=require('readline-sync');
var playerName=readlineSync.question('May I have your name')

var openingMessasge= ', ${playerName} Welcome to the jungle Javascript escape room if you do not escape you will be deeply sorry!!! ';
console.log(openingMessasge);

var hasLife=true;
var haskey=false;

while (hasLife==true){
    var menuID = readlineSync.keyIn('Press 1 to put you had into the hole \n Press 2 to find the keyor \n Press 3 to open the door:', {limit: '$<1-3>'});
    if (menuID==1){
        //you press option 1 you are now dead
        console.log( `${playerName}, 'you presses option 1, you are now dead :( Game Over`);
        hasLife=false;
    }
    else if (menuID==2 && haskey==false){
        console.log(`${playerName}, you have found the key, You may now go to option 3`);
        haskey=true
    }
    else if (menuID==2 && haskey == true){
console.log(`${playerName}, You must find the key first`);
    }
    else if (menuID==3 && haskey==false){
        console.log(`${playerName}, You must find the key first`);
    }
    else if (menuID==3 && haskey==true){
        console.log(`${playerName}, You have found the key walk through the door. Game over congratulations`);
    }

}
console.log(readlineSync,playerName);
//readline, node