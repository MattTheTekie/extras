// v.2.2.2
// About: insert icon using class name.



async function mainPrintMsg(id, PrintMsg, option){
if(document.getElementById(id) != null){
if(option == 'plus'||option == '+'){
document.getElementById(id).innerHTML += PrintMsg;
}else{
document.getElementById(id).innerHTML = PrintMsg;
}
}else{
// console.log(id+' not fount');
}
}


function insertIcon(classNameForInsert, mode){
// mode: "strict" - for full word no part, like firefox and insert fire
if(mode != 'strict'){ mode = ''; }

let icons = {

"angel":"😇",
"angle":"🔺",
"antilope":"🦌", "gnu":"🦌",
"balloon":"🎈",
"bird":"🐦", "twitter":"🐦",
"blog":"📝", "todo":"📝", "task":"📝", "note":"📝", "reminde":"📝", "paper":"📝",
"book":"📚", "quiz":"📚",
"bookmark":"🔖",
"brain":"🧠", "memory":"🧠",
"calculator":"🧮", "abacus":"🧮",
"circle":"⭕", "round":"⭕",
"cookie":"🍪",
"cut":"✂️",
"clock":"🕑",
"cofee":"☕", "coffee":"☕",
"copyright":"©",
"comment":"💬","talk":"💬","chat":"💬",
"css":"🖥️", "php":"🖥️", "java":"🖥️", "code":"🖥️", "unicorn":"🦄",
"db":"💾", "data":"💾", "database":"💾", "keep":"💾", "save":"💾",
"dir":"📁️",
"developer":"💻",
"document":"📄", "page":"📄",
"draw":"✏️", "drawing":"✏️",
"earth":"🌍",
"file":"🗃️",
"game":"🎮",
"teapot":"🫖",
"teacup":"🍵",
"friendica":"🇫",
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
"map":"📍", "sitemap":"📍",
"mammoth ":"🦣", "mastodon":"🦣",
"mail":"📧",
"menu":"☰",
"movie":"🎥",
"music": "🎶",
"network":"📶",
"news":"📰",
"pumpkin":"🎃", "halloween":"🎃",
"pc":"🖥",
"project":"📄", "tpl":"📄", "template":"📄", "templates":"📄", "iframe":"📄",
"radio":"📻",
"random":"🎲","rnd":"🎲", "rand":"🎲", "dice":"🎲",
"robot":"🤖", "auto":"🤖",
"share":"🔁",
"script":"📜", "code":"📜", "coding":"📜", "history":"📜",
"search": "🔎",
"sleep":"😴💤", "bed":"🛏",
"store":"🛍️","shop":"🛍️", "extension":"🛍️", "extensions":"🛍️",
"style":"🎨", "css":"🎨", "color":"🎨", "theme":"🎨", "palette":"🎨", "design":"🎨", "webdesign":"🎨",
"time":"⌛", "timer":"⌛",
"tmp":"⏳", "temporary":"⏳",
"training":"🏃", "run":"🏃",
"test":"🧪", "demo":"🧪", "lorem":"🧪", "ipsum":"🧪", 
"play":"▶️",
"pleroma":"🟧️",
"progress":"█░░",
"quote":"❝❞", "quotes":"❝❞",
"rain":"💧",
"smoking":"🚭",
"sun":"🌞",
"tool":"🔨",
"tv":"📺",
"url":"🔗","link":"🔗","www":"🔗", "popup":"🔗",
"setting":"⚙️", "custom":"⚙️",
"snake":"🐍",
"snow":"❄️", "cold":"❄️", "winter":"❄️",
"star":"⭐",
"stopwatch":"⏱️",
"user":"👤", "followers":"👤",
"weather":"🌤️",
"web":"🕸️", "internet":"🕸️", "browser":"🕸️",
"wallpaper":"🖼", "picture":"🖼", "image":"🖼", "img":"🖼", "pixel":"🖼","instagram":"🖼","pxlmo":"🖼",
"window":"🪟",


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

/* img ico
"instagram":`<img src="/img/icons/instagram-48x48.png" alt="ico" width="16" height="16">`,
"twitter":`<img src="/img/icons/x-48x48.png" alt="ico" width="16" height="16">`,
*/

};

let iconsArr = Object.getOwnPropertyNames(icons);
// links
iconsArr = iconsArr.sort();

var counter = 0; // for only be 1 icon

const allLinks = document.querySelectorAll('.'+classNameForInsert);
allLinks.forEach((item, index) => {

if(counter == 0){



let linkText = item.innerHTML;


let linkURL = item.href;
if(item.href != undefined){
linkURL = item.href;
}else{ linkURL = 'ldskjlf'; }

let check = '';
let icArr = [];
counter = 0;

iconsArr.forEach((item, index) => {

let textIcon = String(item);
let icon = String(icons[item]);
//console.log((linkText.toLowerCase()+'')+((icon+' ')));


//counter == 0 - only one icon insert


if(mode != 'strict'&&check != 'exit'&&counter == 0){
// main, not strict

//https://stackoverflow.com/questions/412123764/how-to-remove-numbers-from-a-string
if(
(''+linkText.replace(/\d+/g, '').toLowerCase()).indexOf((''+textIcon.replace(/\d+/g, '')+'')) >= 0
||linkText.replace(/\d+/g, '').toLowerCase().trim().search(textIcon.replace(/\d+/g, '')) != -1
&&linkText.replace(/\d+/g, '').toLowerCase().trim().search(icon.replace(/\d+/g, '')) == -1){
icArr.push(icon);
check = 'exit';
counter++;
}

}

if(mode == 'strict'&&check != 'exit'&&counter == 0){
// main, strict word
if(
(' '+linkText.replace(/\d+/g, '').toLowerCase()).indexOf((' '+textIcon.replace(/\d+/g, '')+'')) >= 0
||(' '+linkText.replace(/\d+/g, '').toLowerCase()+' ').indexOf((' '+textIcon.replace(/\d+/g, '')+' ')) >= 0
&&(linkText.replace(/\d+/g, '').toLowerCase()+'').indexOf((textIcon.replace(/\d+/g, '')+'')) == -1){
icArr.push(icon);
check = 'exit';
counter++;

}
}

});


// insert favicon url
if(check != 'exit'&&counter == 0){
// if link
if(linkText.toLowerCase().trim().slice(0, 4) == 'http'&&linkText.toLowerCase().trim().search("http|://|www.") != -1&&counter == 0){
let linkTextURL = linkText;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="16" height="16">`;
if(localStorage.getItem('confDataCollection') != 'on'){ iconHTTP = '🔗'; }
icArr.push(iconHTTP);
check = 'exit';
counter++;
}
}

// insert favicon text
if(check != 'exit'&&counter == 0){
// if link2
if(linkURL.toLowerCase().trim().search(location.host) == -1&&linkURL.toLowerCase().trim().slice(0, 4) == 'http'&&linkURL.toLowerCase().trim().search("http|://|www.") != -1&&counter == 0){
let linkTextURL = linkURL;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="16" height="16">`;
if(localStorage.getItem('confDataCollection') != 'on'){ iconHTTP = '🔗'; }
icArr.push(iconHTTP);
check = 'exit';
counter++;
}
}



// main insert icons if rule bellow true and text icon == text from link
if(check == 'exit'&&counter == 1){
icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');

linkText = `<span class="material-icons ico brand">
<div>${icon}</div>
</span>`+''+linkText;
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;


}else{
linkText = `<span class="material-icons ico brand">
<div>●</div>
</span>`+''+linkText;
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;


}



}


ckeck = '';
icArr = [];

counter = 0;
});

}

















