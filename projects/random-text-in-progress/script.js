// v.1.1.0

var  geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");
if(q == null){ q = 500; }

let letter = "abcdefghijklmnopqrstuvwxyz";
letter = [...letter];





// https://medium.com/@khaledhassan45/how-to-shuffle-an-array-in-javascript-6ca30d53f772
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
return arr;
}

function dublicate(arr, n) {
b = [];
for(var x = 0; x < n; ++x){
for(var i = 0; i < arr.length; ++i){
b.push(arr[i]);
}
}
return arr = b;
}

function cuttext(text, n){ return  text = text.substr(0, n); }

function printarr(arr){
let result = '';
for(let i = 0; i < arr.length; i++){
result += arr[i];
}
return result;
}

letter = dublicate(letter, q);

shuffle(letter);
result = printarr(letter);
result = cuttext(result, q);
document.getElementById("letter").innerHTML = result; 


result = '';
var nav = "100,300,500,1000,10000";
nav = nav.split(",");
for(let i = 0; i < nav.length; i++){
if(q == nav[i]){
result += '<span class="button">'+nav[i]+'</span>';
}else{
result += '<a class="button brand" href="?q='+nav[i]+'">'+nav[i]+'</a>';
}
}

document.getElementById("q").innerHTML = result; 
