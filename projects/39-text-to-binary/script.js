// v.1.0.0

var print = `




<div class="center2">
<div class="wrapper">

<div>
<div id="result3"></div>
<div id="result2"></div>
</div>

<div class="block padding"></div>

<form action="index.html" style="width: 100%;">

<textarea rows="1" id="text" class="result"  name="q" placeholder=" input" autofocus="autofocus"></textarea>
<input type="submit">
</form>

<div class="padding pre">
<ul>
<li>Description length: 150-160 characters.</li>
<li>Title length: 30 and 60 characters.</li>
<li>keyword: less than 10% of the total words of a page.</li>

</ul>
</div>

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
//document.getElementById("scrollTo").scrollIntoView(true);


let countSymbol = '';
countSymbol = q.length;

//https://stackoverflow.com/questions/14430633/how-to-convert-text-to-binary-code-in-javascript
for (var i = 0; i < q.length; i++) {
countSymbol += q[i].charCodeAt(0).toString(2) + " ";
  }

document.getElementById("result3").innerHTML = `<div class="tLeft block border light padding"><b>${countSymbol}</b></div>`;

countSymbol = '';
}







