// v.1.0.6



var jsonVar = musicJsonVar;
var lTitle = 'Random Music';

//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



// start from radio
var count = 0;
var scriptDir = '';
var printTagList = '';
var tagListLimit = '100';

//alert(jsonVar[getRandomInt(jsonVar.length)]);
//alert(jsonVar.length);

var url = new URL(window.location);


var q = url.searchParams.get("q");
if(q != null){
q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);
q = q.trim();
localStorage.setItem('randomMusicQ', q);
}


var tag = url.searchParams.get("tag");
if(tag != null){
tag = tag.replaceAll(/%/g, "%25");
tag = decodeURIComponent(tag);
tag = tag.trim();
}



if(q == null){ q = localStorage.getItem('randomMusicQ'); }
if(q == null) { q = '#music'; tag = q; }
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
printTagList += (postText+' '+postText2+' '+postText3+' '+postTag+' '+symbolForSplit).toLowerCase();


if(q2 != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = decodeURIComponent(q2);
qSearch = String(qSearch).toLowerCase();
}
qSearch = String(qSearch).toLowerCase();


// if tag
//if(qSearch[0] == '#'){}
qData = String(postText+' '+postText2+' '+postText3+' '+postTag).toLowerCase();
qData = qData.replaceAll(/,/g, ' ');
if((qData+' ').indexOf((qSearch+' ')) >= 0){
arrListForRandom.push(key);

i++;
total = i;
comMessagePrint = `<b class="tCenter"><h3 class="op">${lTitle}</h3>${q2} ${i}</b >`;
document.getElementsByTagName('title')[0].innerHTML = `${lTitle} ${q2}`;
document.getElementsByTagName('title')[0].innerHTML += ' | '+domainNameToTitle;
}


if(arrListForRandom.length > 0){
getP2 = Math.floor(Math.random() * arrListForRandom.length);
id = arrListForRandom[getP2];
}else{
comMessagePrint = '<span class="red">not found</span>';
id = getRandomInt(jsonVar.length);
comMessagePrint += '<span class=""> random id: '+id+'</span>';
}



});
// end from radio

document.getElementById('msg').innerHTML = `
<div class="block op padding margin tCenter">${comMessagePrint}</div>
`;

if(q == "#music"){ id = getRandomInt(jsonVar.length); }


//alert(jsonVar[getRandomInt(jsonVar.length)]);
//alert(jsonVar.length);


var randomTitle = jsonVar[id]['text'];
var randomURL = jsonVar[id]['url'];

var tmp = document.createElement ('a');
tmp.href   = randomURL;
var host = tmp.hostname;

document.getElementById("playTitle").innerHTML =  randomTitle; 

document.getElementById("playURL").innerHTML =  '<a class="brand" target="blank" href="'+randomURL+'">'+randomURL+' ⇗</a>'; 
 


var w = '100%';
var h = '275px';


switch (host) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":
  
//alert(randomURL);
var play = randomURL.split('v=').pop();



//alert(play);
    //<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
     document.getElementById("playerxx").innerHTML = '<div id="player"></div>'; 

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: h,
          width: w,
          videoId: play,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onStateChange': onPlayerStateChange2
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
//event.target.mute();
//event.target.setVolume(100); 
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
 if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
}
       
}
function stopVideo() {
        player.stopVideo();
      }


function onPlayerStateChange2(event) {
		  if(event.data === 0) {            
// Simulate an HTTP redirect:
location.reload();  
}
}



break;
   

case 'vimeo.com':

function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://player.vimeo.com/api/player.js')
    .then(() => {
        console.log('Script loaded!');
        
        
        
        
        
        
var play = randomURL.split('/').pop();
document.getElementById("playerxx").innerHTML = '<div id="myVideo" data-vimeo-id="'+play+'" data-vimeo-autoplay="true"></div>'; 

var options = {
    url: "https://vimeo.com/"+play,
   // width:400
   height:h
  };

  var videoPlayer = new Vimeo.Player('myVideo', options);

videoPlayer.on('play', function() {
    console.log('Played the video');
  });
  
videoPlayer.on('ended', function(data) {
location.reload(); 
location.reload(); 
});
        
        
        
        
        
    }).catch(error => {
        console.error(error);
    });
    
    
    
    



break;

    
case "soundcloud.com":

function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://w.soundcloud.com/player/api.js')
    .then(() => {
        console.log('Script loaded!');
        

  document.getElementById("playerxx").innerHTML = '<iframe  id="sc-widget" width="'+w+'" height="'+h+'" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url='+randomURL+'&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'; 


  (function(){
    var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe);

    widget.bind(SC.Widget.Events.READY, function() {
      // load new widget
      widget.bind(SC.Widget.Events.FINISH, function() {
// Simulate an HTTP redirect:

location.reload(); 
location.reload(); 
      });
    });

  }());

 }).catch(error => {
 console.error(error);
    });

 break;

case 'dailymotion.com':
case 'www.dailymotion.com':
var play = randomURL.split('/');
play = play[play.length - 1];
document.getElementById("playerxx").innerHTML = `<iframe frameborder="0" width="${w}" height="${h}" src="https://www.dailymotion.com/embed/video/${play}?autoplay=1" allowfullscreen allow="autoplay"></iframe>`;
break;

case "archive.org":
if(item.search(`/details/`) != -1) {
var play = randomURL.split('/');
play = play[play.length - 1];
h = h + h;
document.getElementById("playerxx").innerHTML = `<iframe src="https://archive.org/embed/${play}" width="${w}" height="${h}" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
}
break;

    
default:
console.log(`default switch`);
}





















// from radio copy past (from blog copy past)
// start taglist
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

var hlClassList3 = '';
hlClassList2 = [...new Set([...hlClassList])]; //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
hlClassList = '';
hlClassList2.forEach(function(item){
let hlClass = 'hlClass'+item;
item = item.toUpperCase();
hlClassList3 += `
<a class="tag light border2 ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')" onmouseout="hlwClassRemove('${hlClass}')" href="#id${hlClass}" id="${hlClass}">${item}</a>
`;
});




tagList = `

<div class="tagList">${tagList}</div>
<div class="block padding"></div>
<div class="tagList postTv">${hlClassList3}</div>

`;



return tagList;
}
//  end tag list















document.getElementById('taglist').innerHTML += `
<div class="tCenter" style="padding-top: 60px;">
<div class="wrapper3">

<div class="small padding op">list of "title" tags:</div>
`+tagList(printTagList)+`
</div>
</div>
`;


document.getElementById('taglist').innerHTML +=  `
<br>

<div id="form" class="wrapperL">
<form method="GET" style="margin-top: 0px;" action="?">
<label id="search" class="op block tLeft x-small">search and tag:</label>
<input id="input" class="padding op" type="search" style="text-align: center;" name="q"  autocomplete="off" placeholder="" value="${q}">

<input class="op" style="padding: 0; min-height: 1px; height: 24px; font-size: 12px;" type="submit" value="go">

</form>

<br>
<span class="x-small op block tCenter margin padding">total: ${jsonVar.length}</span>
</div>
`;














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







