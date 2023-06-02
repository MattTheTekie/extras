// v.1.2.1

var limit = 10;
var rangeValue = 0;

var task = [];
var answer = [];
var mode = [];
mode[0] = 10;



var gameMode = '5,10,25,50,100,1000,10000,100000,1000000';
var printGameMode = '';

function modeSelect(mode33){

document.getElementById("number2").removeEventListener("input", updateValue);
document.getElementById("number2").addEventListener("input", updateValue);

(gameMode.split(',')).forEach((item) => {
if(mode33 != item){
printGameMode += `
<a class="brand button op" href="#" onclick="modeSelect('${item}')">${item}</a>
`;
}else{
mode[0] = mode33;
printGameMode += `
<a class="button" href="#" onclick="modeSelect('${item}')">${item}</a>
`;
}
});

document.getElementById("mode").innerHTML = printGameMode;
printGameMode = '';

document.getElementById("number2").innerHTML = `

<input id="number" class="tCenter" type="number" name="number" value="0" min="0" max="${mode}" autofocus="autofocus" required>

`;

document.getElementById("range2").innerHTML = `

<input id="range" class="slider" name="range" style="" value="0" type="range" min="0" max="${mode}" step="1" onmouseup="submit33();" ontouchend="submit33();">
</form>
`;

}

function start(){
if(answer[0] == undefined){ answer[0] = 0; }
https://www.w3schools.com/js/js_random.asp
// Returns a random integer from 0 to 9:
task[0] = Math.floor(Math.random() * mode[0]); 

if(task[0] == answer[0]){
document.getElementById("gameResult").innerHTML = `
<h3>
<span class="padding h3 orange bold">win</span><br>
<span class="green bold">${task[0]}</span> <span class="bold">==</span> <span class="green bold">${answer[0]}</span>
</h3>
<span class="op padding margin">(mode: 0-${mode[0]})</span>
<audio style="display:none" autoplay="false" src="/audio/win.ogg">
`;;
}else{
document.getElementById("gameResult").innerHTML = `
<h3>
<span class="padding h3 red bold">end</span><br>
<span class="green bold">${task[0]}</span> <span class="bold">!=</span> <span class="red bold">${answer[0]}</span>
</h3>
<span class="op padding margin">(mode: 0-${mode[0]})</span>
<audio style="display:none" autoplay="false" src="/audio/error.ogg">
`;
}


}

var print = `

<div class="center2">
<div class="wrapperS">

<div id="gameResult" class="block tCenter"></div>

<form id="form">

<label class="op block tLeft xSmall">input number:</label>

<div id="number2"></div>

<a href="#" id="prev" class="button light border3" style="width: 49%;" onclick="submitButtonPrev()" >-</a>
<a href="#" id="next" class="button light border3" style="width: 49%;" onclick="submitButtonNext()" >+</a>


<div id="range2"></div>

<a class="block tCenter button border light h3 op" style="cursor: pointer;" onclick="start()" href="#">start</a>

</div>
</div>


<div class="tCenter">
<div>
<br>
<span class="op">mode:</span><br><span id="mode"></span>
</div>
</div>


`;

// disable enter key
//https://stackoverflow.com/questions/5629805/disabling-enter-key-for-form
window.addEventListener('keydown',function(e){

if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){
start();
e.preventDefault();
return false;
if(e.target.nodeName=='INPUT'&&e.target.type=='text'){
e.preventDefault();
return false;
}}},true);



// button prev
function submitButtonPrev(){

rangeValue = document.getElementById("range").value;

answer[0] = Number(rangeValue) - 1;

document.getElementById("range").value = answer[0];
document.getElementById("number").value = answer[0];


//start();

/*
//https://stackoverflow.com/questions/7609130/set-the-default-value-of-an-input-field
document.getElementById("number").setAttribute('value', rangeValue);*/

document.getElementById("number2").innerHTML = `

<input id="number" class="tCenter" type="number" name="number" value="${answer[0]}" min="0" max="${mode[0]}">

`;

}

// button next
function submitButtonNext(){

rangeValue = document.getElementById("range").value;

answer[0] = Number(rangeValue) + 1;
document.getElementById("range").value = answer[0];
document.getElementById("number").value = answer[0];


//start();

}



// range input
function submit33(){
rangeValue = document.getElementById("range").value;

answer[0] = rangeValue;



document.getElementById("number").value = answer[0];


/*
//https://stackoverflow.com/questions/7609130/set-the-default-value-of-an-input-field
document.getElementById("number").setAttribute('value', rangeValue);*/
/*
document.getElementById("number2").innerHTML = `

<input id="number" class="tCenter" type="number" name="number" value="${rangeValue}" min="0" max="${mode[0]}">

`;*/

//start();

}





// number input
function updateValue(e) {

rangeValue = e.target.value;

answer[0] = rangeValue;





//document.getElementById("range2").setAttribute('value', rangeValue);

/*document.getElementById("range2").innerHTML = `

<input id="range" class="slider" name="range" style="" value="${rangeValue}" type="range" min="0" max="${mode[0]}" step="1" onmouseup="submit33();" ontouchend="submit33();">
</form>
`;*/

document.getElementById("range").value = answer[0];
}



document.getElementById("result").innerHTML = print; 


//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
modeSelect(mode[0]);
document.getElementById("number").addEventListener("input", updateValue);












