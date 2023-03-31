// v.1.1.26
// redirects

var geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");

var rUrlGet = url.searchParams.get("rUrl");

var random = '';
var urlList = [];

var sRedirUrl = '';

var tmp = '';


let sUrlText = String(url);

const myArray = sUrlText.split("q=");
sUrlText = myArray[0];


if(q == ''&&q != 'null'){ q = 'n'; }

if(q != 'null'&&q != null&&q != ''&&sUrlText.search("cache") == -1){

q = q.trim();
//q = q.replace(/%([^\d].)/, "%25$1");
q = q.replace(/%/g, "%25");
q = decodeURIComponent(q);



// for the command at the end of the search query
var strArray = q.split(" ");
var q2 = strArray[strArray.length - 1] + "#";
var q3 = q + "#";



switch (q2) {

case '3.14159265359#':
case '3#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "?q="+q; // quik open website https://about.you.com/bangs/
if(q == ''){
urlList = [
'tec', 'tec', 'tec', 'sci', 'sci', 'tag2'
];
random = Math.floor(Math.random() * urlList.length);
url = '?q='+urlList[random];
}
sRedirUrl = url;
break;

case 'c#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "?q="+q; // quik open website https://about.you.com/bangs/
if(q == ''){
urlList = [
'dev'
];
random = Math.floor(Math.random() * urlList.length);
url = '?q='+urlList[random];
}else{
url = '?q='+q+' cod';
}
sRedirUrl = url;
break;

case 'tag2#':
q = q3.replace(q2, '');
q = q.trim();

if(q == ''){
urlList = [
'Climate Change',
'Artificial General Intelligence'
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
//url = encodeURIComponent(url);
urlList = [
'tag',
'n'
];

url = '?q='+url+' '+urlList[Math.floor(Math.random() * urlList.length)];
}else{
//q = encodeURIComponent(q);
url = '?q='+q+' tag';
}

sRedirUrl = url;
break;


case 'w#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://wikipedia.org/w/index.php?search=" + q;
if(q == ''){ url = "https://wikipedia.org/wiki/Special:Random"; }
sRedirUrl = url;
break;

case 'l#':  case 'll#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
//url = "./?q="+q+' q';
url = "https://you.com/search?q=!"+q; // quik open website https://about.you.com/bangs/
urlList = [
"https://you.com/search?q=!"+q,
//"https://duckduckgo.com/?q=!"+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://you.com/",
"https://about.you.com/bangs/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;



case 'tag#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://twitter.com/search?q="+q,
"https://www.reddit.com/search/?q="+q+"&t=day&type=link",
//"https://www.tumblr.com/search/"+q+"?t=1",
"https://medium.com/tag/"+encodeURIComponent(decodeURIComponent(q.toLowerCase()).replace(' ', '-'))+"/latest"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://twitter.com/explore",
//"https://www.tumblr.com/explore/",
"https://medium.com/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 's#':
case 'soc#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://twitter.com/search?q="+q,
"https://www.reddit.com/search/?q="+q+"&t=day&type=link",
"https://medium.com/search?q="+q,
"https://medium.com/tag/"+encodeURIComponent(decodeURIComponent(q.toLowerCase()).replace(' ', '-'))+"/latest",

"https://www.tumblr.com/search/"+q+"/text",
"https://www.minds.com/discovery/search?q="+q+"&f=top&t=all"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://twitter.com/explore",
//"https://www.tumblr.com/explore/",
"https://medium.com/",

"https://www.minds.com/discovery/top"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'gig#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.gigablast.com/search?q=" + q;
sRedirUrl = url;
break;

case 'twi#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://twitter.com/search?q=" + q;
if(q == ''){ url = "https://twitter.com/explore"; }
sRedirUrl = url;
break;



case 'twii#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://twitter.com/search?q="+q+"&f=live";
if(q == ''){ url = "https://twitter.com/explore"; }
sRedirUrl = url;
break;

case 'red#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.reddit.com/search/?q=" + q+"&type=link";
if(q == ''){ url = "https://www.reddit.com/r/popular/"; }
sRedirUrl = url;
break;

case 'red2#':
case 'redd#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "?q=www.reddit.com" + q+" www";
if(q == ''){ url = "https://www.reddit.com/r/popular/"; }
sRedirUrl = url;
break;

case 'redd#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.reddit.com/search/?q="+q+"&t=day&type=link&sort=hot";
if(q == ''){ url = "https://www.reddit.com/r/popular/"; }
sRedirUrl = url;
break;

case 'med#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://medium.com/search?q="+q;
if(q == ''){ url = "https://twitter.com/explore"; }
sRedirUrl = url;
break;

case 'medd#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://medium.com/tag/"+encodeURIComponent(decodeURIComponent(q.toLowerCase()).replace(' ', '-'))+"/latest";
if(q == ''){ url = "https://twitter.com/explore"; }
sRedirUrl = url;
break;

case 'tum#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.tumblr.com/search/"+q;
if(q == ''){ url = "https://www.tumblr.com/explore/"; }
sRedirUrl = url;
break;



case 'cc#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://search.creativecommons.org/search?q="+q+"&license=cc0,pdm",
"https://www.google.com/search?q="+q+"&tbm=isch&tbs=il:cl",
"https://www.bing.com/images/search?q="+q+"&setlang=en&cc=us&qft=+filterui:license-L1"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl= random;
break;

case 'i#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&newwindow=1&source=lnms&tbm=isch",
"https://www.bing.com/images/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl= random;
break;

case 't#':
case 'tr#':
case 'tra#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=auto&text="+q+"&op=translate",
"https://translate.google.com/?sl=auto&tl=auto&text="+q+"&op=translate",
"https://translate.google.com/?sl=auto&tl=auto&text="+q+"&op=translate",
"https://www.deepl.com/translator#auto/auto/"+q,
"https://www.bing.com/translator/?text="+q+"&from=auto&to=auto"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl= random;
break;

case 'tt#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=en&text="+q+"&op=translate",
"https://translate.google.com/?sl=auto&tl=en&text="+q+"&op=translate",
"https://translate.google.com/?sl=auto&tl=en&text="+q+"&op=translate",
"https://translate.google.com/?sl=auto&tl=en&text="+q+"&op=translate",
"https://www.bing.com/translator/?text="+q+"&from=auto&to=en"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
break;

case 'tg#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=auto&text="+q+"&op=translate"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirUrl = url;
break;

case 'tb#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bing.com/translator/?text="+q+"&from=auto&to=auto"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirUrl = url;
break;

case 'n#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&tbm=nws",
"https://www.bing.com/news/search?q="+q,
"https://www.qwant.com/?t=news&q="+q,
"https://neeva.com/search?q="+q+"&c=News"
];

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://news.google.com/",
"https://flipboard.com/topic/news",
"https://www.bing.com/news/",
"https://mobile.twitter.com/i/topics/840159616101044224",
"https://www.reddit.com/r/news/",
"https://www.reddit.com/r/worldnews/",
"https://medium.com/tag/news",
"https://news.yahoo.com/"
//"https://m.fark.com/"
//"https://www.smartnews.com/",
//"https://www.newsbreak.com/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'tec#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&tbm=nws",
"https://www.bing.com/news/search?q="+q,
"https://www.qwant.com/?t=news&q="+q
];

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://flipboard.com/topic/technology",
"https://flipboard.com/topic/technology",
"https://flipboard.com/topic/technology",
"https://slashdot.org/",
"https://news.ycombinator.com/",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB",
"https://www.bing.com/news/search?q=Technology",
"https://getpocket.com/explore/technology",
"https://twitter.com/i/topics/848920371311001600",
"https://www.reddit.com/r/technology/",
"https://medium.com/tag/technology",
"https://finance.yahoo.com/tech/"
//"https://www.smartnews.com/en/us/technology",
// redirect app, delme "https://www.newsbreak.com/channels/technology"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'sci#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&tbm=nws",
"https://www.bing.com/news/search?q="+q,
"https://www.qwant.com/?t=news&q="+q
];

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://flipboard.com/topic/science",
"https://flipboard.com/topic/science",
"https://flipboard.com/topic/science",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pWVXlnQVAB",
"https://www.bing.com/news/search?q=Science",
"https://getpocket.com/explore/science",
"https://twitter.com/i/topics/854692455005921281",
"https://www.reddit.com/r/science/",
"https://medium.com/tag/science",
"https://news.yahoo.com/science/"
// redirect app, delme "https://www.newsbreak.com/channels/science"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'cod#':
case 'dev#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://github.com/search?q="+q+"&type=code"
//"https://beta.sayhello.so/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://flipboard.com/topic/computerscience",
"https://flipboard.com/topic/computerscience",
"https://flipboard.com/topic/computerscience",

"https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREZ0YTNFU0FtVnVLQUFQAQ",
"https://www.reddit.com/r/computerscience/",
"https://www.reddit.com/r/compsci/",
"https://www.reddit.com/r/programming/",
"https://www.reddit.com/r/learnprogramming/",
"https://www.reddit.com/r/webdev/",
"https://www.reddit.com/r/web_design/",
"https://www.reddit.com/r/artificial/",
"https://www.reddit.com/r/MachineLearning/",
"https://www.reddit.com/r/javascript/",
"https://www.reddit.com/r/css/",
"https://medium.com/tag/web-development",
"https://medium.com/tag/programming",
"https://medium.com/tag/computer-science",
"https://medium.com/tag/ai",
"https://dev.to/",
"https://hashnode.com/community"

/* redirect app "https://www.newsbreak.com/channels/computers",
"https://www.newsbreak.com/channels/internet",
"https://www.newsbreak.com/channels/coding-programming"*/
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'doc#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://stackoverflow.com/search?q="+q+""
];

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
'https://www.w3.org/',
'https://isocpp.org/tour',
'https://www.ruby-lang.org/en/documentation/',
'https://docs.scala-lang.org/',
'https://docs.python.org/',
'https://golang.org/doc/',
'https://www.rust-lang.org/learn',
'https://www.php.net/docs.php',
'https://www.w3schools.com/',
'https://developer.mozilla.org/docs/',
'https://devdocs.io/',
'https://docs.julialang.org/',
'https://www.typescriptlang.org/docs/',
'http://www.lua.org/docs.html'
//"https://twitter.com/explore/tabs/news"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'y#':
case '.#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.youtube.com/results?search_query=" + q;
if(q == ''){ url = "https://www.youtube.com/feed/explore"; }
sRedirUrl = url;
break;

case 'yy#':
case '..#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.youtube.com/results?search_query="+q+"&sp=EgIIAg%253D%253D";
if(q == ''){ url = "https://www.youtube.com/feed/explore"; }
sRedirUrl = url;
break;

case 'v#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&newwindow=1&tbm=vid",
"https://www.bing.com/videos/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.youtube.com/feed/explore",
"https://vimeo.com/watch",
"https://www.dailymotion.com/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'vv#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.youtube.com/results?search_query=" + q,
"https://vimeo.com/search?q=" + q,
"https://www.dailymotion.com/search/"+ q +"/videos",
"https://search.joinpeertube.org/search?search="+ q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.youtube.com/feed/explore",
"https://vimeo.com/watch",
"https://www.dailymotion.com/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 'm#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://music.youtube.com/search?q=" + q,
"https://soundcloud.com/search?q="+ q
//"https://www.deezer.com/search/"+ q +"/track",
//"https://music.apple.com/search?term="+q,
//"https://audiomack.com/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://music.youtube.com/explore",
//"https://www.deezer.com/channels/explore",
"https://soundcloud.com/discover",
"https://vimeo.com/categories/music"
//https://www.twitch.tv/directory/game/Music
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'mus#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bbc.co.uk/sounds/play/live:bbc_radio_one_dance",
"https://www.bbc.co.uk/sounds/play/live:bbc_radio_one",
"https://www.bbc.co.uk/sounds/play/live:bbc_1xtra"
];
if(confDevice == 'mobile'){
urlList.push("https://kexp.org/");
}else{
urlList.push("https://tunein.com/radio/KEXP-903-s32537/");
}
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q != ''){
urlList = [
"?q=n"
];
random = Math.floor(Math.random() * urlList.length);
url = "/?q="+q+' m';
}
sRedirUrl = url;
break;

case 'ti#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/projects/timer" + q;
sRedirUrl = url;
break;

case 'si#':
case 'ww#':
case 'www#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/?q=site:" + q;
sRedirUrl = url;
break;

case 'mm#':
sRedirUrl = "/projects/music/";
break;

case 'b#':
case 'k#':
case 'kk#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/projects/blog/?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"/projects/blog"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'o#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.qwant.com/?q="+q,
"https://you.com/search?q="+q,
"https://neeva.com/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.qwant.com/",
"https://you.com/",
"https://neeva.com/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'g#':
case 'goo#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.google.com/search?q=" + q;
if(q == ''){ url = "https://newsstand.google.com/?nsro=true&hl=en"; }
sRedirUrl = url;
break;

case 'bi#':
case 'bin#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.bing.com/search?q=" + q;
if(q == ''){ url = "https://www.msn.com/"; }
sRedirUrl = url;
break;


case 'qwa#':
case 'qw#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.qwant.com/?q=" + q;
sRedirUrl = url;
break;

case 'nee#':
case 'ne#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://neeva.com/search?q="+q;
sRedirUrl = url;
break;

case 'you#':
case 'yo#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://you.com/search?q="+q;
sRedirUrl = url;
break;



case 'q#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q="+ q,
"https://www.google.com/search?q="+ q,
"https://www.google.com/search?q="+ q,

"https://www.bing.com/search?q="+ q,
"?q="+q+" o"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
break;


default:
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+ q,
"https://www.google.com/search?q="+ q,
"https://www.google.com/search?q="+ q,

"https://www.bing.com/search?q="+ q,
"?q="+q+" o"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
}





if(sRedirUrl != ''&&sRedirUrl != undefined&&sRedirUrl != null){
window.location.href = "/projects/redirects/?rUrl="+sRedirUrl;
}


}

























// print

var print = '';

if(rUrlGet == null||rUrlGet == 'null'||rUrlGet == ''){

}else{

rUrlGet = String(window.location);
let myArray = rUrlGet.split("rUrl=");
rUrlGet = myArray[1];

let rUrlGetPrint = decodeURIComponent(rUrlGet);
rUrlGetPrint = rUrlGetPrint.replace(/</g, "&lt;");
rUrlGetPrint = rUrlGetPrint.replace(/>/g, "&gt;");


var sTimeRedir = 1200;

var sTimeRedirStatus = `redir: `+sTimeRedir / 1000+` sec.`;

if ((''+window.location+'').search("#stopRedir") == -1){ // if back Stop Redir
setTimeout(function(){
window.location.href = rUrlGet;
}, sTimeRedir); 
}

window.location.href = window.location.href+'#stopRedir'; 

if (rUrlGet.search("#stopRedir") != -1){ 
sTimeRedirStatus = '  ( redir: off )  ';

}


print = `

<div class="tCenter">
<div class="post bgList borderList op tCenter">`+sTimeRedirStatus+`</div>
<div class="post bgList borderList h3 orange bold">`+rUrlGetPrint+`</div>
<a class="block padding light borderList op" href="`+rUrlGet+`">open</a>
</div>

`;



document.getElementById("result").innerHTML = print;

}




var a = [
"bin", "goo", "n", "twi", "red"
];

var b = '';
a.forEach((item, index) => { 
b  += item+ ', ';
 });

if(document.getElementById('print') != null){
document.getElementById('print').innerHTML = '<div class="bg padding border2 light op">Redirects commands list: '+b+'<br />Example redirects: "Google n" - news about Google, etc</div>';
}





//fuWorker('on');




