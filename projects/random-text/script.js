// v.1.0.1

var  geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");
if(q == null){ q = 500; }

let letter = "      abcdefghijklmnopqrstuvwxyz";
letter = [...letter];


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}



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
let sentence = parseInt(getRandomArbitrary(75, 100));
let arr2 = [];
let count = 0;
let check = true;
arr.forEach((element, index) => {

if(parseInt(getRandomArbitrary(1, 2)) == parseInt(getRandomArbitrary(1, 400))&&index >= 200&&arr[index] != ' '&&check == true){
arr[index] = `.

 `+arr[index].toUpperCase();
check = false;
}


if(parseInt(getRandomArbitrary(1, 2)) == parseInt(getRandomArbitrary(1, 30))&&index >= 20&&arr[index] != ' '&&check == true){
arr[index] = ', '+arr[index];
check = false;
}


if(count == sentence&&arr[index] != ' '&&check == true){
arr[index] = arr[index]+'. '+arr[index].toUpperCase();
count = 0;
check = false;
}

check = true;

count++;
});

//arr = arr2;

arr = (arr.join("")).trim();
arr = [...arr];
arr[0] = ' '+arr[0].toUpperCase();

let result = '';
result = arr.join("");




return result;
}

letter = dublicate(letter, q);

shuffle(letter);
result = printarr(letter);
result = cuttext(result, q);

result = result.replace(/ +(?= )/g,'');

result = result.concat('.');

document.getElementById("letter").innerHTML = result; 


result = '';
var nav = "500,1000,2000,3000,5000,10000,100000";
nav = nav.split(",");
for(let i = 0; i < nav.length; i++){
if(q == nav[i]){
result += '<span class="button">'+nav[i]+'</span>';
}else{
result += '<a class="button brand" href="?q='+nav[i]+'">'+nav[i]+'</a>';
}
}

document.getElementById("q").innerHTML = `
<a class="button brand" href="#" onclick="reload();">reload</a> ~ :
`+result; 



//https://stackoverflow.com/questions/45071353/copy-text-string-on-click
const span = document.getElementById("lText");

span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
document.getElementById("lMsg").innerHTML = 'text copied';
  console.log(event.clipboardData.getData("text"))
  }
});
