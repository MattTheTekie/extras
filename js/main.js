/* v.3.3.2 */

var symbolForSplit = 'pwxortuzqu';
// conf
var confHost = location.hostname;
if (confHost === "localhost" ||  confHost === "127.0.0.1"||confHost.search("192.168") != -1){
var confExt = 'php';

}else{
var confExt = 'html';
}


// css color fixed if offline
if(String(window.location.href).slice(0, 4) != 'http'){
document.getElementById('theme').id = 'themeDisable';
}



mainPrintMsg('footer', `

<div id="ads2"></div>


<div class="wrapper3 padding">

<!--<span><a  class="button" href="../">&#x2190;</a></span>
-->

<span><a href="/">index</a></span>

<span id="fTheme"><a href="/theme.${confExt}">Themes</a></span>
<span id="fApp"><a href="/app.${confExt}">app: status</a></span>
<span id="fAds"><a href="/ads.${confExt}">ads: ${localStorage.getItem('confAdsStatus')}</a></span>
<span id="fPrivacy"><a href="/privacy.${confExt}">cookie: status</a></span>


<span><a href="/rss.xml">RSS</a></span>


<span id="fAbout"><a href="/about.${confExt}">about</a></span>

<span><a rel="license" style="/*text-transform: lowercase;*/" title="license" href="https://creativecommons.org/licenses/by-sa/4.0/">license: CC BY-SA 4.0</a></span> <!-- footer, LICENSE.md README.md -->

</div>

`);

//mainPrintMsg('fCode', `<span>`+window.location.href+`</span>`); 

// about link
// https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript

mainPrintMsg('fAbout', `<a href="/about.${confExt}">about</a>`); 


var confWorkerStatus = 'off';
if(localStorage.getItem('confWorkerStatus') != null){
confWorkerStatus = localStorage.getItem('confWorkerStatus');
}
mainPrintMsg('fApp', `<a href="/app.${confExt}">app: ${confWorkerStatus}</a>`); 

var confDataCollection = 'off';
// if timeZone  not Europe confDataCollection: on, when not selected
if((Intl.DateTimeFormat().resolvedOptions().timeZone+' ').indexOf(('Europe')) == -1&&(Intl.DateTimeFormat().resolvedOptions().timeZone+' ').indexOf(('America/Los_Angeles')) == -1){
confDataCollection = 'on';
}
if(localStorage.getItem('confDataCollection') != null){
confDataCollection = localStorage.getItem('confDataCollection');
}
mainPrintMsg('fPrivacy', `<a href="/privacy.${confExt}">cookies: ${confDataCollection}</a>`); 



var lang = 'en';

var confDevice = '';
/*if(confDataCollection != 'on'){
confDevice = '(disabled, privacy)';
}else{}*/
if(navigator.userAgent.search("iPhone|Android|Opera Mini|Mobile|Lumia|Phone") != -1){ confDevice = 'mobile';  }
if(navigator.userAgent.search("PlayStation|Xbox|TV|Roku|SmartTV|BRAVIA") != -1){ confDevice = 'tv';  }
if(confDevice == ''){ confDevice = 'pc'; }


confDeviceTheme = 'none';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { confDeviceTheme = 'dark'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) { confDeviceTheme = 'light'; }





// theme
function mainPrintTheme(theme){
if(document.getElementById('theme') != null){
document.getElementById('theme').href = '/css/'+theme+'.css';
}
}


var theme = localStorage.getItem('theme');
var themeListLight = [
"light",
"l-olive",
"l-green",
"l-blue",
"l-violet"
];

var themeListDark = [
"dark",
"d-green",
"d-blue",
"d-violet"
];

var themeListOther = [
"o-yellow",
"o-green"
];

var themeListOtherDark = [
"o-d-green",
"o-d-blue",
"o-d-violet"
];

var themeListOption2 = [
"rand-l",
"rand-d",
"rand-o",
"rand-o-d",
"rand-all",
"auto",
"auto-rand",
"auto-time",
"auto-t-rand"
];

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

case 'rand-o-d':
confRealTmpTheme = themeListOtherDark[Math.floor(Math.random()*themeListOtherDark.length)];
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

/* // disabled for if not theme
window.addEventListener('storage', () => {
if(theme != localStorage.getItem('theme')){
setTheme(localStorage.getItem('theme')); //alert('not');
}
});
*/








// serviceWorker (for webpage in offline mode or insall app from page)

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
//registration.update();



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
function printInstallAppLink(){
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
mainPrintMsg('', `<a href="#">app: Install in progress</a>`); 
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










