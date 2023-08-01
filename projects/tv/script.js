// v.1.2.14

function randomRadio(printId, jsonVar){

//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var count = 0;
var scriptDir = '';
var printTagList = '';
var tagListLimit = '100';
var embedServiceList = '';
//alert(jsonVar[getRandomInt(jsonVar.length)]);
//alert(jsonVar.length);
var checkNotFound = '';

var url = new URL(window.location);


var q = url.searchParams.get("q");
if(q != null){
q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);
q = q.trim();
localStorage.setItem('randomTvQ', q);
}


var tag = url.searchParams.get("tag");
if(tag != null){
tag = tag.replaceAll(/%/g, "%25");
tag = decodeURIComponent(tag);
tag = tag.trim();
}



if(q == null){ q = localStorage.getItem('randomTvQ'); }
if(q == null) { q = '#en'; tag = q; }
var q2 = q;




var arrListForRandom = [];
var i = 0;

// random id tag, q->array->random
jsonVar.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';

if(item['id'] != null){ postId = item['id']; }
if(item['text'] != null){ postText = item['text']; }
if(item['text2'] != null){ postText2 = item['text2']; }
if(item['text3'] != null){ postText3 = item['text3']; }
if(item['tag'] != null){ postTag = item['tag']; }
if(item['url'] != null){ postUrl = item['url']; }
if(item['time'] != null){ postTime = item['time']; }

// collect all tag
printTagList += postTag+symbolForSplit;


if(q2 != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = decodeURIComponent(q2);
qSearch = String(qSearch).toLowerCase();
}
qSearch = String(qSearch).toLowerCase();


// if tag

qData = String(postText+' '+postText2+' '+postText3+' '+postTag).toLowerCase();
if(qSearch[0] == '#'){ qData = qData.replaceAll(/,/g, ' '); }
if((qData).indexOf((qSearch)) >= 0){
arrListForRandom.push(key);

i++;
total = i;
comMessagePrint = `<b class="tCenter"><span class="op">Random TV</span><br><br>${q2} ${i}</b>`;
document.getElementsByTagName('title')[0].innerHTML = `Random TV ${q2}`;
}


if(arrListForRandom.length > 0){
getP2 = Math.floor(Math.random() * arrListForRandom.length);
id = arrListForRandom[getP2];
checkNotFound = ''; // clear
}else{
comMessagePrint = '<div class="center2"><h3 class="red">not found</h3></div>';
id = getRandomInt(jsonVar.length);
//comMessagePrint += '<span class=""> random id: '+id+'</span>';
document.getElementById(printId).innerHTML = `
<div class="block padding margin tCenter">${comMessagePrint}</div>
`;
checkNotFound = 'Not Found';
}



});

//var id = getRandomInt(jsonVar.length);

if(checkNotFound == ''){
var play = highlightText2('', '');
var post = `<b>${jsonVar[id]['text']}</b> ${highlightText2(jsonVar[id]['url'], '')}`;
if(jsonVar[id]['text2'] != ''){
post += `<br>play source: ${jsonVar[id]['text2']}`;
}
var tag = highlightText2(' '+jsonVar[id]['tag'], '');

document.getElementById(printId).innerHTML = `
<div class="block padding margin tCenter">${comMessagePrint}</div>

<div class="center2">
<div class="wrapper">


<div class="post light border3List padding">
<!-- post -->
<div class="post" id="${jsonVar[id]['id']}">
<span class="pre">${post} ${play}</span>
<div class="postFooter">
<span class="postTagList">${tag}</span>
<span class="postTime"></span>
</div>
</div>

<br>
<a class="tag padding light border3 margin" onclick="reload()"  style="display: block; text-align: center;" href="#">reload</a>
<!-- // post -->
</div>

<!--<div class="xSmall tRight block margin padding op">total: ${jsonVar.length}</div>-->

</div>
</div>
`;
}

var multiEmbedStatus = 'off';


// fucntion tagList from Blog
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

if(host[3] != undefined){

switch (host[2]) {



case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":

if((item).indexOf((`v=`)) >= 0){
play = item.split('v=').pop();
if(play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}?&autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; autoplay; picture-in-picture" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if((item).indexOf((`list`)) >= 0){
play = item.split('list=');
play = play[1];
if(play != ''){
embed = `<iframe width="${w}" height="${h}" src="https://www.youtube-nocookie.com/embed/videoseries?list=${play}&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if((item).indexOf((`featured`)) >= 0||(item).indexOf((`@`)) >= 0){
play = item.split('/');
play = play[3];
if(play != ''){
play = play.replace("@", "");
embed = `<iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/?listType=user_uploads&list=${play}&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

break;

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

itemCheck = item.replaceAll(/\./g, symbolForSplit);

/*
if(item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1){ 
embed = `<a href="${item}"><img class="border3" src="${item}" width=""></a>`
}*/

if(count == 0){
if(jsonVar[id]['text3'] == 'm3u8') {
play = jsonVar[id]['text2'];
embed2 = `<iframe src="https://www.hlsplayer.org/play?url=${play}" style="width: 100%; height: ${h};" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>player: <a class="brand" href="https://www.hlsplayer.org/">www.hlsplayer.org</a>`;
}


if(jsonVar[id]['text3'] == 'mp3'||jsonVar[id]['text3'] == 'aac'||jsonVar[id]['text3'] == 'ogg') {
play = jsonVar[id]['text2'];
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg"><source src="${play}" type="audio/mpeg">Your browser does not support the audio element.</audio>`;

}

if(jsonVar[id]['text3'] == 'iframe') {
play = jsonVar[id]['text2'];
embed2 = `<iframe width="${w}" height="360" src="${play}"></iframe>`;
}
/*if(item.search("tunein.com") == -1&&item.slice(0, 4) == 'http'&&item.search("http|://") != -1) {
embed2 = `<iframe width="${w}" height="340" src="${item}"></iframe>`;
}*/

if(jsonVar[id]['text3'] == 'YouTubeChannelID') {
play = jsonVar[id]['text2'];
embed2 = `<iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/live_stream?channel=${play}&autoplay=1" frameborder="0" allowfullscreen></iframe>`;
}


}


//if(item.search("http") != -1){
if(item.slice(0, 4) == 'http'&&item.search("http|://") != -1){
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

//add tag
if(item[0] == '#'){


item = item.replaceAll(/#/g, "");
if(hrefInOut == 'out'){
/*item = `<a rel="nofollow" href="/projects/blog-in-progress/?q=${item} tag">#${item} <span class="sup">⇗</span></a>`;*/
item = `<a class="brand" rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}else{
item = `<a class="brand" rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
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











var hlClass = '';
var color = 'silver';
var size = '';
// fu. tagList from Blog
// other functions 
// start tagList
function tagList(tagList2){

tagList = '';


tagList2 = tagList2.replaceAll(/,/g, symbolForSplit);
tagList2 = tagList2.replaceAll(/ /g, symbolForSplit);

tagList2 = tagList2.split(symbolForSplit);

/*
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
tagList2.sort(function (a, b) {
return a.toLowerCase().localeCompare(b.toLowerCase());
});*/




var tagAverage = 0;
var tagTotal = 0;

// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
// make uniq and count, object
var tagListCount = {};
tagList2.forEach(function (x) {
if(x != null&&x != ''){
tagListCount[x] = (tagListCount[x] || 0) + 1;
}
});







// Taglist limit
//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
// sort object by value
let entries = Object.entries(tagListCount);
let tagListCountSorted = entries.sort((a, b) => a[1] - b[1]);
tagListCountSorted.reverse();


// Taglist limit (cut array) with sorted tag and convert to old object, sorted previos
tagListCountLimited = {};
tagListCountSorted.forEach(function (item, key) {
if(key <= tagListLimit){
tagListCountLimited[item[0]] = item[1];
}
});


// sort
// https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
tagListCount = {};
tagListCount = Object.keys(tagListCountLimited).sort().reduce(
  (obj, key) => { 
    obj[key] = tagListCountLimited[key]; 
    return obj;
  }, 
  {}
);
// end Taglist limit







/*tagAverage = (Math.min(...Object.values(tagListCount))+Math.max(...Object.values(tagListCount)))/2;
//console.log(tagAverage);*/
Object.values(tagListCount).forEach(function (x) {
tagTotal = tagTotal+x;
});
tagAverage = tagTotal/Object.values(tagListCount).length;




var tagSize = '';
var tagColor = '';

function fuTag(tagCount){
//let tagPercentage = (Math.floor((tagCount*100)/tagTotal)); // from 100%, need rebuild case from 100
let tagPercentage = (Math.floor((tagCount*100)/tagAverage)); // over 100%, used average if tag disproportion 1% and 90%
//console.log(tagPercentage);

// tag font-size and color
switch (true) {

case tagPercentage >= 500:
tagColor = "var(--red)";
tagSize = "200%";
break;

case tagPercentage >= 300:
tagColor = "var(--orange)";
tagSize = "180%";
break;

case tagPercentage >= 250:
tagColor = "var(--yellow)";
tagSize = "170%";
break;

case tagPercentage >= 100:
tagColor = "var(--green)";
tagSize = "150%";
break;

case tagPercentage >= 80:
tagColor = "var(--blue)";
tagSize = "130%";
break;

case tagPercentage >= 50:
tagColor = "var(--indigo)";
tagSize = "120%";
break;

case tagPercentage >= 30:
tagColor = "var(--violet)";
tagSize = "110%";
break;

default:
tagColor = "var(--c2)";
tagSize = "95%";
}

//console.log(tagColor);
//return tagColor;
}



//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
let sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare)

let hlClassList = '';
// https://masteringjs.io/tutorials/fundamentals/foreach-object
sortedTags.forEach(entry => {
const [key, value] = entry;


//alert('test');

tag = key.trim();
tagCount = value;



fuTag(tagCount);




if(tag != ''){
let printTag = tag;
let printTag2 = tag.replaceAll(/#/g, "");
let goTag = encodeURIComponent(tag);

let hlClass = '';
if(printTag[0] != undefined){
hlClass = 'hlClass'+printTag2[0].toLowerCase();
hlClassList += printTag2[0].toLowerCase();
}
if(q == tag){
tagList += `

<a class="tag light border2 ${hlClass}" href="${scriptDir}?q=${goTag}" style="background: ${tagColor}; color: var(--l4); font-size: ${tagSize};">${printTag}</a>

`;
}else{

tagList += `

<a class="tag light border2 ${hlClass}" href="${scriptDir}?q=${goTag}"  style="color: ${tagColor}; font-size: ${tagSize};">${printTag}</a>

`;
}
}
});

hlClassList3 = '';
hlClassList2 = [...new Set([...hlClassList])]; //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
hlClassList = '';
hlClassList2.forEach(function(item){
let hlClass = 'hlClass'+item;
item = item.toUpperCase();
hlClassList3 += `
<a class="tag light border2 ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')" onmouseout="hlwClassRemove('${hlClass}')" href="#id${hlClass}" id="${hlClass}">${item}</a>
`;
});

tagList += `
<div class="block tCenter">
<div class="tagList padding">${hlClassList}</div>
<div class="tagList padding">${hlClassList3}</div>
</div>
`;

return tagList;
}
//  end tag list















document.getElementById(printId).innerHTML += `
<div class="tCenter padding" style="padding-top: 60px;">
<div class="wrapper3">

<span class="op small padding">list of tags:</span><br>
`+tagList(printTagList)+`
</div>
</div>
`;


document.getElementById(printId).innerHTML +=  `
<br>

<div id="form" class="wrapperL">
<form method="GET" style="margin-top: 0px;" action="?">
<label id="search" class="op block tLeft xSmall">search and tag:</label>
<input id="input" class="padding op" type="search" style="text-align: center;" name="q"  autocomplete="off" placeholder="" value="${q}">

<input class="op" style="padding: 0; min-height: 1px; height: 24px; font-size: 12px;" type="submit" value="go">

</form>

<br>
<span class="xSmall op block tCenter margin padding">total: ${jsonVar.length}</span>
</div>
`;











}


function hlwClassAdd(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.add("highlight");
i++;
}
}


function hlwClassRemove(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.remove("highlight");
i++;
}
}

