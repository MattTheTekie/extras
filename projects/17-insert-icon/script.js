// v.1.6.0
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
"php":"🖥️", "java":"🖥️", "code":"🖥️", "unicorn":"🦄",
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
"style":"🎨", "color":"🎨", "theme":"🎨", "palette":"🎨", "design":"🎨", "webdesign":"🎨",
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
"wallpaper":"🖼", "picture":"🖼", "image":"🖼", "photo":"🖼", "img":"🖼", "pixel":"🖼","instagram":"🖼","pxlmo":"🖼",
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

/* rmme
"behance":`<img src="/img/icons/behance-48x48.png" alt="ico" width="12" height="12">`,
"php":`<img src="/img/icons/php-48x48.png" alt="ico" width="12" height="12">`,
"apache":`<img src="/img/icons/apache-48x48.png" alt="ico" width="12" height="12">`,
"gimp":`<img src="/img/icons/gimp-48x48.png" alt="ico" width="12" height="12">`,
"chrome":`<img src="/img/icons/google-chrome-48x48.png" alt="ico" width="12" height="12">`,
"dribbble":`<img src="/img/icons/dribbble-48x48.png" alt="ico" width="12" height="12">`,
"inkscape":`<img src="/img/icons/inkscape-48x48.png" alt="ico" width="12" height="12">`,
"krita":`<img src="/img/icons/krita-48x48.png" alt="ico" width="12" height="12">`,
"mysql":`<img src="/img/icons/mysql-48x48.png" alt="ico" width="12" height="12">`,
"mariadb":`<img src="/img/icons/mariadb-48x48.png" alt="ico" width="12" height="12">`,
"css3":`<img src="/img/icons/css3-48x48.png" alt="ico" width="12" height="12">`,
"html5":`<img src="/img/icons/html5-48x48.png" alt="ico" width="12" height="12">`,
"javascript":`<img src="/img/icons/javascript-48x48.png" alt="ico" width="12" height="12">`,
"geany":`<img src="/img/icons/geany-48x48.png" alt="ico" width="12" height="12">`,
"firefox":`<img src="/img/icons/firefox-48x48.png" alt="ico" width="12" height="12">`,
"chrome":`<img src="/img/icons/chrome-48x48.png" alt="ico" width="12" height="12">`,
"github":`<img src="/img/icons/github-48x48.png" alt="ico" width="12" height="12">`,
"codepen":`<img src="/img/icons/codepen-48x48.png" alt="ico" width="12" height="12">`,
"deviantart":`<img src="/img/icons/deviantart-48x48.png" alt="ico" width="12" height="12">`,
"pinterest":`<img src="/img/icons/pinterest-48x48.png" alt="ico" width="12" height="12">`,
"unsplash":`<img src="/img/icons/unsplash-48x48.png" alt="ico" width="12" height="12">`,
"instagram":`<img src="/img/icons/instagram-48x48.png" alt="ico" width="12" height="12">`,
//"twitter":`<img src="/img/icons/twitter-48x48.png" alt="ico" width="12" height="12">`,
"x":`<img src="/img/icons/x-48x48.png" alt="ico" width="12" height="12">`,
"twitter":`<img src="/img/icons/x-48x48.png" alt="ico" width="12" height="12">`,
"xampp":`<img src="/img/icons/xampp-48x48.png" alt="ico" width="12" height="12">`
*/
};

let iconsArr = Object.getOwnPropertyNames(icons);
// links


const allLinks = document.querySelectorAll('.'+classNameForInsert);
allLinks.forEach((item, index) => {




let linkText = item.innerHTML;



let linkURL = item.href;
if(item.href != undefined){
linkURL = item.href;
}else{ linkURL = 'ldskjlf'; }

let check = '';
let icArr = [];
let counter = 0; // for only be 1 icon

iconsArr.forEach((item) => {


let textIcon = item;
let icon = icons[textIcon];
//console.log((linkText.toLowerCase()+'').indexOf((icon+' ')));







if(mode != 'strict'){
// main, not strict

//https://stackoverflow.com/questions/412123764/how-to-remove-numbers-from-a-string
if(linkText.replace(/\d+/g, '').toLowerCase().search(textIcon.replace(/\d+/g, '')) != -1&&linkText.replace(/\d+/g, '').toLowerCase().search(icon.replace(/\d+/g, '')) == -1&&linkText != ' '&&counter == 0){
icArr.push(icon+'');
check = 'exit';
counter++;
}
}else if(counter == 0){
// main, strict word
if((' '+linkText.replace(/\d+/g, '').toLowerCase()+' ').indexOf((' '+textIcon.replace(/\d+/g, '')+' ')) >= 0&&(linkText.replace(/\d+/g, '').toLowerCase()+'').indexOf((icon.replace(/\d+/g, '')+'')) == -1){
icArr.push(icon+'');
check = 'exit';
counter++
}
}

});



// if link
if(linkText.toLowerCase().slice(0, 4) == 'http'&&linkText.toLowerCase().search("http|://|www.") != -1&&counter == 0){
let linkTextURL = linkText;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="12" height="12">`;
icArr.push(iconHTTP+'');
check = 'exit';
counter++;
}


// if link2
if(linkURL.toLowerCase().search(location.host) == -1&&linkURL.toLowerCase().slice(0, 4) == 'http'&&linkURL.toLowerCase().search("http|://|www.") != -1&&counter == 0){
let linkTextURL = linkURL;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="12" height="12">`;
icArr.push(iconHTTP+'');
check = 'exit';
counter++;
}







if(check == 'exit'){
icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');
linkText = '<span class="" style="font-size: 12px">'+icon+'</span><span class="pre"> </span>'+linkText;
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;
}else{
//linkText = '<span class="op pre">📄 </span>'+linkText;
/*linkText = '<span class="pre"> </span>' +linkText+'<span class="pre"> </span>';
divId.getElementsByTagName("a")[index].innerHTML = linkText;*/
}

counter = 0;
ckeck = '';
icArr = [];
});




}


