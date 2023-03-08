// v.1.2.20

function insertIcon(id){

let icons = {
"angel":"😇",
"angle":"🔺",
"bird":"🐦", "twitter":"🐦",
"blog":"📝", "todo":"📝", "task":"📝", "note":"📝", "reminde":"📝", "paper":"📝",
"book":"📚", "quiz":"📚",
"bookmark":"🔖",
"brain":"🧠", "memory":"🧠",
"circle":"⭕", "round":"⭕",
"cookie":"🍪",
"cut":"✂️",
"clock":"🕑",
"cofee":"☕",
"comment":"💬","talk":"💬","chat":"💬",
"css":"🖥️", "php":"🖥️", "java":"🖥️", "code":"🖥️", "unicorn":"🦄",
"db":"💾", "data":"💾", "database":"💾", "keep":"💾", "save":"💾",
"dir":"📁️",
"dev":"💻✏️",
"document":"📄", "page":"📄",
"draw":"✏️", "drawing":"✏️",
"file":"🗃️",
"game":"🎮",
"geany":"🫖",
"fox":"🦊", "firefox":"🦊",
"github":"🐱",
"hello":"👋",
"hot":"🔥", "fire":"🔥",
"info":"ℹ️", "faq":"ℹ️", "about":"ℹ️", 
"insert":"📋", "paste":"📋",
"joystick":"🕹",
"keyboard":"⌨️","typing":"⌨️",
"mark":"✔️", "check":"✅",
"label":"🏷️", "tag":"🏷️",
"laptop":"💻", "notebook":"💻",
"live":"🔴", "online":"🔴",
"like":"❤","love":"❤","fav":"❤",
"mammoth ":"🦣", "mastodon":"🦣",
"mail":"📧",
"movie":"🎥",
"music": "🎶",
"network":"📶",
"news":"📰",
"pumpkin":"🎃", "halloween":"🎃",
"pc":"🖥",
"project":"📄", "tpl":"📄",
"radio":"📻",
"random":"🎲","rnd":"🎲", "rand":"🎲", "dice":"🎲",
"robot":"🤖", "auto":"🤖",
"share":"🔁",
"script":"📜", "code":"📜", "history":"📜",
"search": "🔎",
"sleep":"😴💤", "bed":"🛏",
"store":"🛍️","shop":"🛍️", "extension":"🛍️",
"style":"🎨", "css":"🎨", "color":"🎨", "theme":"🎨", "palette":"🎨",
"time":"⌛", "timer":"⌛",
"tmp":"⏳", "temporary":"⏳",
"training":"🏃", "run":"🏃",
"test":"🧪", "demo":"🧪", "lorem":"🧪", "ipsum":"🧪", 
"play":"▶️",
"progress":"█░░",
"rain":"💧",
"smoking":"🚭",
"sun":"🌞",
"tool":"🔨",
"tv":"📺",
"url":"🔗","link":"🔗","www":"🔗",
"setting":"⚙️", "custom":"⚙️",
"snake":"🐍",
"snow":"❄️", "cold":"❄️", "winter":"❄️", 
"web":"🕸️", "internet":"🕸️", "browser":"🕸️",
"wallpaper":"🖼", "picture":"🖼", "image":"🖼", "img":"🖼", "pixel":"🖼","instagram":"🖼","pxlmo":"🖼",
"question":"❓",
"light":"⬜️", "white":"⬜️",
 "dark":"⬛", "black":"⬛",
"red":"🟥",
"orange":"🟧",
"yellow":"🟨",
"green":"🟩",
"indigo":"🟪",
"violet":"🟪",
"blue":"🟦"

};

let iconsArr = Object.getOwnPropertyNames(icons);

if(document.getElementById(id) == null){
console.log('id null');
}else{

// links
let divId = document.getElementById(id);

const allLinks = divId.querySelectorAll("a");
allLinks.forEach((item, index) => {




let linkText = item.innerHTML;
let check = '';
let icArr = [];


iconsArr.forEach((item) => {


let textIcon = item;
let icon = icons[textIcon];
//console.log((linkText.toLowerCase()+'').indexOf((icon+' ')));

// main, not strict
if(linkText.toLowerCase().search(textIcon) != -1&&linkText.toLowerCase().search(icon) == -1&&linkText != ' '){
// main, strict word
//if((linkText.toLowerCase()+' ').indexOf((textIcon+' ')) >= 0&&(linkText.toLowerCase()+'').indexOf((icon+'')) == -1){


icArr.push(icon+'');
check = 'exit';
}
});

if(check == 'exit'){
icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');
linkText = '<span class="ico2 pre">'+icon+'</span><span class="pre"> </span>'+linkText;
divId.getElementsByTagName("a")[index].innerHTML = linkText;
}else{
//linkText = '<span class="op pre">📄 </span>'+linkText;
linkText = '<span class="pre"> </span>' +linkText+'<span class="pre"> </span>';
divId.getElementsByTagName("a")[index].innerHTML = linkText;
}

ckeck = '';
icArr = [];
});








// buttons, dublicated from links
const allButtons = divId.querySelectorAll("button");
allButtons.forEach((item, index) => {

let linkText = item.innerHTML;
let check = '';
let icArr = [];

iconsArr.forEach((item) => {
let textIcon = item;
let icon = icons[textIcon];
// main2, not strict word
if(linkText.toLowerCase().search(textIcon) != -1&&linkText.toLowerCase().search(icon) == -1){ 
// main, strict word
//if(linkText.toLowerCase()+' '.indexOf(textIcon+' ') >= 0&&linkText.toLowerCase()+''.indexOf(icon+'')){ 
icArr.push(icon);
check = 'exit';
}
});

if(check == 'exit'){
icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');
linkText = '<span class="ico2 pre">'+icon+'</span><span class="pre"> </span>'+linkText;
divId.getElementsByTagName("button")[index].innerHTML = linkText;
}else{
//linkText = '<span class="op pre">📄 </span>'+linkText;
linkText = '<span class="pre"> </span>' +linkText+'<span class="pre"> </span>';
divId.getElementsByTagName("button")[index].innerHTML = linkText;
}

ckeck = '';
icArr = [];
});








}
}


