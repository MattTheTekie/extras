// v.1.1.0




var secArr = [];
secArr[0] = 0;
var comArr = [];
comArr[0] = 'start';


if(comArr[0] != 'stop'){
document.getElementById('panel').innerHTML = `
<a class="padding margin" onclick="fuStopwatchCom('stop')" href="#">stop</a>
<a class="padding margin" onclick="fuStopwatchCom('refresh')" href="#">refresh</a>
`;
}

if(comArr[0] == 'stop'){
document.getElementById('panel').innerHTML = `
<a class="padding margin" onclick="fuStopwatchCom('continue')" href="#">continue</a>
<a class="padding margin" onclick="fuStopwatchCom('refresh')" href="#">refresh</a>
`;
}

function fuStopwatchCom(com){
if(com == 'stop'){ comArr[0] = 'stop'; }
if(com == 'continue'){ comArr[0] = 'continue'; }
if(com == 'refresh'){ secArr[0] = 0;  comArr[0] = 'refresh'; }
// https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
//fuStopwatch(com, sec);

if(comArr[0] != 'stop'){
document.getElementById('panel').innerHTML = `
<a class="padding margin" onclick="fuStopwatchCom('stop')" href="#">stop</a>
<a class="padding margin" onclick="fuStopwatchCom('refresh')" href="#">refresh</a>
`;
}

if(comArr[0] == 'stop'){
document.getElementById('panel').innerHTML = `
<a class="padding margin" onclick="fuStopwatchCom('continue')" href="#">continue</a>
<a class="padding margin" onclick="fuStopwatchCom('refresh')" href="#">refresh</a>
`;
}

}


fuStopwatchCom('start', 0);
setInterval(fuStopwatch, 1000);







var sec = 0;

function normalize(a){
if(a <= 9){ a = '0'+a; }
return a;
}


function fuStopwatch(){

sec = secArr[0];


if(comArr[0] != 'stop'){ secArr[0]++; }

if(comArr[0] == 'stop'){ sec = secArr[0]; }



let hours = normalize(Math.floor(sec / 3600));
let minutes = normalize(Math.floor(sec % 3600 / 60));
let seconds = normalize(Math.floor(sec % 3600 % 60));
//console.log(hours+' '+minutes+' '+seconds);

let time2 = Date.now();
time2 = new Date(time2);
let hours2 = normalize(time2.getHours());
let minutes2 = normalize(time2.getMinutes());
let seconds2 = normalize(time2.getSeconds());


document.getElementById('result').innerHTML = hours+':'+minutes+':'+seconds;
//document.getElementById('result2').innerHTML = hours2+':'+minutes2; // result 2 standart clock time
document.getElementsByTagName('title')[0].innerHTML = hours+':'+minutes+':'+seconds;





// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/switch






}




