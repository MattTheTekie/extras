// v.1.1.8
// not for large json files like in this example ! 

function hint(printId, hintJsonVar, hintLimit, inputId){

if(hintLimit == null||hintLimit == undefined||hintLimit == ''){ hintLimit = 35; }
if(inputId == null||inputId == undefined||inputId == ''){ inputId = ''; }
var com = '';



// input
if(document.querySelectorAll('textarea').length >= 1){
inputA = document.querySelectorAll('textarea')[0];
inputA.addEventListener('input', updateValueInput);
com = 'textarea';
}



if(document.querySelectorAll('input').length >= 2){
inputA = document.querySelectorAll('input')[0];
inputA.addEventListener('input', updateValueInput);
com = 'input';
}


if(document.getElementById(inputId) != null&&document.getElementById(inputId) != ''&&inputId != ''){ 
inputA = document.getElementById(inputId);
inputA.addEventListener('input', updateValueInput);
com = 'inputId';
}



var print = '';


function updateValueInput(e){
//var qInput = encodeURIComponent(e.target.value);
var qInput = (e.target.value);
//var qInput = e.target.value;
var q2 = (' '+qInput).split(' ');
var lastInputSymbol = q2[q2.length - 1];
if(lastInputSymbol.length >= 1){
var count = 0;
for (let index = 0; index < hintJsonVar.length; index++) {  
const item = hintJsonVar[index];  
var item2 = item['text']; // from json  var

//if(item2.search(lastInputSymbol) != -1){
//if(item2.indexOf(lastInputSymbol) >= 0){
// search word (hint with first letter)
if(item2 != undefined&&item2.slice(0, lastInputSymbol.length).toLowerCase() == lastInputSymbol.toLowerCase()){
//console.log(lastInputSymbol);
//console.log(item2);

var item3 = item2.replace(/'/g, "\\'"); // https://stackoverflow.com/questions/15087497/escaping-single-quotes-in-javascript-string-for-javascript-evaluation

print += `
<a class="tag light border2" onclick="insertText('${qInput}', '${item3}', '${com}', '${inputId}');" style="cursor:pointer;">${item2}</a>
`;
count++;
if(count >= hintLimit){
break;
}
}
//console.log(item['en']);
}

print = `
<div class="tagList op padding" >
${print}
</div>
<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist -->
`;

// print hint
document.getElementById(printId).innerHTML = print;
print = '';

}
}








}






function insertText(q, text, com, inputId){
q = q.split(' ');
q.pop();
q = q.join(" ");


if(com == 'textarea'){
document.querySelectorAll('textarea')[0].value = (q+' '+text).trim();
document.querySelectorAll('textarea')[0].focus();
}

if(com == 'input'){
document.querySelectorAll('input')[0].value = (q+' '+text).trim();
document.querySelectorAll('input')[0].focus();
}

if(com == 'inputId'){
document.getElementById(inputId).value = (q+' '+text).trim();
document.getElementById(inputId).focus();
}

}

//fuWorker('on');
