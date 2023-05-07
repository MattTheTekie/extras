// v.1.1.1


function randomRadio(printId, json){
var json = radioJsonVar;

//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



var count = 0;
var scriptDir = '';

//alert(json[getRandomInt(json.length)]);
//alert(json.length);

var id = getRandomInt(json.length);


var post = `${json[id]['text']} <a target="_blank" href="${json[id]['url']}">${json[id]['url']}</a>`;
post += `<br>play sourcce: ${json[id]['text3']} <a target="_blank" href="${json[id]['text2']}">${json[id]['text2']}</a>`;
post += highlightText2('', '');
var tag = highlightText2(' '+json[id]['tag'], '');

document.getElementById(printId).innerHTML = `
<div class="center2">
<div class="wrapper2">


<!-- post -->
<div class="post2 bgList brand border3List" id="${json[id]['id']}">
<span class="pre">${post}</span>
<div class="postFooter">
<span class="postTagList">${tag}</span>
<span class="postTime"></span>
</div>
</div>

<br>
<a class="tag padding light border3 margin" onclick="reload()"  style="display: block; text-align: center;" href="#">reload</a>
<!-- // post -->

<div class="xSmall tRight block margin padding op">total: ${json.length}</div>

</div>
</div>
`;

var multiEmbedStatus = 'off';



// from blog
// 2
// highlight Text2 with autoplay when pressed id (date)
function highlightText2(text, hrefInOut){
//text = decodeURIComponent(text); // error sometimes

// if code


text = text.replace(/</g, "&lt;");
text = text.replace(/>/g, "&gt;");

var play = '';
let text2 = '';
let embed = '';
let embed2 = '';

let w = '100%';
let h = '190px'; 

text = [...text];
let forSplit = [`
`, " "
]
text.forEach((item) => {
forSplit.forEach((item2) => { // foreach
if(item == item2){
item = item+symbolForSplit;
}
});
text2 += item;
});

//return text = text.toString();
//return text = text.join("");

//return text = text2;
//text = [...text];

text = '';
const myArray = text2.split(symbolForSplit);
myArray.forEach((item) => {
//text += item.hostname;
//if(item.search("http") != -1){ 
/*if(item[0]+item[1]+item[2]+item[3] == 'http'&&item.search("http|://") != -1){ 
var host = new URL(item).hostname; // stop working when error
}
*/

let checkEmbedEmpty = item.split('/');
//if(item.split('/').length > 4){
if(checkEmbedEmpty[3]){
var host = item.split('/');
if(count == 0){
if(host[3] != undefined){
switch (host[2]) {


case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
if(confDevice == 'mobile'){
embed = `<iframe src="https://tunein.com/embed/player/${play}/?autoplay=true&background=${confThemeEmbed}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`;
}else{
embed = `<iframe width="${w}" height="300" src="${item}"></iframe>`;
}
break;

//default:



}
}
}
}

itemCheck = item.replaceAll(/\./g, symbolForSplit);

/*
if(item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1){ 
embed = `<a href="${item}"><img class="border3" src="${item}" width=""></a>`
}*/

if(count == 0){
if(json[id]['text3'] == 'm3u8') {
play = json[id]['text2'];
embed2 = `<iframe src="https://www.hlsplayer.org/play?url=${play}" style="width: 100%; height: ${h};" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>player: <a href="https://www.hlsplayer.org/">www.hlsplayer.org</a>`;
}


if(json[id]['text3'] == 'mp3'||json[id]['text3'] == 'aac'||json[id]['text3'] == 'ogg') {
play = json[id]['text2'];
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg"><source src="${play}" type="audio/mpeg">Your browser does not support the audio element.</audio>`;

}

if(json[id]['text3'] == 'iframe') {
play = json[id]['text2'];
embed2 = `<iframe width="${w}" height="340" src="${play}"></iframe>`;
}
/*if(item.search("tunein.com") == -1&&item.slice(0, 4) == 'http'&&item.search("http|://") != -1) {
embed2 = `<iframe width="${w}" height="340" src="${item}"></iframe>`;
}*/

}


//if(item.search("http") != -1){
if(item.slice(0, 4) == 'http'&&item.search("http|://") != -1){
item = `<a target="_blank" href="${item}">${item}</a>`;
}

//add tag
if(item[0] == '#'){


item = item.replaceAll(/#/g, "");
if(hrefInOut == 'out'){
/*item = `<a rel="nofollow" href="/projects/blog-in-progress/?q=${item} tag">#${item} <span class="sup">⇗</span></a>`;*/
item = `<a rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}else{
item = `<a rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}
}

text += item;


/*
// multi embed
if(multiEmbedStatus == 'on'&&embedStatus != 'off'){
text += embed+embed2;
embed = '';
embed2 = '';
}*/

// multi embed end


});
/*
// single embed
if(multiEmbedStatus != 'on'){ text += embed+embed2; }
*/

count++;
//return text;
return text+' '+embed+embed2;
}



}

