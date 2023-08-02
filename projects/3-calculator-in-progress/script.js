// v.1.0.5
// inspired by Bing Web Calculator, Google Web Calculator, Google Calculator App and other

var inputCalc = [];
inputCalc[0] = '';

var calcMode = [];
calcMode[0] = 'eval';


if(localStorage.getItem("calculator-mode")){
calcMode[0] = localStorage.getItem("calculator-mode");
}else{
calcMode[0] = 'eval';
}





function printCaclMode(mode){
if(mode == 'eval'){
document.getElementById('calculator-mode').innerHTML = 
`
<span class="tag op">mode:</span>
<a class="tag border light4" href="#" onclick="setMode('eval');return false;">eval</a>
<a class="tag border light op" href="#" onclick="setMode('script');return false;">script</a>
<a class="tag border light op" href="#" onclick="setMode('eval&script');return false;">eval & script</a>
`;
}

if(mode == 'script'){
document.getElementById('calculator-mode').innerHTML = 
`
<span class="tag op">mode:</span>
<a class="tag border light op" href="#" onclick="setMode('eval');return false;">eval</a>
<a class="tag border light4" href="#" onclick="setMode('script');return false;">script</a>
<a class="tag border light op" href="#" onclick="setMode('eval&script');return false;">eval & script</a>
`;
}

if(mode == 'eval&script'){
document.getElementById('calculator-mode').innerHTML = 
`
<span class="tag op">mode:</span>
<a class="tag border light op" href="#" onclick="setMode('eval');return false;">eval</a>
<a class="tag border light op" href="#" onclick="setMode('script');return false;">script</a>
<a class="tag border light4" href="#" onclick="setMode('eval&script');return false;">eval & script</a>
`;
}


}

function setMode(mode){
localStorage.setItem("calculator-mode", mode);
printCaclMode(mode);
calcMode[0] = mode;
}


const grid = `

<div class="center2">


<div class="calculator shadow border4 padding bg">

<form>
<input type="text" autofocus="autofocus">
<div id="calcResult" class="block padding bg border">result</div>
</form>



<div class="grid">

<!--https://stackoverflow.com/questions/1070760/javascript-href-vs-onclick-for-callback-function-on-hyperlink-->
<a class="button border light" href="#" onclick="clickInput('(');return false;">(</a>
<a class="button border light" href="#" onclick="clickInput(')');return false;">)</a>
<a class="button border light red" href="#" onclick="clickInput('C');return false;">C</a>
<a class="button border light red" href="#" onclick="clickInput('⇦');return false;">⇦</a>

<a class="button border light4" href="#" onclick="clickInput('7');return false;">7</a>
<a class="button border light4" href="#" onclick="clickInput('8');return false;">8</a>
<a class="button border light4" href="#" onclick="clickInput('9');return false;">9</a>
<a class="button border light" href="#" onclick="clickInput('/');return false;">/</a>

<a class="button border light4" href="#" onclick="clickInput('4');return false;">4</a>
<a class="button border light4" href="#" onclick="clickInput('5');return false;">5</a>
<a class="button border light4" href="#" onclick="clickInput('6');return false;">6</a>
<a class="button border light" href="#" onclick="clickInput('*');return false;">*</a>

<a class="button border light4" href="#" onclick="clickInput('1');return false;">1</a>
<a class="button border light4" href="#" onclick="clickInput('2');return false;">2</a>
<a class="button border light4" href="#" onclick="clickInput('3');return false;">3</a>
<a class="button border light" href="#" onclick="clickInput('-');return false;">-</a>

<a class="button border light4" href="#" onclick="clickInput('0');return false;">0</a>
<a class="button border light" href="#" onclick="clickInput('.');return false;">.</a>
<a class="button border light blue" href="#" onclick="clickInput('=');return false;">=</a>
<a class="button border light" href="#" onclick="clickInput('+');return false;">+</a>

</div>



<div class="block tCenter padding margin">
<span id="calculator-mode" class="block tCenter padding margin"></span>
<hr>

<a class="op tag" onclick="reload()" href="#">reload</a>
</div>


</div>




</div>
`;


document.getElementById('result').innerHTML = grid;

printCaclMode(calcMode[0]);


// input 1 (click)
function clickInput(value){
inputCalc[0] += String(value);
fuCalc(inputCalc[0]);
}

document.querySelectorAll('input')[0].addEventListener('input', updateValue);

// input 2 (form input)
function updateValue(e) {
inputCalc[0] = String(e.target.value);
fuCalc(e.target.value);
}



function fuCalc(){

inputCalc[0] = inputCalc[0].replaceAll("'", '');
inputCalc[0] = inputCalc[0].replaceAll('"', '');



let result = '';

if(inputCalc[0][inputCalc[0].length - 1] == '⇦'){ inputCalc[0] = inputCalc[0].slice(0, -2); }
if(inputCalc[0][inputCalc[0].length - 1] == '='){ inputCalc[0] = inputCalc[0].slice(0, -1); }
if(inputCalc[0][inputCalc[0].length - 1] == 'C'){ inputCalc[0] = ''; }

// print input
document.querySelectorAll('input')[0].value = inputCalc[0];
if(confDevice != 'mobile'){ document.querySelectorAll('input')[0].focus(); }

/*
//https://flaviocopes.com/how-to-check-value-is-number-javascript/
if (!isNaN(inputCalc[0][inputCalc[0].length - 1]) == true) {
result = eval(inputCalc[0]);
}else{
result = inputCalc[0];
}*/

var evalResult = '';

switch(calcMode[0]){
case 'eval':

try {
evalResult = eval(inputCalc[0]);
} catch(e) {
//evalResult = 'eval error';
evalResult = "&nbsp;";
}

result = evalResult;
break;

case 'script':
case 'eval&script':

// eval&javascript
if(calcMode[0] == 'eval&script'){
//https://stackoverflow.com/questions/31183110/how-to-catch-a-syntaxerror-in-javascript
try {
evalResult = eval(inputCalc[0])+'<hr>';
}
catch(e) {
//evalResult = `<span class="red xSamll">eval error</span>: <span class="xSmall">${e}</span>`;
}}else{
//evalResult = 'eval error';
//evalResult = 'eval error';
evalResult = "&nbsp;";
}
// end eval&javascript


// bracket count
var bracket = 0;
var bracket2 = 0;
var arrayBparse = inputCalc[0].split("");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
arrayBparse.forEach((element) => {
if(element == '('){ bracket++; }
if(element == ')'){ bracket2++; }
});
// end bracket count


// script
var arrayParse = inputCalc[0].split("");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
arrayParse.forEach((element) => {
if(element == '('){ bracket++; }
if(element == ')'){ bracket2++; }
});
// end script


result = inputCalc[0];
if(bracket != bracket2){
result = result.replaceAll('(', '<span class="red bold">(</span>');
result = result.replaceAll(')', '<span class="red bold">)</span>');
}

result = evalResult+result+'<br>* script mode in progress';
break;

default:
result = 'default mode';
}

//if(result == ''||result == undefined||/\d/.test(result) == false){ result = 'result'; }
document.getElementById('calcResult').innerHTML = result;


return result;
}

















