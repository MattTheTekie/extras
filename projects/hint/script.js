// v.1.0.0
// fixme insert

function hint(printId, hintJsonVar){
var hintLimit = 35;



// input
if(document.querySelectorAll('textarea').length >= 1){
var inputA = document.querySelectorAll('textarea')[0];
inputA.addEventListener('input', updateValueInput);
}



var print = '';


function updateValueInput(e) {
//var q = encodeURIComponent(e.target.value);
var q = e.target.value;


var q2 = (' '+q).split(' ');

var lastInputSymbol = q2[q2.length - 1];


/*wordEnJsonVar.forEach((item) => {

//console.log(item['en']);
if(lastInputSymbol.indexOf(item['en']) >= 0){
console.log(item['en']);
break;
}

});*/



var count = 0;
for (let index = 0; index < hintJsonVar.length; index++) {  
const item = wordEnJsonVar[index];  
var item2 = item['en'];
//if(item2.search(lastInputSymbol) != -1){
//if(item2.indexOf(lastInputSymbol) >= 0){
if(item2.slice(0, lastInputSymbol.length) == lastInputSymbol){
//console.log(lastInputSymbol);
//console.log(item2);

print += `
<a class="tag light border2" onclick="insertText('${q}', '${item2}');" style="cursor:pointer;">${item2}</a>
`;
count++;
if(count >= hintLimit){
break;
}
}
//console.log(item['en']);
}

print = `
<div class="tagList">
${print}
</div>
<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist -->
`;


// print hint
document.getElementById(printId).innerHTML = print;
print = '';










}

}

function insertText(q, text){
q = q.split(' ');
q.pop();
q = q.join(" ")
document.querySelectorAll('textarea')[0].value = (q+' '+text).trim();
document.querySelectorAll('textarea')[0].focus();
}

//fuWorker('on');
