// v.1.2.7


function randomURL(printId, jsonVar){

//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}




var url = jsonVar[getRandomInt(jsonVar.length)]['url'];

document.getElementById("result").innerHTML = `<div class="block tCenter"><span class="bold orange">${url}</span><br>
<br><br><span class="green">redirect after 3s.</span></div>`; 

setTimeout(function() {
window.location.href = url;
}, 3000);


}
