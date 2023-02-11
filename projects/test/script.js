// v.1.0.0


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
let n = 0;
let text = '';

while (n < 3000) {
text += n;
n++;
}
console.log(n);
// Expected output: 3

//https://stackoverflow.com/questions/60496566/get-innerhtml-by-data-id
document.querySelector('[id="test"]').innerHTML = text;





//https://developer.chrome.com/blog/scrollend-a-new-javascript-event/
document.onscrollend = event => 
{
alert('onscrollend');
}




//fuWorker('on');
