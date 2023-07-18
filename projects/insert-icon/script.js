// v.1.5.0
// Inspired by GitHub profile

async function insertIcon(classNameForInsert, mode){
// mode: "strict" by word or not sctirct, example: insertIcon(idDivWrapper, 'strict');
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
"dev":"💻✏️",
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
"blue":"🟦",

"php":`<img src="/img/icons/php-128x128.png" alt="ico" width="16" height="16">`,
"apache":`<img src="/img/icons/apache-128x128.png" alt="ico" width="16" height="16">`,
"gimp":`<img src="/img/icons/gimp-128x128.png" alt="ico" width="16" height="16">`,
"chrome":`<img src="/img/icons/google-chrome-128x128.png" alt="ico" width="16" height="16">`,
"inkscape":`<img src="/img/icons/inkscape-128x128.png" alt="ico" width="16" height="16">`,
"krita":`<img src="/img/icons/krita-128x128.png" alt="ico" width="16" height="16">`,
"mysql":`<img src="/img/icons/mysql-128x128.png" alt="ico" width="16" height="16">`,
"mariadb":`<img src="/img/icons/mariadb-128x128.png" alt="ico" width="16" height="16">`,
"css3":`<img src="/img/icons/css3-128x128.png" alt="ico" width="16" height="16">`,
"html5":`<img src="/img/icons/html5-128x128.png" alt="ico" width="16" height="16">`,
"javascript":`<img src="/img/icons/javascript-128x128.png" alt="ico" width="16" height="16">`,
"geany":`<img src="/img/icons/geany-128x128.png" alt="ico" width="16" height="16">`,
"firefox":`<img src="/img/icons/firefox-128x128.png" alt="ico" width="16" height="16">`,
"chrome":`<img src="/img/icons/chrome-128x128.png" alt="ico" width="16" height="16">`,
"github":`<img src="/img/icons/github-128x128.png" alt="ico" width="16" height="16">`,
"codepen":`<img src="/img/icons/codepen-128x128.png" alt="ico" width="16" height="16">`,
"deviantart":`<img src="/img/icons/deviantart-128x128.png" alt="ico" width="16" height="16">`,
"twitter":`<img src="/img/icons/twitter-128x128.png" alt="ico" width="16" height="16">`,
"xampp":`<img src="/img/icons/xampp-128x128.png" alt="ico" width="16" height="16">`

};

let iconsArr = Object.getOwnPropertyNames(icons);
// links


const allLinks = document.querySelectorAll('.'+classNameForInsert);
allLinks.forEach((item, index) => {




let linkText = item.innerHTML;
let check = '';
let icArr = [];


iconsArr.forEach((item) => {


let textIcon = item;
let icon = icons[textIcon];
//console.log((linkText.toLowerCase()+'').indexOf((icon+' ')));


// if link
if(linkText.toLowerCase().slice(0, 4) == 'http'&&linkText.toLowerCase().search("http|://|www.") != -1){
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkText}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img  src="${iconHTTP}" alt="ico" width="16" height="16">`;
icArr.push(iconHTTP+'');
check = 'exit';
}



if(mode != 'strict'){
// main, not strict

//https://stackoverflow.com/questions/4993764/how-to-remove-numbers-from-a-string
if(linkText.replace(/\d+/g, '').toLowerCase().search(textIcon) != -1&&linkText.replace(/\d+/g, '').toLowerCase().search(icon) == -1&&linkText != ' '){
icArr.push(icon+'');
check = 'exit';
}
}else{
// main, strict word
if((' '+linkText.replace(/\d+/g, '').toLowerCase()+' ').indexOf((' '+textIcon+' ')) >= 0&&(linkText.replace(/\d+/g, '').toLowerCase()+'').indexOf((icon+'')) == -1){
icArr.push(icon+'');
check = 'exit';
}
}

});

if(check == 'exit'){
icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');
linkText = '<span class="ico2 pre">'+icon+'</span><span class="pre"> </span>'+linkText;
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;
}else{
//linkText = '<span class="op pre">📄 </span>'+linkText;
/*linkText = '<span class="pre"> </span>' +linkText+'<span class="pre"> </span>';
divId.getElementsByTagName("a")[index].innerHTML = linkText;*/
}

ckeck = '';
icArr = [];
});




}


