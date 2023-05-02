// v.1.0.0
// inspired by Bing Web Calculator, Google Web Calculator, Google Calculator App

var inputCalc = [];
inputCalc[0] = '';


if(localStorage.getItem("calculator-mode")){
mode = localStorage.getItem("calculator-mode");
}else{
mode = 'eval';
}





function printCaclMode(mode){
if(mode == 'eval'){
document.getElementById('calculator-mode').innerHTML = 
`
<div class="tRight" style="margin-top: 16px">
<div class="tag op">mode:</div>
<a class="tag border light" href="#" onclick="setMode('eval');return false;">eval</a>
<a class="tag border light op" href="#" onclick="setMode('manual');return false;">manual</a>
</div>
`;
}else{
document.getElementById('calculator-mode').innerHTML = 
`
<div class="tRight" style="margin-top: 16px">
<div class="tag op">mode:</div>
<a class="tag border light op" href="#" onclick="setMode('eval');return false;">eval</a>
<a class="tag border light" href="#" onclick="setMode('manual');return false;">manual</a>
</div>
`;
}
}

function setMode(mode){
localStorage.setItem("calculator-mode", mode);
printCaclMode(mode);
}


const grid = `

<div class="calculator border padding">

<form>
<input type="text">
<div id="calcResult" class="block padding bg border">result</div>
</form>



<div class="grid">

<!--https://stackoverflow.com/questions/1070760/javascript-href-vs-onclick-for-callback-function-on-hyperlink-->
<a class="button border light" href="#" onclick="clickInput('(');return false;">(</a>
<a class="button border light" href="#" onclick="clickInput(')');return false;">)</a>
<a class="button border light" href="#" onclick="clickInput('C');return false;">C</a>
<a class="button border light" href="#" onclick="clickInput('⇦');return false;">⇦</a>

<a class="button border light" href="#" onclick="clickInput('7');return false;">7</a>
<a class="button border light" href="#" onclick="clickInput('8');return false;">8</a>
<a class="button border light" href="#" onclick="clickInput('9');return false;">9</a>
<a class="button border light" href="#" onclick="clickInput('/');return false;">/</a>

<a class="button border light" href="#" onclick="clickInput('4');return false;">4</a>
<a class="button border light" href="#" onclick="clickInput('5');return false;">5</a>
<a class="button border light" href="#" onclick="clickInput('6');return false;">6</a>
<a class="button border light" href="#" onclick="clickInput('*');return false;">*</a>

<a class="button border light" href="#" onclick="clickInput('1');return false;">1</a>
<a class="button border light" href="#" onclick="clickInput('2');return false;">2</a>
<a class="button border light" href="#" onclick="clickInput('3');return false;">3</a>
<a class="button border light" href="#" onclick="clickInput('-');return false;">-</a>

<a class="button border light" href="#" onclick="clickInput('0');return false;">0</a>
<a class="button border light" href="#" onclick="clickInput('.');return false;">.</a>
<a class="button border light blue" href="#" onclick="clickInput('=');return false;">=</a>
<a class="button border light" href="#" onclick="clickInput('+');return false;">+</a>

</div>

<div id="calculator-mode"></div>


</div>
`;


document.getElementById('result').innerHTML = grid;

printCaclMode(mode);



function clickInput(value){
inputCalc[0] += value;

fuCalc(inputCalc[0]);


}

document.querySelectorAll('input')[0].addEventListener('input', updateValue);

function updateValue(e) {
clickInput(e.target.value);
}



function fuCalc(){
let result = '';

if(inputCalc[0][inputCalc[0].length - 1] == '⇦'){ inputCalc[0] = inputCalc[0].slice(0, -2); }
if(inputCalc[0][inputCalc[0].length - 1] == '='){ inputCalc[0] = inputCalc[0].slice(0, -1); }
if(inputCalc[0][inputCalc[0].length - 1] == 'C'){ inputCalc[0] = ''; }

// print input
document.querySelectorAll('input')[0].value = inputCalc[0];


/*
//https://flaviocopes.com/how-to-check-value-is-number-javascript/
if (!isNaN(inputCalc[0][inputCalc[0].length - 1]) == true) {
result = eval(inputCalc[0]);
}else{
result = inputCalc[0];
}*/


switch(mode){
case 'eval':
result = eval(inputCalc[0]);
break;

case 'manual':
result = 'manual mode';
break;

default:
result = 'default mode';
}



if(result == ''){ result = 'result'; }
document.getElementById('calcResult').innerHTML = result;


return result;
}

















