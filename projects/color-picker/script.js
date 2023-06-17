// v.1.0.0

var color = '#ff0000';

var print = `
result
`;

document.getElementById("result").innerHTML = print; 



const input = document.getElementById("color");
const input2 = document.getElementById("color2");

input.addEventListener("input", updateValue);
input2.addEventListener("input", updateValue);

function updateValue(e) {
color = e.target.value;
printColor(color);
}


function printColor(color){
document.getElementById("block33").style.backgroundColor = color;
document.getElementById("result").innerHTML = color; 
//document.getElementById("color").value = color;
document.getElementById("color2").value = color;

}


printColor(color);
