// v.3.10.19




function mainAll(mode33){


const topWordsLimit = 20;
const wmpAverageLimit = 10;
const wordLengthLimit = 5.1;

var topWords = '';
//https://catalins.tech/store-array-in-localstorage/
var arrWPMaverage = JSON.parse(localStorage.getItem("arrWPMaverage"));
if(arrWPMaverage == null){ arrWPMaverage = []; }


document.getElementById("win").innerHTML = ``;
document.getElementById("win2").innerHTML = ``;
document.getElementById("stat").innerHTML = `stat`;
document.getElementById("countSymbolTask").innerHTML = `count symbol`;

document.getElementById('text').value = '';

var allowError = 0;

var task = '';
var  geturl = window.location;
var url = new URL(geturl);

var mode = url.searchParams.get("mode");

if(mode33 != ''){ mode = mode33; }

var lastEror = '';

if(mode != null){ localStorage.setItem("mode", mode); }else{
if(localStorage.getItem("mode")){ mode = localStorage.getItem("mode"); }
}
if(mode == null){ mode = 'quote'; }



//document.getElementById("refresh").innerHTML = `<a href="#" onclick="localRefresh('`+mode+`');">refresh</a>`;








var modeList = Array("abc", "quote", "book", "input", "none", "book2", "free");
var modeListPrint = '';
modeList.forEach(FunctionModeList);
function FunctionModeList(item, index) {
//hide none mode in not localhost
var skip = '';
if(confHost != 'localhost'&&item == 'none'||confHost != 'localhost'&&item == 'book2'){ skip = 'yes'; }
if(mode == item && skip != 'yes'){
modeListPrint += `
<a class="tag light border2" style="color: var(--c3);">`+item+`</a>
`;
}else if(skip != 'yes'){
modeListPrint += `
<a class="tag op light border2" href="#" onclick="localRefresh('`+item+`');">`+item+`</a>
`;
}
}
document.getElementById("mode").innerHTML = `
<div class="tagList">
`+modeListPrint+`
</div>
`;


/*window.onload = function() {
    if(!window.location.hash) {
		if(mode == null){
        window.location = window.location + '#loaded';
        window.location.reload();

	}
    }
}*/


if(mode == 'quote'){

var quote = '';
quote = quoteJsonVar;

if(quote != null){
const random = Math.floor(Math.random() * quote.length);
//console.log(quote[random]['text']);
task = quote[random]['text'];

}

main(task);
}





if(mode == 'book'||mode == 'book2'){

var book = '';
var bookLength = 1000;


book = bookJsonVar;

if(book != null){
const random = Math.floor(Math.random() * book.length);
//console.log(book[random]['text']);
task = book[random]['text'];



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var bookStart = task.length - bookLength;
bookStart = getRandomArbitrary(0, bookStart);
task = task.slice(bookStart);
task = task.slice(0, bookLength);
}

// rm first and last word (because cut)
task = task.trim();
task = task.split(" ");
task[0] = '';
task[task.length - 1] = '';

task = task.join(" ");

main(task);
}




// https://stackoverflow.com/questions/9713058/send-post-data-using-xmlhttprequest
mode300 = mode; // fixed without var

if(mode === 'none'||mode === 'book2'){
document.getElementById("lPrintTr").style.display = "block";

document.querySelectorAll('textarea')[0].removeEventListener('input', updateValue3333);
document.querySelectorAll('textarea')[0].addEventListener('input', updateValue3333);

function updateValue3333(e) {
//console.log(mode300);
if(mode300 == 'none'||mode300 == 'book2'){
// source code none
//let text = encodeURIComponent(e.target.value);
let text = (e.target.value);
let http = new XMLHttpRequest();
let url2 = '/fu/fuTranslateExt.php';
let params = 'text='+text;
//alert(params);
http.open('POST', url2, true);
//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
http.onreadystatechange = function() {//Call a function when the state changes.
if(http.readyState == 4 && http.status == 200) {
// alert(http.responseText);

document.getElementById("lPrintTr").innerHTML=http.responseText+'';

}
}
http.send(params);
}else{
document.querySelectorAll('textarea')[0].removeEventListener('input', updateValue3333);
document.getElementById("lPrintTr").innerHTML = '';
document.getElementById("lPrintTr").style.display = "none";
}
}
}else{
document.querySelectorAll('textarea')[0].removeEventListener('input', updateValue3333);
document.getElementById("lPrintTr").innerHTML = '';
document.getElementById("lPrintTr").style.display = "none";
}












if(mode == 'abc'){
task = "           abcdefghijklmnopqrstuvwxyz";
main(task);
}

if(mode == 'input'||mode == 'none'){
var tg = '';
document.getElementById("bookmarklet").style.display = "inline-block";

document.getElementsByClassName("input")[0].innerHTML = `
<div class="wrapper">
<br>
<form method="get">
<textarea rows="2" name="q" placeholder=" input text for task"></textarea>
<!--<input type="submit">-->
</form>
</div><br /><br />`;


// input from input in bottom 2 textarea
// input listener and print result
if(document.querySelectorAll('textarea').length >= 1){
var inputA = document.querySelectorAll('textarea')[1];
inputA.removeEventListener('input', updateValueInput);
inputA.addEventListener('input', updateValueInput);
}



function updateValueInput(e) {
//q = encodeURIComponent(e.target.value);
localStorage.setItem("input", e.target.value);
main(e.target.value);
}









// input from Get
input = url.searchParams.get("q");
if(input != null){
if(input != null){
localStorage.setItem("input", input); task = input;
}else{
if(localStorage.getItem("input")){ task = localStorage.getItem("input"); }
}


main(task);
}else{
task = localStorage.getItem("input");
if(task != null){
main(task);
}
}










}else{
document.getElementsByClassName("input")[0].innerHTML = '';
//document.getElementById("mode2").innerHTML = '';
document.getElementById("bookmarklet").style.display = "none";
}






















if(mode == 'free'){
document.getElementById('text').rows = '7';
task = '';
main('');
}else{
document.getElementById('text').rows = '';
}

























// main
//setTimeout(function () {
function main(task){












if(mode != 'abc'&&mode&&mode != 'free'){
document.getElementById("mode2").innerHTML = ' <a class="tag" href="/projects/25-redirects/?q='+encodeURIComponent(task)+'  t">tr</a>';
if(confHost == 'localhost'){ document.getElementById("mode2").innerHTML += ' <a class="tag" href="/redirects/?q='+encodeURIComponent(task)+'  d">tr2</a>'; }
}else{
document.getElementById("mode2").innerHTML = '';
}

/*
if(task != null){
//console.log(task);
task = task.replaceAll(/%/g, "%25"); // not show text, percentage
}*/



//task = decodeURIComponent(task); //Uncaught URIError: malformed URI sequence








var letters = [...task]; 

//https://stackoverflow.com/questions/17564837/how-to-know-if-a-url-is-decoded-encoded
try{
if(decodeURIComponent(letters) != letters){
letters = decodeURIComponent(letters)
}
}
catch(err){
// not decoded
}


if(mode == 'abc'){

letters = letters.join("");
letters = letters.repeat(5);
letters = [...letters]; 

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
//console.log(arr);
}

shuffleArray(letters);

}




let text = '';


text = letters.join("");



//console.log(letters);
var a = {
"ˈ":"'", "ː":":",
"×":"x",
"‐":"-",
"½":"1/2", "―":"-", 
"…":"...",
"`":"'", "·":"*", "•":"*", "›":">",
"’":"'", "—":"-", "«":'"', "»":'"',
'“':'"', '”':'"', "…":"...",
"–":"-", "‘":'"'
};


function transliterate(word){
word = [...word];
return word.map(function (char) {
return a[char] || char; 
}).join("");
}

if(mode == 'abc'){ text = text.replaceAll(/\s{2,}/g, ' '); /* space */ }

letters = text;

/**/


// clean text

// replace symbol
//https://www.charset.org/utf-8/66
//Variation Selector
letters = letters.replaceAll(/%EF%B8%82/g, "");
letters = letters.replaceAll(/%EF%B8%83/g, "");
letters = letters.replaceAll(/%EF%B8%84/g, "");
letters = letters.replaceAll(/%EF%B8%85/g, "");
letters = letters.replaceAll(/%EF%B8%86/g, "");
letters = letters.replaceAll(/%EF%B8%87/g, "");
letters = letters.replaceAll(/%EF%B8%88/g, "");
letters = letters.replaceAll(/%EF%B8%89/g, "");
letters = letters.replaceAll(/%EF%B8%8A/g, "");
letters = letters.replaceAll(/%EF%B8%8B/g, "");
letters = letters.replaceAll(/%EF%B8%8C/g, "");
letters = letters.replaceAll(/%EF%B8%8D/g, "");
letters = letters.replaceAll(/%EF%B8%8E/g, "");
letters = letters.replaceAll(/%EF%B8%8F/g, "");
letters = letters.replaceAll(/ ️/g, ' '); //Variation Selector

//https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
function removeEmojis (string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

  return string.replaceAll(regex, '');
}

 


letters = removeEmojis(letters);

letters = transliterate(letters);



//https://stackoverflow.com/questions/22962220/remove-multiple-line-breaks-n-in-javascript
//letters = letters.replaceAll(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');
letters = letters.replaceAll(/(\r\n|\r|\n){2,}/g, '$1\n');
//https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
letters = letters.replaceAll(/  +/g, ' ');








letters = transliterate(letters);


//letters = encodeURIComponent(letters); // error url

//https://www.charset.org/utf-8/66
//Variation Selector
letters = letters.replaceAll(/%EF%B8%82/g, "");
letters = letters.replaceAll(/%EF%B8%83/g, "");
letters = letters.replaceAll(/%EF%B8%84/g, "");
letters = letters.replaceAll(/%EF%B8%85/g, "");
letters = letters.replaceAll(/%EF%B8%86/g, "");
letters = letters.replaceAll(/%EF%B8%87/g, "");
letters = letters.replaceAll(/%EF%B8%88/g, "");
letters = letters.replaceAll(/%EF%B8%89/g, "");
letters = letters.replaceAll(/%EF%B8%8A/g, "");
letters = letters.replaceAll(/%EF%B8%8B/g, "");
letters = letters.replaceAll(/%EF%B8%8C/g, "");
letters = letters.replaceAll(/%EF%B8%8D/g, "");
letters = letters.replaceAll(/%EF%B8%8E/g, "");
letters = letters.replaceAll(/%EF%B8%8F/g, "");



//<control>
//https://www.utf8-chartable.de/
letters = letters.replaceAll(/%C2%81/g, "");
letters = letters.replaceAll(/%C2%82/g, "");
letters = letters.replaceAll(/%C2%83/g, "");
letters = letters.replaceAll(/%C2%84/g, "");
letters = letters.replaceAll(/%C2%85/g, "");
letters = letters.replaceAll(/%C2%86/g, "");
letters = letters.replaceAll(/%C2%87/g, "");
letters = letters.replaceAll(/%C2%88/g, "");
letters = letters.replaceAll(/%C2%89/g, "");
letters = letters.replaceAll(/%C2%8A/g, "");
letters = letters.replaceAll(/%C2%8B/g, "");
letters = letters.replaceAll(/%C2%8C/g, "");
letters = letters.replaceAll(/%C2%8D/g, "");
letters = letters.replaceAll(/%C2%8E/g, "");
letters = letters.replaceAll(/%C2%8F/g, "");
letters = letters.replaceAll(/%C2%90/g, "");
letters = letters.replaceAll(/%C2%91/g, "");
letters = letters.replaceAll(/%C2%92/g, "");
letters = letters.replaceAll(/%C2%93/g, "");
letters = letters.replaceAll(/%C2%94/g, "");
letters = letters.replaceAll(/%C2%95/g, "");
letters = letters.replaceAll(/%C2%96/g, "");
letters = letters.replaceAll(/%C2%97/g, "");
letters = letters.replaceAll(/%C2%98/g, "");
letters = letters.replaceAll(/%C2%99/g, "");
letters = letters.replaceAll(/%C2%9A/g, "");
letters = letters.replaceAll(/%C2%9B/g, "");
letters = letters.replaceAll(/%C2%9C/g, "");
letters = letters.replaceAll(/%C2%9D/g, "");
letters = letters.replaceAll(/%C2%9E/g, "");
letters = letters.replaceAll(/%C2%9F/g, "");



letters = letters.replaceAll(/%E2%80%89/g, " "); // space



letters = letters.replaceAll(/%E2%80%AF/g, " ");
letters = letters.replaceAll(/%E2%80%8C/g, ""); //ZERO WIDTH SPACE
letters = letters.replaceAll(/%E2%80%8B/g, ""); //ZERO WIDTH SPACE



letters = letters.replaceAll(/A0%80%0A/g, "\n");
letters = letters.replaceAll(/A0%80%0A/g, "\n");
letters = letters.replaceAll(/%0D%0A/g, "\n");
letters = letters.replaceAll(/%0A/g, "\n");
letters = letters.replaceAll(/%0D/g, "\n");
letters = letters.replaceAll(/%0A/g, "\n");
letters = letters.replaceAll(/%C2%A0/g, " ");

letters = letters.replaceAll(/E2%80%8A/g, " "); // end of line
letters = letters.replaceAll(/%E2%81%A6/g, ""); // Left-to-Right Isolate
letters = letters.replaceAll(/%E2%81%A9/g, "");

//letters = decodeURIComponent(letters); // error

letters = letters.replaceAll(/  /g, " ");
//letters = letters.replace(/\r\n/g, "\n");
letters = letters.replaceAll(/ /g, ""); // end of line


// dublicate from top
//https://stackoverflow.com/questions/22962220/remove-multiple-line-breaks-n-in-javascript
//letters = letters.replaceAll(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');
letters = letters.replaceAll(/(\r\n|\r|\n){2,}/g, '$1\n');
//https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
letters = letters.replaceAll(/  +/g, ' ');


//letters = letters.replaceAll(/\s{2,}/g, ' ');

//console.log([...letters]);





//letters = letters.replaceAll(/[\r\n]/gm, " ");
/*letters = letters.replaceAll(/\s\s+/g, ' ');
letters = letters.replaceAll(/  /g, " ");
letters = letters.replaceAll(/\s{2,}/g, ' ');
letters = letters.replaceAll(/  /g, " ");*/

letters = letters.trim(); 
letters = [...letters]; 
task = letters; // modifed

//console.log(letters);


var text2 = '';
letters.forEach(myFunction2);
function myFunction2(item, index) {
text2 += item; 
}


function replaceCode(a){
a = a.replaceAll(/</g, "&lt;");
a = a.replaceAll(/>/g, "&gt;");
return a;
}

/*letters = replaceCode(letters.join(""));
letters =  [...letters];*/

document.getElementById("result").innerHTML = replaceCode(text2);












var key = '';
var key2 = ''; 

inputGetKey = document.getElementById('text');
inputGetKey.onkeydown = function(e) {
key = e.keyCode || e.charCode;
key2 = e.key; 
}

document.getElementsByName("input2")[0].removeEventListener('input', inputCheck);
document.getElementsByName("input2")[0].addEventListener('input', inputCheck);
var dateArr = [];
var secArr= [];
var totalError = 0;
var lastMaxInputlength = 0;















function inputCheck(e){
//document.getElementsByClassName("input")[0].innerHTML = '';

document.getElementsByClassName("input")[0].innerHTML = '';

var error = 0;

var acurancy = 100;
var errorColor = '';
var id = 'id0';
var text11 = '';
var text33 = '';
var lastError = '';
const errorLimit = 500 - 1;

var wpmRecord = localStorage.getItem("wpmRecord");

if(wpmRecord == null||wpmRecord < 0||wpmRecord == undefined){ wpmRecord =  0; }


// input value
var q = e.target.value;

//var answerArr = q.split ("");
var answerArr = [...q]; // convert input string to array for check
//console.log(answerArr);

// check
var text = '';

// print task 2 ant result if have input (


/*
// scroll with interval test
var scrollToVar = '';
if(answerArr.length % 140 == 0){
scrollToVar = '<span id="scrollTo"></span>'; 
}else if(confDevice == 'mobile'){
scrollToVar = '<span id="scrollTo"></span>';
}
text = '<span class="green">'+text11+'</span>'+scrollToVar+text33;
document.getElementById("result").innerHTML = text;
if(scrollToVar !=  ''){ document.getElementById("scrollTo").scrollIntoView(true); }
*/




if(mode != 'free'){
letters.forEach(myFunctionCheckAll);
}
function myFunctionCheckAll(item, index) {


//console.log(answerArr[index]+'=['+item+']');


if(answerArr.length >= lastMaxInputlength){ 	lastMaxInputlength = answerArr.length; }






//text += item; 
//console.log(item);
//console.log(answerArr[index]);
var check = 'no';
if(item == answerArr[index]&&error <= errorLimit){
check = 'yes';
//id = 'id'+index;
lastEror = 'green';

item = replaceCode(item);
text11 += item;
/*if(item == ' '){
text11 += item;
}else{
text11 += item;
}*/


}else if(item != answerArr[index]&&answerArr[index] != undefined&&error <= errorLimit){
check = 'yes';
lastEror = 'red';
item = replaceCode(item);



switch(item) {
case '\r\n':
case '\r':
case '\n':
text11 += `<span class="red">⏎\n</span>`;
break;
case ' ':
text11 += '<span style="background-color: var(--red);">'+item+'</span>';
break;
default:
text11 += '<span class="red">'+item+'</span>';
}


//console.log(answerArr.length-1);
//console.log(index);
//console.log(answerArr.length - 1+'='+index);

/*if(answerArr.length  <= letters.length){
inputGetKey.onkeydown = function(e) {

if(answerArr.length - 1 == index){
var key = e.keyCode || e.charCode;
var key2 = e.key; 
if(key != '229'&&key != 8&&key != 46&&key2 != 'Backspace'&&key2 != 'Delete' ){
totalError++;
}
// mobile 
if(key == '229'&&lastMaxInputlength == answerArr.length&&letters[lastMaxInputlength - 1] != answerArr[lastMaxInputlength - 1]){ totalError++; }

}
}}*/
	
	
/*if(answerArr.length  <= letters.length){
totalError++;
}*/
error++;

}


if(check == 'no'){
text33 += item; 
}

check = '';

}



text = '<span class="green">'+text11+'</span><span id="scrollTo"></span>'+replaceCode(text33);
document.getElementById("result").innerHTML = text;
document.getElementById("scrollTo").scrollIntoView(true);

if(document.getElementById("scrollTo2") != null){
document.getElementById("scrollTo2").scrollIntoView(true);
}



/* stat */


if(letters.length >= answerArr.length||mode == 'free'){

//if(key2 == 'Backspace'||key2 == 'Delete'){ }else{}
dateArr.push(Date.now());


//dateArr = dateArr.slice(-400);
var sec = 0;
if(dateArr[dateArr.length-2] != undefined){
const millis = dateArr[dateArr.length-1]-dateArr[dateArr.length-2];
//sec = Math.floor(millis/1000);
sec = ((millis % 60000) / 1000);
secArr.push(sec);
}



//secArr = secArr.slice(-400);
//console.log(secArr);

var timeAverage = 0;
secArr.forEach(myFunction2);
function myFunction2(item, index) {
timeAverage = timeAverage + item; //console.log(item);
}

timeAverage = timeAverage/secArr.length;


var wps = timeAverage * wordLengthLimit;
var wpm = 1 * 60 / wps;
wpm = wpm.toFixed(0);

}


if(isNaN(wpm)){ wpm = 0; }

if(error >= 1) { errorColor = 'red'; }else{ errorColor = 'green'; }

if(lastEror == 'red'){

// totalError
if(key != '229'&&key != 8&&key != 46&&key2 != 'Backspace'&&key2 != 'Delete' ){ totalError++; }
if(key == '229'){
if(lastMaxInputlength == answerArr.length){ totalError++; } // only last new error on mobile
}



lastEror = 'none';
document.getElementById("text").style.borderTop = "9px solid var(--red)";
/*if(error <= 60){
//document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/error.ogg">'; 
}*/

}else{
document.getElementById("text").style.borderTop = "9px solid var(--d2)";
}









if(answerArr.length == letters.length&&mode != 'free'){
acurancy = totalError * 100 / answerArr.length;
acurancy =  100 - acurancy.toFixed(0);
}else{ acurancy = '0 '; }

//document.getElementById("stat").innerHTML = sec+' | '+timeAverage.toFixed(2)+' sec. || '+error+' <span class="'+errorColor+'">error</span>';
document.getElementById("stat").innerHTML = 
'<div><span>wpm:</span> <!--'+wpmRecord+'/ --><span>' +wpm+'</span> || <span title="allowError: '+allowError+'">error: ≈'
+totalError+'</span>/<span  class="'+errorColor+'">'+error+'</span> || acurancy: ≈'+acurancy+'%</div>'
;

/*scrollTo();
function scrollTo(){
document.getElementById("scrollTo").scrollIntoView(true);
}*/










//if(letters.length == answerArr.length && error <= allowError&&mode != 'free'&&task.length >= 5){
if(task.length == answerArr.length && error <= allowError&&mode != 'free'&&task.length >= 5){



var recordMsg = "";
var printMsgWin = '';



/*if(wpm < wpmRecord){
recordMsg = wpm/wpmRecord*100;
recordMsg = 100-speedUp;
recordMsg = speedUp.toFixed(0);
recordMsg = ' (<span class="green"> '+recordMsg+'%+ for record</span>)';
}*/

var WPMaverage = 0;
arrWPMaverage.forEach((element) => {
WPMaverage = Number(WPMaverage) + Number(element);
});
prevWPMaverage = (Number(WPMaverage) / Number(arrWPMaverage.length)).toFixed(0);

arrWPMaverage.push(wpm);
arrWPMaverage.slice(0, wmpAverageLimit);
//https://catalins.tech/store-array-in-localstorage/
localStorage.setItem("arrWPMaverage", JSON.stringify(arrWPMaverage));

WPMaverage = 0;
arrWPMaverage.forEach((element) => {
WPMaverage = Number(WPMaverage) + Number(element);
});
WPMaverage = (Number(WPMaverage) / Number(arrWPMaverage.length)).toFixed(0);


var wpmAverageProgress = WPMaverage - prevWPMaverage;
if(wpmAverageProgress < 0){
wpmAverageProgress = ' (<span class="red">'+wpmAverageProgress+'</span>)';
}else if(wpmAverageProgress > 0){
wpmAverageProgress = ' (<span class="green">+'+wpmAverageProgress+'</span>)';
}else{
wpmAverageProgress = '';
}



if(wpm == wpmRecord){
recordMsg = ' <span class="yellow"> Old Record</span>';
printMsgWin = 'tie';
printMsgWinColor = 'blue';
}

if(wpm > wpmRecord){
recordMsg = ' <span class="orange"> New Record</span>';
localStorage.setItem("wpmRecord", wpm);
printMsgWin = 'win';
printMsgWinColor = 'orange';
}

var wpmProgress = " ";
var prevWpm = localStorage.getItem("prevWpm");
localStorage.setItem("prevWpm", wpm);

if(prevWpm == null ||prevWpm == Infinity){ prevWpm =  0; }
wpmProgress = wpm - prevWpm;
if(wpmProgress < 0){
printMsgWin = 'game over';
printMsgWinColor = 'red';
wpmProgress = ' (<span class="red">'+wpmProgress+'</span>)';
}else{
if(printMsgWin != 'win'){
printMsgWin = 'Good result';
printMsgWinColor = 'green';
}

wpmProgress = ' (<span class="green">+'+wpmProgress+'</span>)';
}



var acurancyProgress = "0";
var prevAcurancy = localStorage.getItem("prevAcurancy");
localStorage.setItem("prevAcurancy", acurancy);

if(prevAcurancy == null ||prevAcurancy == Infinity||prevAcurancy == NaN){ prevAcurancy =  0; }
acurancyProgress = acurancy - prevAcurancy;
if(acurancyProgress < 0){
acurancyProgress = ' (<span class="red">'+acurancyProgress+'</span>)';
}else{
acurancyProgress = ' (<span class="green">+'+acurancyProgress+'</span>)';
}



if(printMsgWin == 'win'){
document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/win.ogg">';
printMsgWin = 'Win';
}

if(printMsgWin == 'tie'){
document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/ok.ogg">';
printMsgWin = 'Tie';
}



if(printMsgWin == 'Good result'||printMsgWin == 'tie'){
document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/neutral.ogg">';
printMsgWin = 'Good result';
}

if(printMsgWin == 'game over'){
document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/error.ogg">';
printMsgWin = 'The previous result is better';
}


// disable msg
if(printMsgWin != 'win'&&printMsgWin != 'tie'){
printMsgWin = '';
//document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/click.ogg">';
}



let winMsg = `

<div class="block bg4 padding margin msg shadow tCenter" style="margin-bottom: 10px;">
<!--<b class="${printMsgWinColor} padding">${printMsgWin}</b>-->
<div class="pre"><span title="word per minute" style="color: var(--c3);">WPM: <span class="">${wpm}</span></span> ${wpmProgress} ${recordMsg}</div>
<span class=""><span title="WPM Average last ${wmpAverageLimit}">Average WPM: </span>${WPMaverage} ${wpmAverageProgress}<br>
<span>Acurancy: ≈<span class="">${acurancy}</span>%</span> ${acurancyProgress}<br>
</div>
</div>`;


document.getElementsByClassName("win")[0].innerHTML = winMsg;
document.getElementsByClassName("win")[1].innerHTML = winMsg;

}else {
document.getElementsByClassName("win")[0].innerHTML = '';
document.getElementsByClassName("win")[1].innerHTML = '';
document.getElementById("sound").innerHTML = '';
}



document.getElementById('countSymbolTask').innerHTML = 'task: '+task.length+' input: '+answerArr.length+'';

}












/*
// top words
topWords = task.join("");

// clear symbol
//topWords = topWords.toLowerCase();
topWords = topWords.replaceAll('"', "");
topWords = topWords.replaceAll('...', "");
topWords = topWords.replaceAll('.', "");
topWords = topWords.replaceAll('(', "");
topWords = topWords.replaceAll(')', "");
topWords = topWords.replaceAll(',', "");
topWords = topWords.replaceAll('?', "");
topWords = topWords.replaceAll('!', "");

//topWords = topWords.replaceAll(' at ', "");

topWords = topWords.split(" ");
//https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
var counts = [];
topWords.forEach(function (x) {
if(Number.isInteger((counts[x] || 0) + 1) == true){
counts[x] = (counts[x] || 0) + 1;
}
});

//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
function sortObject(obj) {
    var arr = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
arr.sort(function(a, b) { return a.value - b.value; });
arr.reverse();
return arr; // returns array
}


topWords = sortObject(counts);
topWords = topWords.slice(0, topWordsLimit);

print = '';
topWords.forEach(myFunction288);
function myFunction288(item, index) {
qGo2 = item['key'];
if(qGo2 != ''){
var qGo = encodeURIComponent(qGo2);
print += `
<a target="_blank" href="/projects/25-redirects/?q=${qGo}">${qGo2} [${item['value']}]</a>,
`;
}
}

print = print.slice(0, -2); 

//print top words
document.getElementById("topWords").innerHTML = 
`
<div class="wrapper2 padding op" style="margin-top: 15px;">
<span class="bold op small">top words: </span>${print}
</div>

`;

*/












}









answerArr = [];
dateArr = [];
secArr = [];

document.getElementById("text").style.borderTop = "9px solid var(--d2)";


document.getElementsByClassName("msg2")[0].innerHTML = `
<div class="block padding"></div>
<div class="block wrapper2 op small tRight padding2">* word - ${wordLengthLimit} symbol, Average WPM - average last ${wmpAverageLimit} WPM</div>
`;

}





function localRefresh(mode){
mainAll(mode);
}

mainAll('');


fuWorker('on');


