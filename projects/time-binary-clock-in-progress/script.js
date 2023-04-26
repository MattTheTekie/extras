// v.1.0.2

function fuClock(id){

function normalize(a){
if(a <= 9){ a = '0'+a; }
return a;
}

function normalize2(a){

console.log(a.length);

switch (a.length) {


case 1:
a = '000'+a;
break;

case 2:
a = '00'+a;
break;

case 3:
a = '0'+a;
break;

default:
//a = "Switch default";
}

return a;
}

//console.log(Date.now().tostring().getMinutes());
let time = Date.now();
time = new Date(time);
let hours = normalize(time.getHours());
let minutes = normalize(time.getMinutes());
let seconds = normalize(time.getSeconds());
//console.log(hours+' '+minutes+' '+seconds);

//https://www.w3schools.com/jsref/jsref_tostring_number.asp
/*document.getElementById('result').innerHTML = 
normalize2(Number(hours.toString()[0]).toString(2))+','+normalize2(Number(hours.toString()[1]).toString(2))+' : '+
normalize2(Number(minutes.toString()[0]).toString(2))+','+normalize2(Number(minutes.toString()[1]).toString(2))+' : '+
normalize2(Number(seconds.toString()[0]).toString(2))+','+normalize2(Number(seconds.toString()[1]).toString(2))
;*/

var print = 
normalize2(Number(hours.toString()).toString(2))+' : '+
normalize2(Number(minutes.toString()).toString(2))+' : '+
normalize2(Number(seconds.toString()).toString(2))
;

document.getElementById('result').innerHTML = print;

document.getElementById('result2').innerHTML = '<div class="block small padding margin block tCenter">'+hours+':'+minutes+':'+seconds+'</div></div>';
document.getElementsByTagName('title')[0].innerHTML = print;
}

setInterval(fuClock, 1000);
