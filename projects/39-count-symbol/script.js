// v.1.0.0


var print = `




<div class="center2">
<div class="wrapper">

<div style="min-height: 30vh;">
<div id="result3" class="block tCenter padding"></div>
<div id="result2"></div>
</div>

<div class="block padding"></div>

<form action="index.html" style="width: 100%;">

<textarea rows="1" id="text" class="result"  name="q" placeholder=" input" autofocus="autofocus"></textarea>
<input type="submit">
</form>


</div>
</div>



`;

document.getElementById("result").innerHTML = print; 



// input listener and print result
if(document.querySelectorAll('textarea').length >= 1){
var inputA = document.querySelectorAll('textarea')[0];
inputA.addEventListener('input', updateValueInput);
}

function updateValueInput(e) {
//q = encodeURIComponent(e.target.value);
q = e.target.value;
document.getElementById("result2").innerHTML = '<div class="result pre scroll padding border bg">'+(q).trim()+'</div><span id="scrollTo"></span>';
document.getElementById("scrollTo").scrollIntoView(true);


let countSymbol = '';
countSymbol = q.length;
document.getElementById("result3").innerHTML = `<h3>${countSymbol}</h3>`;


}







