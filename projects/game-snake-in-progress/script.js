// v.1.0.0


/*
var x = 200;
var y = 200;
*/



var iSnakeArr = [];

var currentDirection = ['up', 'down', 'left', 'right'];
currentDirection[0] = currentDirection[randomIntFromInterval(0, 3)];

var currentPosition = [];
currentPosition[0] = randomIntFromInterval(43, 48);


function lDrawGrid(){
// clear for redrawing 
document.getElementById("result").innerHTML = ``;

console.log(currentDirection[0]);
switch(currentDirection[0]) {

case 'up':
currentPosition[0] = currentPosition[0] - 10;
break;

case 'down':
currentPosition[0] = currentPosition[0] + 10;
break;

case 'left':
currentPosition[0] = currentPosition[0] - 1;
break;

case 'right':
currentPosition[0] = currentPosition[0] + 1;
break;

case 'stop':
case 'gameOver':
currentPosition[0] = currentPosition[0];
break;


default:
}


console.log(currentPosition[0]);


var i = 1;
var row = 0;
while (i <= 100) {

//if(i % 5 == 1){ document.getElementById("result").innerHTML += `<br>`; }
if(row == 10){ row = 0; document.getElementById("result").innerHTML += `<br>`; }


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

document.getElementById("result").innerHTML += `<square id="${i}" class="square" style="background-color: var(--d2);">X${i}</square>`;
break;


default:
document.getElementById("result").innerHTML += `<square id="${i}" class="square">${i}</square>`;
//document.getElementById("result").innerHTML += `<square class="square">${i}</square>`;
}

i++;
row++;
}


// game function
switch(currentPosition[0]) {

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

document.getElementById(currentPosition[0]).innerHTML += `😋${currentPosition[0]}`;

direction = 'stop';

myStopFunction();
break;


case currentPosition[0]:

console.log(currentPosition[0]);
document.getElementById(currentPosition[0]).innerHTML += `😋${currentPosition[0]}`;
break;

default:

}








iSnakeArr.push(currentPosition[0]);
console.log(iSnakeArr);

}



//https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
const input = document.querySelector("body");

input.addEventListener("keypress", logKey);

function logKey(e) {
console.log(` ${e.code}`)
if(e.code == 'KeyW'){ currentDirection[0] = 'up'; }
if(e.code == 'KeyS'){ currentDirection[0] = 'down'; }
if(e.code == 'KeyA'){ currentDirection[0] = 'left'; }
if(e.code == 'KeyD'){ currentDirection[0] = 'right'; }
console.log(currentDirection[0]);
}














lDrawGrid(currentPosition[0]);

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}



function myStopFunction() {
  clearInterval(myInterval);
}



var myInterval = window.setInterval(function(){
lDrawGrid();
}, 1000);

intervalID = setInterval(lDrawGrid(), 1000);

