// v.1.3.0
// at the end was inspired by Google Clock

var secArr = [];
secArr[0] = 0;
var comArr = [];
comArr[0] = 'start';

var lStopArr = [];

function fuStopwatchCom(com){

if(com == 'pause'){ comArr[0] = 'pause'; }
if(com == 'stop'&&comArr[0] != 'pause'){ comArr[0] = 'stop'; }
if(com == 'continue'){ comArr[0] = 'continue'; }
if(com == 'refresh'){
secArr[0] = 0;  comArr[0] = 'refresh'; lStopArr = [];
document.getElementById('result3').innerHTML = '';
}

// https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
//fuStopwatch(com, sec);

if(comArr[0] != 'pause'){
document.getElementById('panel').innerHTML = `
<a class="padding margin" onclick="fuStopwatchCom('refresh')" href="#">refresh</a>
<a class="padding margin" onclick="fuStopwatchCom('pause')" href="#">pause</a>
<a class="padding margin" onclick="fuStopwatchCom('stop')" href="#">stop</a>
`;
}

if(comArr[0] == 'pause'){
document.getElementById('panel').innerHTML = `
<a class="padding margin" onclick="fuStopwatchCom('refresh')" href="#">refresh</a>
<a class="padding margin" onclick="fuStopwatchCom('continue')" href="#">continue</a>
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


if(comArr[0] != 'pause'){ secArr[0]++; }
if(comArr[0] == 'pause'){ sec = secArr[0]; }



let hours = normalize(Math.floor(sec / 3600));
let minutes = normalize(Math.floor(sec % 3600 / 60));
let seconds = normalize(Math.floor(sec % 3600 % 60));
//console.log(hours+' '+minutes+' '+seconds);

let time2 = Date.now();
time2 = new Date(time2);
let hours2 = normalize(time2.getHours());
let minutes2 = normalize(time2.getMinutes());
let seconds2 = normalize(time2.getSeconds());


if(comArr[0] == 'stop'){
let lResult = '';
lStopArr.push(hours+':'+minutes+':'+seconds);
document.getElementById('result3').innerHTML = '';
//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
lStopArr.sort().reverse().forEach((element) => {
lResult += 
`
<span>${element}</span>
`;
});
document.getElementById('result3').innerHTML = `
<div class="scroll wrapper3 padding op lPrint3">${lResult}</div>
`;
comArr[0] = 'stoped';




//chart
var chartTitle = '';
var chartData = '';
//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
lStopArr.reverse().forEach((element, index) => {
//https://stackoverflow.com/questions/7709803/javascript-get-minutes-between-two-dates
var element33 = Math.abs(new Date('2011/10/09 '+lStopArr[index]) - new Date('2011/10/09 '+lStopArr[index + 1]));

//https://www.w3schools.com/jsref/jsref_isNaN.asp
if(!isNaN(element33)){
element33 = Math.floor((element33/1000));
chartTitle += new String(element33)+',';
chartData += new String(element33)+',';
}


});



if(chartData != ''){
//https://stackoverflow.com/questions/17720264/remove-last-comma-and-possible-whitespaces-after-the-last-comma-from-the-end-o
chartTitle = new String(chartTitle).replace(/,\s*$/, "");
chartData = new String(chartTitle).replace(/,\s*$/, "");

document.getElementById('chart').innerHTML = `
<img src="https://quickchart.io/chart?c=%7Btype:%27bar%27,data:%7Blabels:[${chartTitle}],datasets:[%7Blabel:%27Users%27,data:[${chartData}]%7D]%7D%7D" width="500" alt="chart">
`;

}







}

document.getElementById('result').innerHTML = hours+':'+minutes+':'+seconds;
//document.getElementById('result2').innerHTML = hours2+':'+minutes2; // result 2 standart clock time
document.getElementsByTagName('title')[0].innerHTML = hours+':'+minutes+':'+seconds;



}




