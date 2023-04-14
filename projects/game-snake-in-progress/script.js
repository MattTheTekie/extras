// v.1.0.0


/*
var x = 200;
var y = 200;
*/

var x = 1;
var y = 1;
var x2 = 10;
var y2 = 10;

var lDirection = ['up', 'down', 'left', 'right'];
var lStartPos = [randomIntFromInterval(24, 67), randomIntFromInterval(24, 67), lDirection[randomIntFromInterval(0, 3)]];




var currentPosGo2 = [];
currentPosGo2[0] = randomIntFromInterval(24, 67);

var currentPos = randomIntFromInterval(24, 67);

function lDrawGrid(currentPosGo){
document.getElementById("result").innerHTML = ``;


currentPosGoDirection = currentPosGo[2];


console.log(currentPosGoDirection);
switch(currentPosGoDirection) {

case 'up':
currentPosGo2[0] = currentPosGo2[0] - 10;
break;

case 'down':
currentPosGo2[0] = currentPosGo2[0] + 10;
break;

case 'left':
currentPosGo2[0] = currentPosGo2[0] - 1;
break;

case 'right':
currentPosGo2[0] = currentPosGo2[0] + 1;
break;

case 'stop':
case 'gameOver':
currentPosGo2[0] = currentPosGo2[0];
break;


default:
}

console.log(currentPosGo2[0]);

x = 1;
y = 1;
x2 = 10;
y2 = 10;

var i = 1;
var row = 0;
while (i <= x2 * y2) {

//if(i % 5 == 1){ document.getElementById("result").innerHTML += `<br>`; }
if(row == x2){ row = 0; document.getElementById("result").innerHTML += `<br>`; }






// grid
switch(i) {

case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:

case 11:
case 21:
case 31:
case 41:
case 51:
case 61:
case 71:
case 81:

case 20:
case 30:
case 40:
case 50:
case 60:
case 70:
case 80:
case 90:

case 91:
case 92:
case 93:
case 94:
case 95:
case 96:
case 97:
case 98:
case 99:
case 100:

document.getElementById("result").innerHTML += `<square class="square">X${i}/${x}</square>`;
break;


case currentPosGo2[0]:
document.getElementById("result").innerHTML += `<square class="square">😋${i}/${x}</square>`;
break;

default:
document.getElementById("result").innerHTML += `<square class="square">${i}/${x}</square>`;
//document.getElementById("result").innerHTML += `<square class="square">${i}</square>`;
}

// game function
switch(currentPosGo2[0]) {

case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:

case 11:
case 21:
case 31:
case 41:
case 51:
case 61:
case 71:
case 81:

case 20:
case 30:
case 40:
case 50:
case 60:
case 70:
case 80:
case 90:

case 91:
case 92:
case 93:
case 94:
case 95:
case 96:
case 97:
case 98:
case 99:
case 100:

myStopFunction();
break;


case currentPosGo2[0]:
//document.getElementById("result").innerHTML += `<square class="square">😋${i}/${x}</square>`;
break;

default:

}




i++;
row++;
}

}

lDrawGrid(currentPosGo2[0]);

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}



function myStopFunction() {
  clearInterval(myInterval);
}



var myInterval = window.setInterval(function(){
lDrawGrid(lStartPos);
}, 1000);

intervalID = setInterval(lDrawGrid(), 1000);

