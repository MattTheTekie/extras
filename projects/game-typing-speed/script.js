// v.3.9.5





function mainAll(mode33){



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








var modeList = Array("abc", "quote", "book", "input", "none", "free");
var modeListPrint = '';
modeList.forEach(FunctionModeList);
function FunctionModeList(item, index) {
if(mode == item){
modeListPrint += `
<a class="tag light border2" style="color: var(--c3);">`+item+`</a>
`;
}else{
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





if(mode == 'book'){

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

main(task);
}




// https://stackoverflow.com/questions/9713058/send-post-data-using-xmlhttprequest
mode300 = mode; // fixed without var

if(mode === 'none'){
document.getElementById("lPrintTr").style.display = "block";

document.querySelectorAll('textarea')[0].removeEventListener('input', updateValue3333);
document.querySelectorAll('textarea')[0].addEventListener('input', updateValue3333);

function updateValue3333(e) {
//console.log(mode300);
if(mode300 == 'none'){
// source code none
let text = encodeURIComponent(e.target.value);
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

tg = encodeURIComponent(e.target.value);
document.getElementById("mode2").innerHTML = ' <a class="tag" href="/?q='+tg+'  t">tr</a>';
}

task = localStorage.getItem("input");
if(task != null){
main(task);

tg = encodeURIComponent(task);
document.getElementById("mode2").innerHTML = ' <a class="tag" href="/?q='+tg+'  t">tr</a>';
}







// input from Get
input = url.searchParams.get("q");
if(input != null){
if(input != null){
localStorage.setItem("input", input); task = input;
}else{
if(localStorage.getItem("input")){ task = localStorage.getItem("input"); }
}

tg = encodeURIComponent(task);
document.getElementById("mode2").innerHTML = ' <a class="tag" href="/?q='+tg+'  t">tr</a>';

main(task);
}




tg = encodeURIComponent(task);
if(tg != 'null'){
document.getElementById("mode2").innerHTML = ' <a class="tag" href="/?q='+tg+'  t">tr</a>';
}










}else{
document.getElementsByClassName("input")[0].innerHTML = '';
document.getElementById("mode2").innerHTML = '';
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


/*
if(task != null){
//console.log(task);
task = task.replace(/%/g, "%25"); // not show text, percentage
}*/



//task = decodeURIComponent(task); //Uncaught URIError: malformed URI sequence








var letters = [...task]; 




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
"½":"1/2", "―":"-", ";":".",
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

if(mode == 'abc'){ text = text.replace(/\s{2,}/g, ' '); /* space */ }

letters = text;

/**/


// clean text



//https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
function removeEmojis (string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

  return string.replace(regex, '');
}

letters = removeEmojis(letters);


letters = transliterate(letters);
//letters = decodeURIComponent(letters);


//https://stackoverflow.com/questions/22962220/remove-multiple-line-breaks-n-in-javascript
//letters = letters.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');
letters = letters.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
//https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
letters = letters.replace(/  +/g, ' ');

letters = encodeURIComponent(letters);

letters = transliterate(letters);


//https://www.charset.org/utf-8/66
//Variation Selector
letters = letters.replace(/%EF%B8%82/g, "");
letters = letters.replace(/%EF%B8%83/g, "");
letters = letters.replace(/%EF%B8%84/g, "");
letters = letters.replace(/%EF%B8%85/g, "");
letters = letters.replace(/%EF%B8%86/g, "");
letters = letters.replace(/%EF%B8%87/g, "");
letters = letters.replace(/%EF%B8%88/g, "");
letters = letters.replace(/%EF%B8%89/g, "");
letters = letters.replace(/%EF%B8%8A/g, "");
letters = letters.replace(/%EF%B8%8B/g, "");
letters = letters.replace(/%EF%B8%8C/g, "");
letters = letters.replace(/%EF%B8%8D/g, "");
letters = letters.replace(/%EF%B8%8E/g, "");
letters = letters.replace(/%EF%B8%8F/g, "");





letters = letters.replace(/%0A/g, "\n");


letters = letters.replace(/%E2%80%AF/g, " ");
letters = letters.replace(/%E2%80%8C/g, ""); //ZERO WIDTH SPACE
letters = letters.replace(/%0D%0A/g, "\n");
letters = letters.replace(/%0A/g, "\n");
letters = letters.replace(/%0D/g, "\n");
letters = letters.replace(/%C2%A0/g, " ");

letters = letters.replace(/E2%80%8A/g, " "); // end of line
letters = letters.replace(/%E2%81%A6/g, ""); // Left-to-Right Isolate
letters = letters.replace(/%E2%81%A9/g, "");

letters = decodeURIComponent(letters);
letters = letters.replace(/  /g, " ");
//letters = letters.replace(/\r\n/g, "\n");
letters = letters.replace(/ /g, ""); // end of line


// dublicate from top
//https://stackoverflow.com/questions/22962220/remove-multiple-line-breaks-n-in-javascript
//letters = letters.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');
letters = letters.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
//https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
letters = letters.replace(/  +/g, ' ');


//letters = letters.replace(/\s{2,}/g, ' ');

//console.log([...letters]);





//letters = letters.replace(/[\r\n]/gm, " ");
/*letters = letters.replace(/\s\s+/g, ' ');
letters = letters.replace(/  /g, " ");
letters = letters.replace(/\s{2,}/g, ' ');
letters = letters.replace(/  /g, " ");*/

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
a = a.replace(/</g, "&lt;");
a = a.replace(/>/g, "&gt;");
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
text11 += '<span class="redBg">'+item+'</span>';
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


var wps = timeAverage*5;
var wpm = 1*60/wps;
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









if(answerArr.length <= letters.length&&mode != 'free'){
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


/*
if(printMsgWin == 'Good result'){
document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/neutral.ogg">';
printMsgWin = 'Good result';
}

if(printMsgWin == 'game over'){
document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/error.ogg">';
printMsgWin = 'The previous result is better';
}
*/
// disable msg
if(printMsgWin != 'win'&&printMsgWin != 'tie'){
printMsgWin = '';
document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/click.ogg">';
}



let winMsg = `
<div class="block light border2 padding margin" style="text-align: center; width: 100%;">

<!--<b class="${printMsgWinColor} padding">${printMsgWin}</b>-->

<div class="pre"><span title="word per minute" style="color: var(--c3);">WPM: <span class="">${wpm}</span>${recordMsg}</span> ${wpmProgress} </div>

<span> acurancy: ≈<span class="">${acurancy}</span>%</span> ${acurancyProgress}
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







answerArr = [];
dateArr = [];
secArr = [];






}







}





function localRefresh(mode){
mainAll(mode);
}

mainAll('');


fuWorker('on');


