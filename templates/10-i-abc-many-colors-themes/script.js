// v.1.0.0
/* copy paste from main site */


// css color fixed if offline
if(String(window.location.href).slice(0, 4) != 'http'){
document.getElementById('theme').id = 'themeDisable';
}


confDeviceTheme = 'none';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { confDeviceTheme = 'dark'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) { confDeviceTheme = 'light'; }


function mainPrintMsg(id, PrintMsg){
if(document.getElementById(id) != null){
document.getElementById(id).innerHTML = PrintMsg;
}else{
// console.log(id+' not fount');
}
}






// theme

confDeviceTheme = 'none';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { confDeviceTheme = 'dark'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) { confDeviceTheme = 'light'; }



function mainPrintTheme(theme){
if(document.getElementById('theme') != null){
document.getElementById('theme').href = '/css/'+theme+'.css';
}
}


var theme = localStorage.getItem('themeTpl');
var themeListLight = [
"light",
"l-blue",
"l-green",
"l-olive",
"l-red",
"l-sea",
"l-violet"
];

var themeListDark = [
"dark",
"d-green",
"d-blue",
"d-orange",
"d-pink",
"d-red",
"d-yellow",
"d-violet"
];

var themeListOther = [
"o-blue",
"o-lime",
"o-mint",
"o-olive",
"o-pink",
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
"od-pink",
"od-purple",
"od-sea",
"od-slate",
"od-violet"

];



// fav from others
var themeListBest = [
"light",
"l-green",
"l-olive",
"dark",
"d-blue",
"d-green",
"d-violet",
"o-yellow",
"o-silver",
"od-blue",
"od-green",
"od-gray",
"od-sea",
"od-slate",
"od-violet-d"
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
if(theme != localStorage.getItem('themeTpl')){
setTheme(localStorage.getItem('themeTpl')); //alert('not');
}
});
*/
// end theme





if(document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = '<a href="./themes.html">theme: '+theme+' ('+confRealTmpTheme+')</a>';
}













