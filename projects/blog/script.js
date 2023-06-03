// v.1.15.12

// inspired by Twitter, Fediverse
// not for large Json files !
// task: relevant for search



// JSON data in js varible pre-sorted by time in UNIX format, URL in JSON optional it's merged with text

// main function 




function blog(printId, jsonVar, postClass, embedStatus, tagListStatus, postLimit, scriptDir, multiEmbedStatus, tagListLimit){

/*
printId - div id where print blog
jsonVar - json in JavaSript variable
// other
postClass - CSS class name post
embedStatus - if off, not showing embed
tagListStatus - if off, not showing tags and navigation, only posts
postLimit - how many post showing on page
scriptDir - for tag location link, if run script on other location
multiEmbedStatus - if on, working multi embed, default off
tagListLimit - how many tag showing in taglist

(id - id post in JSON, p, p2 - page, array key for navigation with JSON and content)
*/

if(postLimit == undefined||postLimit == ''){ postLimit = 1; }
if(postClass == undefined||postClass == ''){ postClass = 'post'; }
if(scriptDir == undefined||scriptDir == ''){ scriptDir = './'; }
if(multiEmbedStatus == undefined||multiEmbedStatus == ''){ multiEmbedStatus = 'off'; }
if(tagListLimit == undefined||tagListLimit == ''){ tagListLimit = '100'; }


if(jsonVar == ''){
var jsonVar = 


[
    {
        "id": 251,
        "text": "test2 text2",
        "url": "https:\/\/test2.com",
        "tag": "#test2 #tag",
        "time": 1671480576
    },
    {
        "id": 250,
        "text": "test text",
        "url": "https:\/\/test.com",
        "tag": "#test #tag",
        "time": 1668444918
    }
];

}

var w = '100%';
var h = '190px';
var embedServiceList = '';

var arrListForRandom = [];

var total = '';
var print2 = '';
var url = new URL(window.location);

var q = url.searchParams.get("q");
if(q != null){
q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);
q = q.trim();
}

var q2 = url.searchParams.get("q2");
if(q != null){
//q2 = q2.replaceAll(/%/g, "%25");
q2 = decodeURIComponent(q2);
q2 = q2.trim();
}

var mode = url.searchParams.get("mode");
if(mode != null){
mode = mode.replaceAll(/%/g, "%25");
mode = decodeURIComponent(mode);
mode = mode.trim();
}


var id = url.searchParams.get("id");
if(id != null){
id = id.replaceAll(/%/g, "%25");
id = decodeURIComponent(id);
mode = 'id';
}

var getP = url.searchParams.get("p");
if(getP != null){
getP = getP.replaceAll(/%/g, "%25");
getP = Number(decodeURIComponent(getP));

if(getP >= jsonVar.length - 1){ getP = jsonVar.length; }
if(getP < postLimit){ getP = 0; }
mode = 'list';
}

var getP2 = url.searchParams.get("p2"); // nav for id
if(getP2 != null){
getP2 = getP2.replaceAll(/%/g, "%25");
getP2 = getP2.trim();
getP2 = Number(decodeURIComponent(getP2));
mode = 'id';
}

if(getP == null){ getP = 0; }

var getP3 = url.searchParams.get("p3"); // nav for id
if(getP3 != null){
getP3 = getP3.replaceAll(/%/g, "%25");
getP3 = getP3.trim();
getP3 = Number(decodeURIComponent(getP3));
}

if(getP == null){ getP = 0; }


if(getP == jsonVar.length){ getP = getP - 1; }
if(getP2 == jsonVar.length){ getP2 = getP2 - 1; }
if(getP >= jsonVar.length){ getP = Number(Number(jsonVar.length) - Number(postLimit)); }
if(getP <= 0){ getP = 0; }
if(isNaN(getP)||isNaN(getP2)){ getP = 0; getP = 0; }

if(getP3 <= 0){ getP3 = 0; }

var symbolForSplit = 'pwxortuzqu';
var postId = '';
var postText = '';
var postTag = '';
var postUrl = '';
var postTime = '';


var print = '';
var printTagList = '';
var getTag = '';

var comMessage = '';
var comMessagePrint = '';

postLimit = Number(postLimit);

var i3 = 0;

var sTimeRedir = []; // for auto-random
sTimeRedir[0] = 7000;



if(tagListStatus == 'on'){
print += `
<header class="brand">
<nav>
<a href="?">main</a>
<a href="?mode=random">random</a>
<!--<a href="?mode=music&q2=%23music">music</a>-->
<a href="?mode=auto-random">auto-random</a>
<!--<a href="/rss.xml">rss</a>-->
</nav>
</header>
<span id="comMsg"></span>
<span id="postTotal"></span>

`;
}

//document.getElementById(printId).innerHTML += '<div id="playerxx">playerxx</div>';


function main(){



if(q != null){
mode = 'search';
//embedStatus = 'off';
postLimit = 10;
getP = getP3;
}

if(id != null||getP2 != null){
postLimit = 1;
}


if(id == 0||mode == 'random'){ mode = 'random'; getP2 = Math.floor(Math.random() * jsonVar.length); }
if(mode == 'auto-random'){ mode = 'auto-random'; getP2 = Math.floor(Math.random() * jsonVar.length); }


if(mode == 'list'&&tagListStatus == 'on'){
print += `
<!--<div class="block tCenter padding">
com:${mode} id:${id} q:${q} p:${getP} p2:${getP2}
<a href="?id=">random</a>
</div>-->
`;
}











let i = 0;
let sRelevantPoint = 0;
jsonVar.forEach((item, key) => {

postId = '';
postText = '';
postTag = '';
postUrl = '';
postTime = '';

if(item['id'] != null){ postId = item['id']; }
if(item['text'] != null){ postText = item['text']; }
if(item['tag'] != null){ postTag = item['tag']; }
if(item['url'] != null){ postUrl = item['url']; }
if(item['time'] != null){ postTime = item['time']; }

postText = (postText+' '+postUrl).trim();








switch (mode){

case 'search':
// search start


//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = decodeURIComponent(q);
qSearch = String(qSearch).toLowerCase();
var qData = String(postText+' '+postTag).toLowerCase();


// if tag
if(qSearch[0] == '#'){
qData = qData.replaceAll(/,/g, ' ');
if((qData+' ').indexOf((qSearch+' ')) >= 0){
if(getP3 <= i){
if(i3 <= postLimit - 1){
print += fuPrintPost(postId, postText, postTag, postTime);
}
i3++;
}
i++;
total = i;
comMessagePrint = `${q} ${i}`;
comMessage = 'found';
}
}else if(qData.indexOf(qSearch) >= 0){
if(getP3 <= i){
if(i3 <= postLimit - 1){
print += fuPrintPost(postId, postText, postTag, postTime);
}
i3++;
}
i++;
total = i;
comMessagePrint = `${q} ${i}`;
comMessage = 'found';
}




if(comMessagePrint == '') { comMessagePrint = `<b>${q}</b> <div class="bold red block padding">Probably not found</div>`; }
break;

case 'id':

if(postId == id||getP2 == key){
if(i <= postLimit -1){
print += '<div class="">'+fuPrintPost(postId, postText, postTag, postTime)+'</div>';
comMessagePrint = 'id: '+postId;
// post in title only when id
if(id != ''&&getP2 == null){
//document.getElementsByTagName('title')[0].innerHTML = postText.slice(0, 70);
document.getElementsByTagName('title')[0].innerHTML = postText+' | '+confHost;;
}
if(getP2 != null){
comMessagePrint += ' p2: '+getP2;
}
i++;
getP = key;
}
}
if(comMessagePrint == '') { comMessagePrint = `<b>${q}</b> <div class="bold red block padding">Probably not found</div>`; }
break;



case 'random':
postLimit = 1;
if(getP2 == key){
if(i <= postLimit -1){
print += '<div class="">'+fuPrintPost(postId, postText, postTag, postTime)+'</div>';
i++;
getP = key;
comMessagePrint = ` ${mode}`+', '+'id: '+postId+', p2: '+getP2;
}
}
break;

case 'auto-random':
postLimit = 1;
var sTimeRedirStatus = `redir after: <span id="timerRedir">${sTimeRedir[0] / 1000}</span> sec.`;

if(getP2 == key){
if(i <= postLimit -1){
print += '<div class="">'+fuPrintPost(postId, postText, postTag, postTime)+'</div>';
i++;
getP = key;
comMessagePrint = ` ${mode}`+', '+'id: '+postId+', p2: '+getP2+' | '+sTimeRedirStatus;

// fixed many redirect in this place
setTimeout(function(){
window.location.href = '?mode=auto-random';
}, sTimeRedir[0]); 

}
}
break;


/*case 'music':
case 'movie':
postLimit = 1;

if(q2 != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = decodeURIComponent(q2);
qSearch = String(qSearch).toLowerCase();
}else{
qSearch = String('#music').toLowerCase();
}
qSearch = String(qSearch).toLowerCase();


// if tag
//if(qSearch[0] == '#'){}
qData = String(postText+' '+postTag).toLowerCase();
qData = qData.replaceAll(/,/g, ' ');
if((qData+' ').indexOf((qSearch+' ')) >= 0){
arrListForRandom.push(key);

i++;
total = i;
comMessagePrint = `${q} ${i}`;
comMessage = 'found';
}

if(arrListForRandom.length > 0){

getP2 = Math.floor(Math.random() * arrListForRandom.length);
getP2 = arrListForRandom[getP2];

console.log(getP2);
print2 = '<div class="">'+fuPrintPost(jsonVar[getP2]['id'], jsonVar[getP2]['text'], jsonVar[getP2]['tag'], jsonVar[getP2]['time'])+'</div>';

getP = getP2;

comMessagePrint = `${q2} ${i}`+` ${mode}`+', '+'id: '+jsonVar[getP2]['id']+', p2: '+getP2;
}else{
comMessagePrint = '<span class="red">not found</span>';
}
break;
*/

default:
mode = 'list';
if(getP <= key){
if(i <= postLimit -1){
print += fuPrintPost(postId, postText, postTag, postTime);
i++;
}
}

}


// collect all tag
printTagList += postTag+symbolForSplit;

});








// fixme, make option relevant, rm or make
// Search 2, if strict search not found
jsonVar.forEach((item, key) => {

postId = '';
postText = '';
postTag = '';
postUrl = '';
postTime = '';

if(item['id'] != null){ postId = item['id']; }
if(item['text'] != null){ postText = item['text']; }
if(item['tag'] != null){ postTag = item['tag']; }
if(item['url'] != null){ postUrl = item['url']; }
if(item['time'] != null){ postTime = item['time']; }

postText = (postText+' '+postUrl).trim();

if(mode == 'search'&&comMessage != 'found'){


//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = decodeURIComponent(q);
qSearch = String(qSearch).toLowerCase();
let qData = String(postText+' '+postTag).toLowerCase();

// many words from space split

qSearch = (qSearch+' ').split(' ');
qSearch.forEach(function (item) {
//if((qData.split(item)).length > 1&&item != ''){
if((qData.indexOf(item)) > 0){
if(getP3 <= i){
if(i3 <= postLimit -1){
print += fuPrintPost(postId, postText, postTag, postTime);
}
i3++;
}
i++;
total = i;
comMessagePrint = `${q} ${i}`;
qData = '';
comMessage = 'found'
sRelevantPoint++
}
});


console.log(sRelevantPoint);

}



});



if(mode == 'search'&&comMessage != 'found') { comMessagePrint = `<b>${q}</b> <div class="bold red block padding">Probably not found</div>`; }
// end Search 2



print = print + print2;



// tagList and nav print
if(tagListStatus != 'off'){





//if(com != 'search'){ print += `<div class="${postClass}">`+blogNav(mode)+`</div>`; }
print += `<div class="${postClass}">`+blogNav(mode)+`</div>`;

if(mode == 'search'){
print += `
<div class="wrapper">
<div class="block tRight padding">
<a class="op border2 button light" href="#" onclick="history.back()" title="history back">back</a>
<a class="op border2 button light" href="?">main</a>
</div>
</div>
`;
}

print += tagList(printTagList);

// search forom


print += `
<br>

<div id="form" class="wrapperL">
<form method="GET" style="margin-top: 0px;" action="?">
<label id="search" class="op block tLeft xSmall">search:</label>
<input id="input" class="padding op" type="search" style="text-align: center;" name="q"  autocomplete="off" placeholder="" value="${q}">

<input class="op" style="padding: 0; min-height: 1px; height: 24px; font-size: 12px;" type="submit" value="search">

</form>

<br>
<span class="op block tCenter margin padding">total post: ${jsonVar.length}</span>
</div>
`;








}



// echo print all
document.getElementById(printId).innerHTML += print;

if(comMessagePrint != ''){
document.getElementById('comMsg').innerHTML += `<div class="wrapper op tCenter padding">${comMessagePrint}</div>`;
}

//if(q != null){ document.getElementById("input").value = q; }
}

main(q, id);





// other functions 
// start tagList
function tagList(tagList2){
let color = 'silver';
let size = '';

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
if(printTag2[0] != undefined){
hlClass = 'hlClass'+printTag2[0].toLowerCase();
hlClassList += printTag2[0].toLowerCase();
}

if(q == tag){
tagList += `

<a class="tag light border2 ${hlClass}" href="${scriptDir}?q=${goTag}" style="background: ${tagColor}; color: var(--l4); font-size: ${tagSize} !important;">${printTag}</a>

`;
}else{

tagList += `

<a class="tag light border2 ${hlClass}" href="${scriptDir}?q=${goTag}"  style="color: ${tagColor}; font-size: ${tagSize} !important;">${printTag}</a>

`;
}
}
});

hlClassList2 = [...new Set([...hlClassList])]; //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
hlClassList = '';
hlClassList2.forEach(function(item){
let hlClass = 'hlClass'+item;
item = item.toUpperCase();
hlClassList += `
<a class="tag light border2 ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')" onmouseout="hlwClassRemove('${hlClass}')" href="#id${hlClass}" id="${hlClass}">${item}</a>
`;
});

tagList = `

<div class="center tCenter">
<div class="wrapper3">

<span class="op small padding margin">list of tags:</span><br>
<div class="tagList padding">`+tagList+`</div>

<div class="block padding tCenter" styel="max-width: 100% !important">
${hlClassList}
</div>

</div>
</div>


`;


return tagList;
}
//  end tag list






function fuPrintPost(id, post, tag, time){
tag = highlightText(tag);
//time = new Date(time).getTime();
time = `<a class="brand" href="${scriptDir}?id=${id}">&nbsp;`+fuPostTime(time)+`&nbsp;</a>`;


// selected orange word when search
if(q != null&&mode == 'search'){

// 1 
/*// https://stackoverflow.com/questions/7313395/case-insensitive-replace-all
var regEx = new RegExp(q, "ig");
post = post.replace(regEx, `<span style="background: var(--orange); color: #fff;">${q}</span>`); 
*/

/*
// 2 
//post = highlightText(post, 'out');
//orange selected in found
text = post.split(' ');
post = '';
text.forEach((item) => {
if(item.toLowerCase().search(q.toLowerCase()) != -1) == -1){
post += ` <span style="background: var(--orange); color: #fff;">${item}</span>`;
}else{
post += ' '+item;
}
});
post = post.trim();
*/

//3
//embedStatus = 'off';
post = highlightText(post, 'out');



}else if(mode == 'id'||mode == 'random'||mode == 'auto-random'||mode == 'music'){ // autoplay embed when id or random
post = highlightText2(post, 'out');
}else{
post = highlightText(post, 'out'); // embed without autoplay
}

return `

<!-- post -->
<div class="`+postClass+` bgList border3List" id="`+id+`">
<span class="pre">`+post+`</span>
<div class="postFooter">
<span class="postTagList">`+tag+`</span>
<span class="postTime">`+time+`</span>
</div>
</div>
<!-- // post -->

`;
}














var checkText = true;

// light 1 highlightText
function highlightText(text, hrefInOut){
//text = decodeURIComponent(text); // error sometimes

text = clearText(text);

// if code
text = text.replaceAll(/</g, "&lt;");
text = text.replaceAll(/>/g, "&gt;");

let text2 = '';
let embed = '';
let embed2 = '';



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

checkText = false;

switch (host[2]) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":
play = item.split('v=').pop();
if(play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
break;

case 'vimeo.com':
play = item.split('/');
embed = `<iframe src="https://player.vimeo.com/video/`+play[play.length-1]+`?badge=0" height="${h}"  frameborder="0"></iframe>`;
embedServiceList += 'vimeo';
break;

case "twitter.com":
case "mobile.twitter.com":
embed = `<style>.twitter-tweet { margin-top: 0px !important; }</style><div style="display: block; width: 100%; max-width: 550px; margin: 0 auto;"><blockquote class="twitter-tweet" data-lang="${lang}" data-theme="${confThemeEmbed}"><a href="${item}"></a></blockquote></div><!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->`;
embedServiceList += 'twitter';
break;

case "www.reddit.com":
if(item.split('/').length >= 9){
play = item.replaceAll('reddit.com/r/', "redditmedia.com/r/");
embed = `<iframe style="border-radius: 0 !important;" id="reddit-embed" src="${play}?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=${confThemeEmbed}" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none;" scrolling="yes" width="640" height="320px"></iframe>`;
}
embedServiceList += 'reddit';
break;

case "soundcloud.com":
embed = `<iframe width="${w}" height="${h}" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${item}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
break;

case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
embed = `<!--<iframe src="https://tunein.com/embed/player/${play}/?autoplay=false&background=${confThemeEmbed}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>--><!-- ban if many by Clouflare -->`;
embedServiceList += 'tunein';
break;

case "codepen.io":
play = item.split('/');
play = play[play.length - 1];
embed = `<p class="codepen" data-height="420" data-default-tab="result" data-theme-id="${confThemeEmbed}" data-slug-hash="${play}" data-user="" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p><!--<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>-->`;
embedServiceList += 'codepen';
break;

case "giphy.com":
play = item.split('-');
play = play[play.length - 1];
embed = `<iframe src="https://giphy.com/embed/${play}" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/$play">via GIPHY</a></p>`;
embedServiceList += 'giphy';
break;

case "archive.org":
if(item.search(`/details/`) != -1) {
play = item.split('/');
play = play[play.length - 1];
h = h + h;
embed = `<iframe src="https://archive.org/embed/${play}" width="${w}" height="${h}" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
embedServiceList += 'archive';
}
break;

case "www.instagram.com":
case "instagram.com":
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
embed = `<style>iframe.instagram-media {
    max-width: 100% !important;
    width: 100% !important;
    min-width: auto !important;
}</style><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${play}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote><!--<script async src="//www.instagram.com/embed.js"></script>-->`;
embedServiceList += 'instagram';
break;

case "open.spotify.com":
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if(play[play.length - 2] == 'playlist') {
play = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${play}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
embedServiceList += 'spotify';
}

if(play[play.length - 2] == 'track') {
play = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${play}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

if(play[play.length - 2] == 'artist') {
play = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/${play}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

break;




case 'deezer.com':
case 'www.deezer.com':
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if(play[play.length - 2] == 'album') {
play = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/album/${play}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if(play[play.length - 2] == 'track') {
play = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/track/${play}" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if(play[play.length - 2] == 'artist') {
play = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/artist/${play}/top_tracks" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}
embedServiceList += 'deezer';
break;

case 'imgur.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<blockquote class="imgur-embed-pub" lang="en" data-id="a/${play}"><a href="//imgur.com/a/${play}">${item}</a></blockquote><!--<script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>-->`;
embedServiceList += 'imgur';
break;

case 'dailymotion.com':
case 'www.dailymotion.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<iframe frameborder="0" width="${w}" height="${h}" src="https://www.dailymotion.com/embed/video/${play}" allowfullscreen allow="autoplay"></iframe>`;
embedServiceList += 'dailymotion';
break;

case 'www.twitch.tv':
play = item.split('/');
play = play[play.length - 1];
if(play == ''){ play = play[play.length - 2]; }
embed = `<iframe src="https://embed.twitch.tv?channel=${play}&layout=video&referrer=some-referer-url&autoplay=false&parent=${confHost}" allowfullscreen="" scrolling="no" frameborder="0" height="${h}"></iframe>`;
embedServiceList += 'twitch';
break;


case "facebook.com":
case "www.facebook.com":
embed = `<style>.fb-post{ width: 100%; background: whitesmoke;  }
.fb-post>span { max-width:100%; }</style><script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script> <div style="" class="fb-post" data-small-header="true" data-href="${item}" data-width="500" data-adapt-container-width="true"></div>`;
embedServiceList += 'facebook';
break;

case 'unsplash.com':
play = item.split('/');
play = play[play.length - 1];
if(play == ''){ play = play[play.length - 2]; }
embed = `<a target="_blank" href="${item}"><img class="img border3" src="https://unsplash.com/photos/${play}/download" width=""></a>`;
embedServiceList += 'twitch';
break;



//default:



}
}
}

/*
if(item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1){ 
embed = `<a href="${item}"><img class="border3" src="${item}" width=""></a>`
}*/

if(embedStatus != 'off'){

//https://stackoverflow.com/questions/2390789/how-to-replace-all-dots-in-a-string-using-javascript
itemCheck = item.replaceAll(/\./g, symbolForSplit);

if(itemCheck.search(`${symbolForSplit}mp4|${symbolForSplit}webm|${symbolForSplit}avi`) != -1) {
checkText = false;

embed2 = `<video height="${h}" controls style="width:100%"><source src="${item}" type="video/mp4">
<source src="${item}" type="video/ogg">Your browser does not support HTML5 video.</video>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${symbolForSplit}mp3|${symbolForSplit}wav|${symbolForSplit}ogg|${symbolForSplit}m3u`) != -1) {
checkText = false;

embed2 = `<audio controls style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg"><source src="${item}" type="audio/mpeg">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}


if(itemCheck.search(
`${symbolForSplit}jpg|${symbolForSplit}jpeg|${symbolForSplit}png|${symbolForSplit}gif|${symbolForSplit}img|${symbolForSplit}ico`) != -1) {
checkText = false;

//echo 'test';
embed2 = `
<a href="${item}"><img class="border3 img" src="${item}" width=""></a>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(item.search(".html") != -1&&item.search("http") == -1) {
checkText = false;

embed2 = `<iframe width="${w}" height="400" src="${item}"></iframe>`;
}



}





//if(item.search("http") != -1){
if(item.slice(0, 4) == 'http'&&item.search("http|://") != -1){
checkText = false;

if(embedStatus == 'on'&&host != undefined){
checkText = false;

var ico = `https://www.google.com/s2/favicons?domain_url=${host[2]}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
item = `<a class="brand" target="_blank" href="${item}"><img class="ico op" src="${ico}" width="14px" alt="ico"> ${item}</a>`;
}else{
checkText = false;

item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}
}


if(item.search("./") != -1&&item.search(".htm") != -1&&item.search("http") == -1){
checkText = false;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}


//add tag
if(item[0] == '#'){
checkText = false;

item = item.replaceAll(/#/g, "");
if(hrefInOut == 'out'){
/*item = `<a rel="nofollow" href="/projects/blog-in-progress/?q=${item} tag">#${item} <span class="sup">⇗</span></a>`;*/
item = `<a class="brand" rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}else{
item = `<a class="brand" rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}
}


if(checkText == true){
if(q != ''&&q != null){
//item = item.toLowerCase().replaceAll(q.toLowerCase(), `<span style="border-bottom: 3px solid  var(--orange);">${q}</span>`);
//https://stackoverflow.com/questions/7313395/case-insensitive-replace-all
/*var searchMask = q;
var regEx = new RegExp(searchMask, "ig");
var replaceMask = `<span style="border-bottom: 3px solid  var(--orange);">${q}</span>`;
var item = item.replace(regEx, replaceMask);*/
var q33 = (q).split(" ");
q33.forEach((element) => {
if((item.toLowerCase()).indexOf((element.toLowerCase())) >= 0){ item = `<span style="border-bottom: 3px solid  var(--orange);">${item}</span>`; }
});


}
}

checkText = true;
text += item;



// multi embed
if(multiEmbedStatus == 'on'&&embedStatus != 'off'){
text += embed+embed2;
embed = '';
embed2 = '';
}

// multi embed end


});

// single embed
if(multiEmbedStatus != 'on'&&embedStatus != 'off'){ text += embed+embed2; }


return text;
}














// light 2 highlightText
// highlight Text2 with autoplay when pressed id (date)
function highlightText2(text, hrefInOut){
//text = decodeURIComponent(text); // error sometimes



text = clearText(text);

var idGo = id;
if(getP2 != ''){ idgo = getP2 + 1; }




// if code

text = text.replaceAll(/</g, "&lt;");
text = text.replaceAll(/>/g, "&gt;");

let text2 = '';
let embed = '';
let embed2 = '';

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
play = item.split('v=').pop();
if(play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}?&autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; autoplay; picture-in-picture" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
break;

case 'vimeo.com':
play = item.split('/');
embed = `<iframe src="https://player.vimeo.com/video/`+play[play.length-1]+`?badge=0&autoplay=1" height="${h}"  frameborder="0"></iframe>`;
embedServiceList += 'vimeo';
break;

case "twitter.com":
case "mobile.twitter.com":
embed = `<style>.twitter-tweet { margin-top: 0px !important; }</style><div style="display: block; width: 100%; max-width: 550px; margin: 0 auto;"><blockquote class="twitter-tweet" data-lang="${lang}" data-theme="${confThemeEmbed}"><a href="${item}"></a></blockquote></div><!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->`;
embedServiceList += 'twitter';
break;

case "www.reddit.com":
if(item.split('/').length >= 9){
play = item.replaceAll('reddit.com/r/', "redditmedia.com/r/");
embed = `<iframe style="border-radius: 0 !important;" id="reddit-embed" src="${play}?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=${confThemeEmbed}" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none;" scrolling="yes" width="640" height="320px"></iframe>`;
embedServiceList += 'reddit';
}
break;

case "soundcloud.com":
embed = `<iframe width="${w}" height="${h}" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${item}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
embedServiceList += 'soundcloud';
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
embedServiceList += 'tunein';
break;

case "codepen.io":
play = item.split('/');
play = play[play.length - 1];
embed = `<p class="codepen" data-height="420" data-default-tab="result" data-theme-id="${confThemeEmbed}" data-slug-hash="${play}" data-user="" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p><!--<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>-->`;
embedServiceList += 'codepen';
break;


case "giphy.com":
play = item.split('-');
play = play[play.length - 1];
embed = `<iframe src="https://giphy.com/embed/${play}" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/$play">via GIPHY</a></p>`;
embedServiceList += 'giphy';
break;

case "archive.org":
if(item.search(`/details/`) != -1) {
play = item.split('/');
play = play[play.length - 1];
h = h + h;
embed = `<iframe src="https://archive.org/embed/${play}" width="${w}" height="${h}" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
embedServiceList += 'archive';
}
break;

case "www.instagram.com":
case "instagram.com":
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
embed = `<style>iframe.instagram-media {
    max-width: 100% !important;
    width: 100% !important;
    min-width: auto !important;
}</style><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${play}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote><!--<script async src="//www.instagram.com/embed.js"></script>-->`;
embedServiceList += 'instagram';
break;

case "open.spotify.com":
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if(play[play.length - 2] == 'playlist') {
play = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${play}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

if(play[play.length - 2] == 'track') {
play = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${play}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

if(play[play.length - 2] == 'artist') {
play = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/${play}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}
embedServiceList += 'spotify';
break;




case 'deezer.com':
case 'www.deezer.com':
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if(play[play.length - 2] == 'album') {
play = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/album/${play}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if(play[play.length - 2] == 'track') {
play = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/track/${play}" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if(play[play.length - 2] == 'artist') {
play = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/artist/${play}/top_tracks" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}
embedServiceList += 'deezer';
break;

case 'imgur.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<blockquote class="imgur-embed-pub" lang="en" data-id="a/${play}"><a href="//imgur.com/a/${play}">${item}</a></blockquote><!--<script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>-->`;
embedServiceList += 'imgur';
break;

case 'dailymotion.com':
case 'www.dailymotion.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<iframe frameborder="0" width="${w}" height="${h}" src="https://www.dailymotion.com/embed/video/${play}?autoplay=1" allowfullscreen allow="autoplay"></iframe>`;
embedServiceList += 'dailymotion';
break;

case 'www.twitch.tv':
play = item.split('/');
play = play[play.length - 1];
if(play == ''){ play = play[play.length - 2]; }
embed = `<iframe src="https://embed.twitch.tv?channel=${play}&layout=video&referrer=some-referer-url&parent=${confHost}" allowfullscreen="" scrolling="no" frameborder="0" height="${h}"></iframe>`;
embedServiceList += 'twitch';
break;


case "facebook.com":
case "www.facebook.com":
embed = `<style>.fb-post{ width: 100%; background: whitesmoke;  }
.fb-post>span { max-width:100%; }</style><script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script> <div style="" class="fb-post" data-small-header="true" data-href="${item}" data-width="500" data-adapt-container-width="true"></div>`;
embedServiceList += 'facebook';
break;

case 'unsplash.com':
play = item.split('/');
play = play[play.length - 1];
if(play == ''){ play = play[play.length - 2]; }
embed = `<a target="_blank" href="${item}"><img class="img border3" src="https://unsplash.com/photos/${play}/download" width=""></a>`;
embedServiceList += 'twitch';
break;


//default:



}
}
}

/*
if(item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1){ 
embed = `<a href="${item}"><img class="border3" src="${item}" width=""></a>`
}*/

if(embedStatus != 'off'){



itemCheck = item.replaceAll(/\./g, symbolForSplit);

if(itemCheck.search(`${symbolForSplit}mp4|${symbolForSplit}webm|${symbolForSplit}avi`) != -1) {
embed2 = `<video height="${h}" controls autoplay style="width:100%"><source src="${item}" type="video/mp4">
<source src="${item}" type="video/ogg">Your browser does not support HTML5 video.</video>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${symbolForSplit}m3u8`) != -1) {
embed2 = `<iframe src="https://www.hlsplayer.org/play?url=${item}" style="width: 100%; height: ${h};" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>player: <a href="https://www.hlsplayer.org/">www.hlsplayer.org</a>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}



if(itemCheck.search(`${symbolForSplit}mp3|${symbolForSplit}wav|${symbolForSplit}ogg|${symbolForSplit}m3u`) != -1) {
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg"><source src="${item}" type="audio/mpeg">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}


if(itemCheck.search(`${symbolForSplit}jpg|${symbolForSplit}jpeg|${symbolForSplit}png|${symbolForSplit}gif|${symbolForSplit}img|${symbolForSplit}ico`) != -1) {
//echo 'test';
embed2 = `
<a href="${item}"><img class="border3 img" src="${item}" width=""></a>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(item.search(".html") != -1&&item.search("http") == -1) {
embed2 = `<iframe width="${w}" height="400" src="${item}"></iframe>`;
}



}





//if(item.search("http") != -1){
if(item.slice(0, 4) == 'http'&&item.search("http|://") != -1){
checkText = false;

if(embedStatus == 'on'&&host != undefined){
var ico = `https://www.google.com/s2/favicons?domain_url=${host[2]}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
item = `<a class="brand" target="_blank" href="${item}"><img class="ico op" src="${ico}" width="14px" alt="ico"> ${item}</a>`;
}else{
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}
}


if(item.search("./") != -1&&item.search(".htm") != -1&&item.search("http") == -1){


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



// multi embed
if(multiEmbedStatus == 'on'&&embedStatus != 'off'){
text += embed+embed2;
embed = '';
embed2 = '';
}

// multi embed end


});

// single embed
if(multiEmbedStatus != 'on'&&embedStatus != 'off'){ text += embed+embed2; }



return text;
}

















// Time  post date
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

// https://stackoverflow.com/questions/13903897/javascript-return-number-of-days-hours-minutes-seconds-between-two-dates
function fuPostTime(p){
const  date_future = Date.now();
const  date_now = new Date(p * 1000);


// get total seconds between the times
var delta = Math.abs(date_future - date_now) / 1000;

var year = Math.floor(delta / 31557600);
delta -= year * 31557600;

var month = Math.floor(delta / 2629800);
delta -= month * 2629800;

// calculate (and subtract) whole days
var days = Math.floor(delta / 86400);
delta -= days * 86400;

// calculate (and subtract) whole hours
var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;

// calculate (and subtract) whole minutes
var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;

// what's left is seconds
var seconds = delta % 60;  // in theory the modulus is not required

if(year > 0){
time = year+' year ';
} else if(month > 0){
time = month+' month ';
} else if (days > 0){
time = days+' day ';
} else if(hours > 0){
time = hours+' h ';
} else if (minutes > 0) { time = minutes+' m '; }
else { time = checkTime(Math.floor(seconds))+' s '; }

return time;
//document.getElementById("time").innerHTML = '&nbsp;'+time+'&nbsp;';
}


fuPostTime();
var tmp = setInterval(fuPostTime, 1000);








// navigation navbar // used array
function blogNav(mode){

switch (mode){
case 'list':
case 'search':
var prev = Number(Math.floor(getP - postLimit)); //https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
var next = Number(Math.floor(getP + postLimit));
break;

default:
var prev = Number(Math.floor(getP - 1)); //https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
var next = Number(Math.floor(getP + 1));
}

if(mode != 'search'){ // if not search
total = Number(jsonVar.length);
}

let total2 = total;

if(postLimit >= total){ next = total; total2 = total; }
if(prev <= 0){ prev = 0; }

if(next >= total){ next = total  - postLimit; }

var navOption2 = '';
var navOption3 = '';

let nav2Print = '';
var navMode = 'p';

switch (mode){

case 'search':
navMode = 'p3';

navOption3 = `<input type="hidden" name="q" value="${q}">`;
navOption2 = 'q='+encodeURIComponent(q)+"&";
nav2Print = `
<div class="tRight">
<!--<a class="op borderList button light" href="?id=">random</a>-->
</div>
<!--<a class="op border2 button light" style="width: 49%;" href="#" onclick="history.back()">back</a>-->
`;
break;

case 'list':
case '':
navMode = 'p';

nav2Print = `
<div class="tRight">
<!--<a class="op borderList button light" href="?id=">random</a>-->

<!--<a class="op border2 button light" style="width: 49%;" href="#" onclick="history.back()">back</a>-->
</div>
`;

break;

default:
navMode = 'p2';


nav2Print = `
<div class="tRight">
<a class="op borderList button light" href="#" onclick="history.back()">back</a>
<a class="op borderList button light" href="?p=`+Math.floor(getP)+`">list</a>
<!--<a class="op borderList button light block" href="?id=">rand</a>-->
</div>

`;
}



if(q == null||q == 'null'){ q = ''; }



var pringInputRange = '';
if(confDevice != 'mobile'){
pringInputRange = `
<form id="form">
${navOption3}
<input  name="${navMode}" style="" id="rangeinput" class="slider" value="${getP}" type="range" min="0" max="${total2}" step="${postLimit}" onmouseup="this.form.submit();" ontouchend="this.form.submit();">
</form>
`;
}

return `


<style>
.grid {
display: grid;
grid-gap:10px;
grid-template-columns: 1fr 20% 1fr;
grid-gap: 3px 3px;
margin: 4px auto !important;
padding: 0 !important;
justify-content: center;
}
</style>



${pringInputRange}

<div class="grid">
<a class="op border button light" href="?${navOption2}${navMode}=${prev}">&#8592;</a>
<div class="button border"><span class="op pre">${navMode}: </span>`+Math.floor(getP/postLimit)+`</div>
<a class="op border button light" href="?${navOption2}${navMode}=${next}">&#8594;</a>
</div>

${nav2Print}

`;

















}
// end dddddddddddd














// for embed 
if(embedStatus != 'off'){

if(embedServiceList.search(`twitter`) != -1) {
var script = document.createElement('script');
script.type='text/javascript';
script.async = true;
script.charset = 'utf-8';
script.src = 'https://platform.twitter.com/widgets.js';      
document.getElementsByTagName('head')[0].appendChild(script);
}

if(embedServiceList.search(`codepen`) != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
script2.async = true;
script2.charset = 'utf-8';
script2.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

if(embedServiceList.search(`instagram`) != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
script2.async = true;
script2.charset = 'utf-8';
script2.src = '//www.instagram.com/embed.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

if(embedServiceList.search(`imgur`) != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
script2.async = true;
script2.charset = 'utf-8';
script2.src = '//s.imgur.com/min/embed.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

}



// run without loop Json


// timer redirect
if(mode == 'auto-random'){

setInterval(fuTimerRdirect, 1000);

function fuTimerRdirect(){
sTimeRedir[0] = sTimeRedir[0] - 1000;
document.getElementById("timerRedir").innerHTML = sTimeRedir[0] / 1000;
}
}










}
// end main all end blog






















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



function clearText(text){

//https://stackoverflow.com/questions/2774471/what-is-c2-a0-in-mime-encoded-quoted-printable-text
text = text.replaceAll(/%C2%A0/g, " "); // non-breaking space.
text = text.replaceAll(/ /g, " "); // non-breaking space.

return text;
}


// var for if without main.js

//https://stackoverflow.com/questions/5409641/set-a-variable-if-undefined-in-javascript
// if main index js not exit
if (typeof lang === 'undefined') { var lang = 'en'; }

if (typeof confThemeEmbed === 'undefined') {
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
var confThemeEmbed= 'dark';
}else{
var confThemeEmbed= 'light2';
}
}

if (typeof fuWorker === 'undefined') {
function fuWorker(){ }
}

if (typeof confDevice === 'undefined') {
var confDevice = '';
/*if(confDataCollection != 'on'){
confDevice = '(disabled, privacy)';
}else{}*/
if(navigator.userAgent.search("iPhone|Android|Opera Mini|Mobile|Lumia|Phone") != -1){ confDevice = 'mobile';  }
if(navigator.userAgent.search("PlayStation|Xbox|TV|Roku|SmartTV|BRAVIA") != -1){ confDevice = 'tv';  }
if(confDevice == ''){ confDevice = 'pc'; }
}








