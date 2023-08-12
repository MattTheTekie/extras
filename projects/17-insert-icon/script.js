// v.1.7.0
// Inspired by GitHub profile

async function insertIcon(classNameForInsert, mode){
// mode: "strict" by word or not sctirct, example: insertIcon(idDivWrapper, 'strict');
if(mode != 'strict'){ mode = ''; }

let icons = {
/*
"name blank":`<img src="/img/icons/name blank-48x48.png" alt="ico" width="12" height="12">`
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


