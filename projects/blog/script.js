// v.1.8.3
// inspired by Twitter, Fediverse
// not for large json files !
// task: relevant for search



// JSON data in js varible pre-sorted by time in UNIX format, URL in JSON optional it's merged with text

// main function 

function blog(printId, blogJsonVar, postClass, embedStatus, tagListStatus, postLimit, scriptDir, multiEmbedStatus, tagListLimit){

/*
printId - div id where print blog
blogJsonVar - json in JavaSript variable
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
if(tagListLimit == undefined||tagListLimit == ''){ tagListLimit = '500'; }


if(blogJsonVar == ''){
var blogJsonVar = 


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


var total = '';

var url = new URL(window.location);

var q = url.searchParams.get("q");
if(q != null){
q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);
q = q.trim();
}

var id = url.searchParams.get("id");
if(id != null){
id = id.replaceAll(/%/g, "%25");
id = Number(decodeURIComponent(id));
}

var getP = url.searchParams.get("p");
if(getP != null){
getP = getP.replaceAll(/%/g, "%25");
getP = Number(decodeURIComponent(getP));



if(getP >= blogJsonVar.length - 1){ getP = blogJsonVar.length; }
if(getP < postLimit){ getP = 0; }

}

var getP2 = url.searchParams.get("p2"); // nav for id
if(getP2 != null){
getP2 = getP2.replaceAll(/%/g, "%25");
getP2 = getP2.trim();
getP2 = Number(decodeURIComponent(getP2));
}

if(getP == null){ getP = 0; }

var getP3 = url.searchParams.get("p3"); // nav for id
if(getP3 != null){
getP3 = getP3.replaceAll(/%/g, "%25");
getP3 = getP3.trim();
getP3 = Number(decodeURIComponent(getP3));
}

if(getP == null){ getP = 0; }


if(getP == blogJsonVar.length){ getP = getP - 1; }
if(getP2 == blogJsonVar.length){ getP2 = getP2 - 1; }
if(getP >= blogJsonVar.length){ getP = Number(Number(blogJsonVar.length) - Number(postLimit)); }
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
var com = '';


if(tagListStatus == 'on'){
print += `
<header class="brand">
<nav>
<a href="?">main</a>
<a href="?id=">random</a>
<a href="/rss.xml">rss</a>
</nav>
</header>
<div id="comMsg"></div>
`;
}



function main(){



if(q != null){
com = 'search';
//embedStatus = 'off';
postLimit = 10;
getP = getP3;
}
if(id != null||getP2 != null){
com = 'id';
postLimit = 1;
}

if(id == 0){ com = 'random'; getP2 = Math.floor(Math.random() * blogJsonVar.length); }




if(com == ''&&tagListStatus == 'on'){
print += `
<!--<div class="block tCenter padding">
com:${com} id:${id} q:${q} p:${getP} p2:${getP2}
<a href="?id=">random</a>
</div>-->
`;
}

let i = 0;
let sRelevantPoint = 0;
blogJsonVar.forEach((item, key) => {

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



switch (com){

case 'search':
// search start


//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = decodeURIComponent(q);
qSearch = String(qSearch).toLowerCase();
let qData = String(postText+' '+postTag).toLowerCase();


// if tag
if(qSearch[0] == '#'){
qData = qData.replaceAll(/,/g, ' ');
if((qData+' ').indexOf((qSearch+' ')) >= 0){
if(getP3 <= i){
if(i3 <= postLimit -1){
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
if(i3 <= postLimit -1){
print += fuPrintPost(postId, postText, postTag, postTime);
}
i3++;
}
i++;
total = i;
comMessagePrint = `${q} ${i}`;
comMessage = 'found';
}




if(comMessagePrint == '') { comMessagePrint = `<div class="red block padding">Probably not found</div>`; }
break;

case 'id':
if(i <= postLimit -1){
if(postId == id||getP2 == key){
print += '<div class="">'+fuPrintPost(postId, postText, postTag, postTime)+'</div>';
comMessagePrint = 'id: '+postId;
//document.getElementsByTagName('title')[0].innerHTML = postText.slice(0, 70);
document.getElementsByTagName('title')[0].innerHTML = postText;
if(getP2 != null){ comMessagePrint += ' p2: '+getP2; }
i++;
getP = key;
}
}
if(comMessagePrint == '') { comMessagePrint = `<div class="red block padding">Probably not found</div>`; }
break;

case 'random':
if(i <= postLimit -1){
if(getP2 == key){
print += '<div class="">'+fuPrintPost(postId, postText, postTag, postTime)+'</div>';
i++;
getP = key;
comMessagePrint = 'random, '+'id: '+postId+', p2: '+getP2;
}
}
break;

default:

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
blogJsonVar.forEach((item, key) => {

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

if(com == 'search'&&comMessage != 'found'){


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
comMessagePrint = `${q} ${i}`;
qData = '';
comMessage = 'found'
sRelevantPoint++
}
});


console.log(sRelevantPoint);

}



});

if(com == 'search'&&comMessage != 'found') { comMessagePrint = `<div class="red block padding">Probably not found</div>`; }
// end Search 2








// tagList and nav print
if(tagListStatus != 'off'){





//if(com != 'search'){ print += `<div class="${postClass}">`+blogNav(com)+`</div>`; }
print += `<div class="${postClass}">`+blogNav(com)+`</div>`;

if(com == 'search'){
print += `
<div class="wrapper">
<div class="block tRight padding">
<a class="op border2 button light" href="#" onclick="history.back()" title="history back">back</a>
<a class="op border2 button light" href="?">main</a>
</div>
</div>
`;
}
print += `
<div class="center tCenter">
<div class="wrapper4">
<span class="op small">list of tags:</span><br>
<div class="tagList padding">`+tagList(printTagList)+`</div>
</div>
</div>
`;

// search forom


print += `
<br>
<div id="form" class="wrapperL">
<form method="GET" style="margin-top: 0px;" action="?">

<input id="input" class="padding op" type="search" style="text-align: center;" name="q"  autocomplete="off" placeholder="" value="${q}">

<input class="op" style="padding: 0; min-height: 1px; height: 24px; font-size: 12px;" type="submit" value="search">

</form>

</div>
`;







}



// echo all
document.getElementById(printId).innerHTML = print;
if(comMessagePrint != ''){
comMessagePrint = `
<div class="op tCenter padding ${postClass}">${comMessagePrint}</div>
`;
document.getElementById('comMsg').innerHTML = comMessagePrint;
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
tagSize = "150%";
break;

case tagPercentage >= 250:
tagColor = "var(--yellow)";
tagSize = "130%";
break;

case tagPercentage >= 100:
tagColor = "var(--green)";
tagSize = "120%";
break;

case tagPercentage >= 80:
tagColor = "var(--blue)";
tagSize = "110%";
break;

case tagPercentage >= 50:
tagColor = "var(--indigo)";
tagSize = "100%";
break;

case tagPercentage >= 30:
tagColor = "var(--violet)";
tagSize = "95%";
break;

default:
tagColor = "var(--c2)";
tagSize = "85%";
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
let printTag = tag.replaceAll(/#/g, "");
let goTag = encodeURIComponent(tag);

let hlClass = '';
if(printTag[0] != undefined){
hlClass = 'hlClass'+printTag[0].toLowerCase();
hlClassList += printTag[0].toLowerCase();
}

if(q == tag){
tagList += `

<a class="tag light border2 ${hlClass}" href="${scriptDir}?q=${goTag}" style="background: ${tagColor}; color: var(--l4); font-size: ${tagSize} !important;">#${printTag}</a>

`;
}else{

tagList += `

<a class="tag light border2 ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')"  onmouseout="hlwClassRemove('${hlClass}')" href="${scriptDir}?q=${goTag}"  style="color: ${tagColor}; font-size: ${tagSize} !important;">#${printTag}</a>

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

tagList += `<div class="block padding tCenter">${hlClassList}</div>`;


return tagList;
}
//  end tag list






function fuPrintPost(id, post, tag, time){
tag = highlightText(tag);
//time = new Date(time).getTime();
time = `<a href="${scriptDir}?id=${id}">&nbsp;`+fuPostTime(time)+`&nbsp;</a>`;


// selected orange word when search
if(q != null&&com == 'search'){

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



}else if(com == 'id'||com == 'random'){ // autoplay embed when id or random
post = highlightText2(post, 'out');
}else{
post = highlightText(post, 'out'); // embed without autoplay
}

return `

<!-- post -->
<div class="`+postClass+` bgList brand border3List" id="`+id+`">
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

// 1 highlightText
function highlightText(text, hrefInOut){
//text = decodeURIComponent(text); // error sometimes

text = clearText(text);

// if code
text = text.replaceAll(/</g, "&lt;");
text = text.replaceAll(/>/g, "&gt;");

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

checkText = false;

switch (host[2]) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":
play = item.split('v=').pop();
if(play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
break;

case 'vimeo.com':
play = item.split('/');
embed = `<iframe src="https://player.vimeo.com/video/`+play[play.length-1]+`?badge=0" height="${h}"  frameborder="0"></iframe>`;
break;

case "twitter.com":
case "mobile.twitter.com":
embed = `<style>.twitter-tweet { margin-top: 0px !important; }</style><div style="display: block; width: 100%; max-width: 550px; margin: 0 auto;"><blockquote class="twitter-tweet" data-lang="${lang}" data-theme="${confThemeEmbed}"><a href="${item}"></a></blockquote></div><!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->`;
break;

case "www.reddit.com":
if(item.split('/').length >= 9){
play = item.replaceAll('reddit.com/r/', "redditmedia.com/r/");
embed = `<iframe style="border-radius: 0 !important;" id="reddit-embed" src="${play}?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=${confThemeEmbed}" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none;" scrolling="yes" width="640" height="320px"></iframe>`;
}
break;

case "soundcloud.com":
embed = `<iframe width="${w}" height="${h}" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${item}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
break;

case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
embed = `<iframe src="https://tunein.com/embed/player/${play}/?autoplay=false&background=${confThemeEmbed}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`;
break;

case "codepen.io":
play = item.split('/');
play = play[play.length - 1];
embed = `<p class="codepen" data-height="420" data-default-tab="result" data-theme-id="${confThemeEmbed}" data-slug-hash="${play}" data-user="" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p><!--<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>-->`;
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
item = `<a target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${symbolForSplit}mp3|${symbolForSplit}wav|${symbolForSplit}ogg|${symbolForSplit}m3u`) != -1) {
checkText = false;

embed2 = `<audio controls style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg"><source src="${item}" type="audio/mpeg">Your browser does not support the audio element.</audio>`;
item = `<a target="_blank" href="${item}">${item}</a>`;
}


if(itemCheck.search(
`${symbolForSplit}jpg|${symbolForSplit}jpeg|${symbolForSplit}png|${symbolForSplit}gif|${symbolForSplit}img|${symbolForSplit}ico`) != -1) {
checkText = false;

//echo 'test';
embed2 = `
<a href="${item}"><img class="border3 img" src="${item}" width=""></a>`;
item = `<a target="_blank" href="${item}">${item}</a>`;
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
item = `<a target="_blank" href="${item}"><img class="ico op" src="${ico}" width="14px" alt="ico"> ${item}</a>`;
}else{
checkText = false;

item = `<a target="_blank" href="${item}">${item}</a>`;
}
}


if(item.search("./") != -1&&item.search(".htm") != -1&&item.search("http") == -1){
checkText = false;
item = `<a target="_blank" href="${item}">${item}</a>`;
}


//add tag
if(item[0] == '#'){
checkText = false;

item = item.replaceAll(/#/g, "");
if(hrefInOut == 'out'){
/*item = `<a rel="nofollow" href="/projects/blog-in-progress/?q=${item} tag">#${item} <span class="sup">⇗</span></a>`;*/
item = `<a rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}else{
item = `<a rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
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














// 2 highlightText
// highlight Text2 with autoplay when pressed id (date)
function highlightText2(text, hrefInOut){
//text = decodeURIComponent(text); // error sometimes

text = clearText(text);

// if code

text = text.replaceAll(/</g, "&lt;");
text = text.replaceAll(/>/g, "&gt;");

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
play = item.split('v=').pop();
if(play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}?&autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; autoplay; picture-in-picture" allowfullscreen></iframe>`;
}
break;

case 'vimeo.com':
play = item.split('/');
embed = `<iframe src="https://player.vimeo.com/video/`+play[play.length-1]+`?badge=0&autoplay=1" height="${h}"  frameborder="0"></iframe>`;
break;

case "twitter.com":
case "mobile.twitter.com":
embed = `<style>.twitter-tweet { margin-top: 0px !important; }</style><div style="display: block; width: 100%; max-width: 550px; margin: 0 auto;"><blockquote class="twitter-tweet" data-lang="${lang}" data-theme="${confThemeEmbed}"><a href="${item}"></a></blockquote></div><!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->`;
break;

case "www.reddit.com":
if(item.split('/').length >= 9){
play = item.replaceAll('reddit.com/r/', "redditmedia.com/r/");
embed = `<iframe style="border-radius: 0 !important;" id="reddit-embed" src="${play}?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=${confThemeEmbed}" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none;" scrolling="yes" width="640" height="320px"></iframe>`;
}
break;

case "soundcloud.com":
embed = `<iframe width="${w}" height="${h}" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${item}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
break;

case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
embed = `<iframe src="https://tunein.com/embed/player/${play}/?autoplay=true&background=${confThemeEmbed}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`;
break;

case "codepen.io":
play = item.split('/');
play = play[play.length - 1];
embed = `<p class="codepen" data-height="420" data-default-tab="result" data-theme-id="${confThemeEmbed}" data-slug-hash="${play}" data-user="" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p><!--<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>-->`;
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
item = `<a target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${symbolForSplit}mp3|${symbolForSplit}wav|${symbolForSplit}ogg|${symbolForSplit}m3u`) != -1) {
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg"><source src="${item}" type="audio/mpeg">Your browser does not support the audio element.</audio>`;
item = `<a target="_blank" href="${item}">${item}</a>`;
}


if(itemCheck.search(`${symbolForSplit}jpg|${symbolForSplit}jpeg|${symbolForSplit}png|${symbolForSplit}gif|${symbolForSplit}img|${symbolForSplit}ico`) != -1) {
//echo 'test';
embed2 = `
<a href="${item}"><img class="border3 img" src="${item}" width=""></a>`;
item = `<a target="_blank" href="${item}">${item}</a>`;
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
item = `<a target="_blank" href="${item}"><img class="ico op" src="${ico}" width="14px" alt="ico"> ${item}</a>`;
}else{
item = `<a target="_blank" href="${item}">${item}</a>`;
}
}


if(item.search("./") != -1&&item.search(".htm") != -1&&item.search("http") == -1){


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
function blogNav(com){

let prev = Number(Math.floor(getP - postLimit)); //https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
let next = Number(Math.floor(getP + postLimit));


if(com != 'search'){ // if not search
total = Number(blogJsonVar.length);
}
let total2 = total;

if(next >= total){ next = total - 1; total2 = total - 1; }
if(prev <= 0){ prev = 0; }


var navOption2 = '';
var navOption3 = '';

let nav2Print = '';
let navMode = 'p';
if(com == 'random'){
navMode = 'p2';

nav2Print = `
<div class="tRight">
<a class="op borderList button light block" href="?p=`+Math.floor(getP)+`">list</a>
<!--<a class="op borderList button light block" href="?id=">rand</a>-->
</div>
<!--<a class="op border2 button light" style="width: 49%;" href="#" onclick="history.back()">back</a>-->
`;
}

if(com == 'id'){
navMode = 'p2';

nav2Print = `
<div class="tRight">
<a class="op block borderList button light" href="?p=`+Math.floor(getP)+`">list</a>
<!--<a class="op borderList button light" href="?id=">random</a>-->
</div>
<!--<a class="op border2 button light" style="width: 49%;" href="#" onclick="history.back()">back</a>-->
`;
}


if(q == null||q == 'null'){ q = ''; }

if(com == 'search'){
navMode = 'p3';



navOption3 = `<input type="hidden" name="q" value="${q}">`;
navOption2 = 'q='+encodeURIComponent(q)+"&";
nav2Print = `
<div class="tRight">
<!--<a class="op borderList button light" href="?id=">random</a>-->
</div>
<!--<a class="op border2 button light" style="width: 49%;" href="#" onclick="history.back()">back</a>-->
`;
}

if(com == ''){

nav2Print = `
<div class="tRight">
<!--<a class="op borderList button light" href="?id=">random</a>-->
</div>
<!--<a class="op border2 button light" style="width: 49%;" href="#" onclick="history.back()">back</a>-->
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
paddin: 0 !important;
justify-content: center;
}
</style>



<form id="form">
${navOption3}
<input  name="${navMode}" style="
/*-webkit-transform: rotateY(180deg);
-moz-transform: rotateY(180deg);
-ms-transform: rotateY(180deg);
-o-transform: rotateY(180deg);
transform: rotateY(180deg);*/" id="rangeinput" class="slider" value="${getP}" type="range" min="0" max="${total2}" step="${postLimit}" onmouseup="this.form.submit();" ontouchend="this.form.submit();">
</form>

<div class="grid">
<a class="op border button light" href="?${navOption2}${navMode}=${prev}">&#8592;</a>
<div class="button border"><span class="op pre">${navMode}: </span>`+Math.floor(getP/postLimit)+`</div>
<a class="op border button light" href="?${navOption2}${navMode}=${next}">&#8594;</a>
</div>

${nav2Print}

`;


}















// for embed 
if(embedStatus != 'off'){

var script = document.createElement('script');
script.type='text/javascript';
script.async = true;
script.charset = 'utf-8';
script.src = 'https://platform.twitter.com/widgets.js';      
document.getElementsByTagName('head')[0].appendChild(script);

var script2 = document.createElement('script');
script2.type='text/javascript';
script2.async = true;
script2.charset = 'utf-8';
script2.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
document.getElementsByTagName('head')[0].appendChild(script2);

}


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



function clearText(text){

//https://stackoverflow.com/questions/2774471/what-is-c2-a0-in-mime-encoded-quoted-printable-text
text = text.replaceAll(/%C2%A0/g, " "); // non-breaking space.
text = text.replaceAll(/ /g, " "); // non-breaking space.

return text;
}



//https://stackoverflow.com/questions/5409641/set-a-variable-if-undefined-in-javascript
// if main index js not exit
if (typeof lang === 'undefined') {
var lang = 'en';
}

if (typeof confThemeEmbed === 'undefined') {
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
var confThemeEmbed= 'dark';
}else{
var confThemeEmbed= 'light';
}
}

if (typeof fuWorker === 'undefined') {
function fuWorker(){ }
}
















