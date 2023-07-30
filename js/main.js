// v.3.3.26

// conf
var symbolForSplit = 'pwxortuzqu'; // for split



// if localhost make some pages with php extension, because in the original they are php
var confHost = location.hostname;
if (confHost === "localhost" ||  confHost === "127.0.0.1"||confHost.search("192.168") != -1){
var confExt = 'php';
}else{
var confExt = 'html';
}

// added URL to titile
var domainNameToTitle = confHost.split('.');
domainNameToTitle = domainNameToTitle[0];
document.getElementsByTagName('title')[0].innerHTML += ' / '+domainNameToTitle;

// css color fixed if offline
if(String(window.location.href).slice(0, 4) != 'http'){
document.getElementById('theme').id = 'themeDisable';
}



mainPrintMsg('footer', `

<div id="cookiePopup"></div>
<div id="ads2"></div>


<br>
<div class="wrapper3">

<span><a href="/">home</a></span>
<!--<span><a href="../">up</a></span>-->

<asdf id="fScript"></asdf>
<asdf id="fStyle"></asdf>

<span id="fTheme"><a href="/theme.${confExt}">Themes</a></span>
<span><a href="https://x.com/inonehp">X</a></span>
<span><a href="/rss.xml">RSS</a></span>
<span id="fPrivacy"><a href="/privacy.${confExt}">cookie: status</a></span>
<!--<span id="fApp"><a href="/app.${confExt}"></a></span>
<span id="fAds"><a href="/ads.${confExt}">ads: ${localStorage.getItem('confAdsStatus')}</a></span>-->

<!--
<span id="fDonate"><a href="/about.${confExt}#donate">donate</a></span>-->

<span id="fDownload"><a href="https://github.com/inonehp/home-page">download</a></span>

<span><a rel="license" title="license" href="https://creativecommons.org/licenses/by-sa/4.0/">license: CC BY-SA 4.0</a></span>

<span><a rel="license" title="license 2" href="/copyright.${confExt}">Some © Copyright</a></span>

</div>




`);

// adding link to footer if project: script.js and style.css
if((window.location.href).indexOf(('/projects/')) >= 0||(window.location.href).indexOf(('/mini-projects/')) >= 0){
fetch('script.js').then(function(response) {
//console.log(response);
if (response.status != '404') {
mainPrintMsg('fScript', `<span><a class="green" href="script.js">script.js</a></span>`);
}
});

fetch('style.css').then(function(response) {
if (response.status != '404') {  mainPrintMsg('fStyle', `<span><a class="orange" href="style.css">style.css</a></span>`);
}
});
}


//mainPrintMsg('fCode', `<span>`+window.location.href+`</span>`); 

// about link
// https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript

mainPrintMsg('fAbout', `<a href="/about.${confExt}">about</a>`); 


var confWorkerStatus = 'off';
if(localStorage.getItem('confWorkerStatus') != null){
confWorkerStatus = localStorage.getItem('confWorkerStatus');
}
mainPrintMsg('fApp', `<a href="/app.${confExt}">app: ${confWorkerStatus}</a>`); 





// cookie agree
var confDataCollection = 'not selected';

// auto detect agree, overwride default

// need agree
//https://www.termsfeed.com/blog/cookie-consent-outside-eu/
//https://stackoverflow.com/questions/38399465/how-to-get-list-of-all-timezones-in-javascript

var timeZone = (Intl.DateTimeFormat().resolvedOptions().timeZone).toLowerCase();
if(
timeZone.indexOf('argentina'.toLowerCase()) >= 0||
timeZone.indexOf('brazil'.toLowerCase()) >= 0||
timeZone.indexOf('japan'.toLowerCase()) >= 0||
timeZone.indexOf('europe'.toLowerCase()) >= 0||
timeZone.indexOf('mexico_city'.toLowerCase()) >= 0||
timeZone.indexOf('lagos'.toLowerCase()) >= 0
){
confDataCollection = 'not selected';
//confDataCollection = 'on';
// else not need agree
}else{
confDataCollection = 'on';
}

// cookie setting from user setting, overwrided (auto in top)
if(localStorage.getItem('confDataCollection') != null){
confDataCollection = localStorage.getItem('confDataCollection');
}
mainPrintMsg('fPrivacy', `<a href="/privacy.${confExt}">cookies: ${confDataCollection}</a>`); 






var lang = 'en';

// confDevice - device name: mobile, pc
var confDevice = '';
/*if(confDataCollection != 'on'){
confDevice = '(disabled, privacy)';
}else{}*/
if(navigator.userAgent.search("iPhone|Android|Opera Mini|Mobile|Lumia|Phone") != -1){ confDevice = 'mobile';  }
if(navigator.userAgent.search("PlayStation|Xbox|TV|Roku|SmartTV|BRAVIA") != -1){ confDevice = 'tv';  }
if(confDevice == ''){ confDevice = 'pc'; }









// start theme

// confDeviceTheme - device theme (dark or light)
confDeviceTheme = 'none';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { confDeviceTheme = 'dark'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) { confDeviceTheme = 'light'; }


// insert color-theme.css in header
function mainPrintTheme(theme){
if(document.getElementById('theme') != null){


//https://stackoverflow.com/questions/36641137/how-exactly-does-link-rel-preload-work
var res = document.createElement("link");
res.rel = "preload";
res.as = "style";
res.href = '/css/'+theme+'.css';
document.head.appendChild(res);

document.getElementById('theme').href = '/css/'+theme+'.css';
}
}


var theme = localStorage.getItem('themeMain');
var themeListLight = [
"light",
"l-blue",
"l-green",
"l-olive",
"l-orange",
"l-pink",
"l-purple",
"l-plum",
"l-red",
"l-sea",
"l-violet",
"l-yellow"
];

var themeListDark = [
"dark",
"d-green",
"d-blue",
"d-orange",
"d-pink",
"d-plum",
"d-red",
"d-sea",
"d-violet",
"d-yellow"
];

var themeListOther = [
"o-blue",
"o-green",
"o-lime",
"o-mint",
"o-olive",
"o-orange",
"o-pink",
"o-plum",
"o-purple",
"o-sea",
"o-silver",
"o-violet",
"o-yellow"
];

var themeListOtherDark = [
"od-blue",
"od-brown",
"od-green",
"od-gray",
"od-forest",
"od-pink",
"od-plum",
"od-purple",
"od-red",
"od-olive",
"od-sea",
"od-slate",
"od-violet"
];



// fav from others
var themeListBest = [
"light",
"l-green",
"l-olive",
"l-orange",
"l-yellow",

"dark",
"d-blue",
"d-green",
"d-sea",
"d-violet",

"o-yellow",
"o-lime",
"o-orange",
"o-olive",
"o-silver",

"od-blue",
"od-green",
"od-gray",
"od-sea",
"od-slate",
"od-violet"
];



var themeListOption2 = [
"rand-l",
"rand-d",
"rand-o",
"rand-od",

"rand-lo",
"rand-dod",

"rand-best",

"rand-all",

"auto",
"auto-rand",
"auto-rand-all",

"auto-time",
"auto-t-rand",
"auto-t-rand-all"
];

// all light theme
var themeListLO = [];
themeListLO.push(...themeListLight);
themeListLO.push(...themeListOther);

// all dark theme
var themeListDOD = [];
themeListDOD.push(...themeListDark);
themeListDOD.push(...themeListOtherDark);

var themeListOD = [];
themeListOD.push(...themeListLight);
themeListOD.push(...themeListOther);

var themeList = [];
themeList.push(...themeListLight);
themeList.push(...themeListDark);
themeList.push(...themeListOther);
themeList.push(...themeListOtherDark);


var themeListOption = [];
themeListOption.push(...themeList);
themeListOption.push(...themeListOption2);


if(theme == null){ theme = 'auto'; }

var confRealTmpTheme = '';
var confThemeEmbed = '';

    
function themeAuto(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
confRealTmpTheme = 'dark';
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}else{
confRealTmpTheme = 'light';
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}
}

function themeAutoRandom(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
confRealTmpTheme = themeListDark[Math.floor(Math.random()*themeListDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}else{
confRealTmpTheme = themeListLight[Math.floor(Math.random()*themeListLight.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}
}


function themeAutoRandomAll(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
confRealTmpTheme = themeListDOD[Math.floor(Math.random()*themeListDOD.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}else{
confRealTmpTheme = themeListLO[Math.floor(Math.random()*themeListLO.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}
}

function setTheme(mode){
/*themeList.forEach((element) => {
if(mode == element){
//document.getElementById('theme').href = '/css/'+mode+'.css';
mainPrintTheme(confRealTmpTheme);
}
})*/

var themeSelect;
if(themeList.includes(mode) == true){ themeSelect = mode; }

switch (mode) {

case 'auto-time':
if(new Date().getHours() <= 6||new Date().getHours() >= 19){
//if(new Date().getSeconds() % 2 == 0){
confRealTmpTheme  = 'dark';
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}else{
confRealTmpTheme  = 'light';
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-t-rand':
if(new Date().getHours() <= 6||new Date().getHours() >= 19){
//if(new Date().getSeconds() % 2 == 0){
confRealTmpTheme = themeListDark[Math.floor(Math.random()*themeListDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}else{
confRealTmpTheme = themeListLight[Math.floor(Math.random()*themeListLight.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}
break;

case 'auto-t-rand-all':
if(new Date().getHours() <= 6||new Date().getHours() >= 19){
//if(new Date().getSeconds() % 2 == 0){
confRealTmpTheme = themeListDOD[Math.floor(Math.random()*themeListDOD.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}else{
confRealTmpTheme = themeListLO[Math.floor(Math.random()*themeListLO.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
}
break;


/*case 'rand-all-blink':
themeRandomAllBlink();
//var interval2 = setInterval(themeRandomAllBlink, 4000);
break;*/

case 'auto-rand':
themeAutoRandom();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAutoRandom();
});
break;

case 'auto-rand-all':
themeAutoRandomAll();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAutoRandomAll();
});
break;



case 'rand-l':
confRealTmpTheme = themeListLight[Math.floor(Math.random()*themeListLight.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-d':
confRealTmpTheme = themeListDark[Math.floor(Math.random()*themeListDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-o':
confRealTmpTheme = themeListOther[Math.floor(Math.random()*themeListOther.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-od':
confRealTmpTheme = themeListOtherDark[Math.floor(Math.random()*themeListOtherDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-lo':
confRealTmpTheme = themeListLO[Math.floor(Math.random()*themeListLO.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-dod':
confRealTmpTheme = themeListDOD[Math.floor(Math.random()*themeListDOD.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-best':
confRealTmpTheme = themeListBest[Math.floor(Math.random()*themeListBest.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-all':
confRealTmpTheme = themeList[Math.floor(Math.random()*themeList.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case themeSelect:
confRealTmpTheme = mode;
//document.getElementById('theme').href = '/css/'+mode+'.css';
mainPrintTheme(confRealTmpTheme);
break;

// auto  
default:
themeAuto();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAuto();
});
break;
}




if(confRealTmpTheme.search("dark|d-") != -1){
confThemeEmbed = 'dark';
}else{
confThemeEmbed = 'light';
}
//console.log(confThemeEmbed);
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.cookie = "theme=dark; SameSite=None; Secure; path=/";
}else{
document.cookie = "theme=light; SameSite=None; Secure; path=/";
}

setTheme(theme);

/* // disabled for if not theme, Unexpected behavior
window.addEventListener('storage', () => {
if(theme != localStorage.getItem('themeMain')){
setTheme(localStorage.getItem('themeMain')); //alert('not');
}
});
*/
// end theme







// serviceWorker (for webpage in offline mode or insall app from page, not for all)

function fuWorker(fuSWstatus){

if(fuSWstatus == 'on'&&confWorkerStatus == 'on'){


//https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open
//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register
//https://stackoverflow.com/questions/47027218/set-a-variable-messagingsenderid-in-service-worker-firebase

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
//.register(`sw.js?q=${swFileList}`, {scope: './'})
.register(`sw.js`, {scope: ''})
.then((registration) => {
console.log('Service worker registration succeeded:', registration);

//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/update
registration.update();



//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
 navigator.serviceWorker.addEventListener("message", (event) => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ${event.data}`);


  });

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage("Hi service worker");
  });




  }, /*catch*/ (error) => {
console.error(`Service worker registration failed: ${error}`);
  });
} else {
  console.error('Service workers are not supported.');
}











let element = document.createElement('link'); 
element.setAttribute('rel', 'manifest'); 
element.setAttribute('href', "manifest.webmanifest"); 
document.querySelector('head').appendChild(element);






// install app button

//https://github.com/mdn/pwa-examples
//https://developer.mozilla.org/docs/Web/Progressive_web_apps/Add_to_home_screen
// Code to handle install prompt on desktop
async function printInstallAppLink(){
if(document.getElementById('fApp') != null){

let deferredPrompt;
//const addBtn = document.querySelector('.add-button');
const addBtn = document.getElementById('fApp')
//addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
// addBtn.style.display = 'block';
mainPrintMsg('fApp', `<a href="#">app: Install app</a>`); 
addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
//addBtn.style.display = 'none';
mainPrintMsg('fApp', `<a href="#">app: Install in progress</a>`); 
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
//        console.log('app: User accepted the app prompt');
mainPrintMsg('fApp', `<a href="#">app: installed</a>`); 
      } else {
//        console.log('app: User dismissed the app prompt');
mainPrintMsg('fApp', `<a href="#"app: install cancelled</a>`); 
      }
      deferredPrompt = null;
    });
  });
});
}
}
printInstallAppLink();






}
}

// print theme mode and name in footer
if(document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = '<a href="/theme.'+confExt+'">theme: '+theme+' ('+confRealTmpTheme+')</a>';
}

function fuReload(){ location.reload(true); }
function reload(){ location.reload(true); }


function mainPrintMsg(id, PrintMsg){
if(document.getElementById(id) != null){
document.getElementById(id).innerHTML = PrintMsg;
}else{
// console.log(id+' not fount');
}
}








// v.1.1.2
// dropdown Menu
//https://www.w3schools.com/howto/howto_js_dropdown.asp
// menu click
async function dropdownMenuFunction() {
  var x = document.getElementById("dropdownMenu");
 // alert(x.style.display);
  if (x.style.display === "none"||x.style.display === "") {
document.getElementById("dropdownMenuButton").innerHTML = '☶ Menu'; 
x.style.display = "block";
  } else {
x.style.display = "none";
document.getElementById("dropdownMenuButton").innerHTML = '☰ Menu'; 
  }

// out area hide
var getclick = document.getElementById('dropdownMenuButton');
document.addEventListener('click', function(event) {
// hide and make posible text selected
if (!getclick.contains(event.target)&&document.getSelection().toString() == '') {
//alert('out');
var x = document.getElementById("dropdownMenu");
x.style.display = "none";
document.getElementById("dropdownMenuButton").innerHTML = '☰ Menu'; 
    }
});

}


