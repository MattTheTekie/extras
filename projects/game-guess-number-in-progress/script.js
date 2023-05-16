// v.1.0.0

var limit = 10;
var rangeValue = 0;


var print = `

<form id="form">
<input class="tCenter" type="number" name="number" value="0">
<input  id="range" class="slider" name="range" style="" value="0" type="range" min="0" max="${limit}" step="1" onmouseup="submit33();" ontouchend="submit33();">
</form>




`;


document.getElementById("result").innerHTML = print; 


function submit33(){
rangeValue = document.getElementById("range").value;
//https://stackoverflow.com/questions/7609130/set-the-default-value-of-an-input-field
document.getElementById("range").setAttribute('value', rangeValue);

document.getElementById("result").innerHTML += document.getElementById("range").value;
}
