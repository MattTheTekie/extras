// v.1.1.67




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
q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);



// for the command at the end of the search query
var strArray = q.split(" ");
var q2 = strArray[strArray.length - 1] + "#";
var q3 = q + "#";



switch (q2) {

case '⚂#':
case '3#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "?q="+q; // quik open website https://about.you.com/bangs/
if(q == ''){
urlList = [
'tec', 'sci', 'dev'
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


case 'w#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://wikipedia.org/w/index.php?search="+q;
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
"https://x.com/search?q="+q,
"https://www.reddit.com/search/?q="+q+"&t=day&type=link",
"https://www.tumblr.com/search/"+q+"?t=1",
"https://medium.com/tag/"+encodeURIComponent(decodeURIComponent(q.toLowerCase()).replaceAll(' ', '-'))+"/latest"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://x.com/explore",
"https://www.tumblr.com/explore/",
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
"https://x.com/search?q="+q,
"https://www.tumblr.com/search/"+q,
"https://www.reddit.com/search/?q="+q+"&t=day&type=link",
"https://medium.com/tag/"+encodeURIComponent(decodeURIComponent(q.toLowerCase()).replaceAll(' ', '-'))+"/latest"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://x.com/explore",
"https://www.tumblr.com/explore/",
"https://medium.com/"
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

case 'x#':
case 'twi#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://x.com/search?q=" + q;
if(q == ''){ url = "https://x.com/explore"; }
sRedirUrl = url;
break;



case 'xx#':
case 'twii#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://x.com/search?q="+q+"&f=live";
if(q == ''){ url = "https://x.com/explore"; }
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
if(q == ''){ url = "https://x.com/explore"; }
sRedirUrl = url;
break;

case 'medd#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://medium.com/tag/"+encodeURIComponent(decodeURIComponent(q.toLowerCase()).replaceAll(' ', '-'))+"/latest";
if(q == ''){ url = "https://x.com/explore"; }
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

case 'gg#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/?q="+q
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl= random;
if(q == ''){
//sRedirUrl = "https://app.grammarly.com/";
sRedirUrl = "https://www.grammarly.com/grammar-check";
}
break;

case 't#':
case 'tr#':
case 'tra#':
q = q3.replace(q2, '');
q = q.trim();

var deepLq = q.replaceAll(/\//g, "-"); // fixed
deepLq = encodeURIComponent(deepLq);

q = encodeURIComponent(q);

urlList = [
//"https://translate.google.com/?sl=auto&tl=auto&text="+q+"&op=translate",
"https://www.deepl.com/translator#auto/auto/"+deepLq,
"https://www.bing.com/translator/?text="+q+"&from=auto&to=auto"
];
if(confDevice != 'mobile'){
urlList.push("https://translate.google.com/?sl=auto&text="+q+"&op=translate");
}

random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl= random;
break;

case 'tt#':
q = q3.replace(q2, '');
q = q.trim();

var deepLq = q.replaceAll(/\//g, "-"); // fixed
deepLq = encodeURIComponent(deepLq);

q = encodeURIComponent(q);



urlList = [
"https://translate.google.com/?sl=auto&tl=en&text="+q+"&op=translate",
"https://www.deepl.com/translator#auto/en/"+deepLq,
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
"https://www.qwant.com/?t=news&q="+q
];

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://news.google.com/",
"https://flipboard.com/topic/news",
"https://www.bing.com/news/",
"https://x.com/i/topics/840159616101044224",
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
"https://www.bing.com/news/search?q=Technology",
"https://slashdot.org/",
"https://flipboard.com/topic/technology",
"https://flipboard.com/topic/computerscience",

"https://news.ycombinator.com/",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB",
"https://getpocket.com/explore/technology",
"https://x.com/i/topics/848920371311001600",
"https://www.reddit.com/r/technology/",
"https://medium.com/tag/technology",
"https://finance.yahoo.com/tech/",

"https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREZ0YTNFU0FtVnVLQUFQAQ",
//"https://www.reddit.com/r/computerscience/",
//"https://www.reddit.com/r/compsci/",
"https://medium.com/tag/computer-science"

//"https://www.smartnews.com/en/us/technology",
// redirect app, delme "https://www.newsbreak.com/channels/technology"
];

/*if(confDevice == 'mobile'){
urlList.push("https://www.bing.com/news/search?q=Technology");
}else{
urlList.push("https://www.bing.com/news/search?q=Sci/Tech");
}*/

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
"https://x.com/i/topics/854692455005921281",
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

case 'dev#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q="+q+" cod"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirUrl = random;
if(q == ''){
urlList = [
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

"https://medium.com/tag/ai",
"https://dev.to/",
"https://hashnode.com/community",
"https://www.indiehackers.com/"

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
case 'cod#':
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

'https://www.w3schools.com/',
'https://developer.mozilla.org/docs/',
'https://web.dev/',
'https://www.php.net/manual/en/'

/*
'https://www.w3.org/',
'https://isocpp.org/tour',
'https://www.ruby-lang.org/en/documentation/',
'https://docs.scala-lang.org/',
'https://docs.python.org/',
'https://golang.org/doc/',
'https://www.rust-lang.org/learn',
'https://devdocs.io/',
'https://docs.julialang.org/',
'https://www.typescriptlang.org/docs/',
'http://www.lua.org/docs.html'
*/
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
sRedirUrl = "/projects/22-radio/";
if(q != ''){
url = "/?q="+q+' m';
sRedirUrl = url;
}
break;

case 'no#':
sRedirUrl = "/mini-projects/12-not-sleep-pc/";
break;


case 'ti#':
sRedirUrl = "/projects/30-time-stopwatch/";
break;

case 'ra#':
case 'rad#':
sRedirUrl = "/projects/22-radio/";
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
sRedirUrl = "/projects/20-music/";
break;

case 'bb#':
case 'b#':
case 'k#':
case 'kk#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
`/blog.${confExt}?q=`+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
`/blog.${confExt}`
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'hin#':
case 'hi#':
case 'he#':
case 'ch#':
case 'cha#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://you.com/search?q="+q+"&tbm=youchat",
//"https://www.perplexity.ai/?q="+q,
"https://beta.character.ai/chat?char=YntB_ZeqRq2l_aVf2gWDCZl4oBttQzDvhj9cXafWcF8&q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://you.com/",
//"https://www.perplexity.ai/",
"https://beta.character.ai/chat?char=YntB_ZeqRq2l_aVf2gWDCZl4oBttQzDvhj9cXafWcF8&q="
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'we#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.accuweather.com/search-locations?query=" + q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"?q=weather"
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

case 'you#':
case 'yo#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://you.com/search?q="+q;
sRedirUrl = url;
break;

case 'qq#':
case 'ss#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = `/sitemap.${confExt}?q=`+q;
sRedirUrl = url;
break;

case 'oo#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [

//"https://search.yahoo.com/search?p="+q,
"https://search.givewater.com/serp?q="+q,
"https://duckduckgo.com/?q="+q,

// with index maybe
//"https://swisscows.com/web?query="+q,
//"https://www.gigablast.com/search?q=$q",// unable to connect
//"https://search.goo.ne.jp/web.jsp?MT="+q+"&IE=UTF-8&OE=UTF-8",
//"https://search.seznam.cz/?q="+q,
//"https://www.sapo.pt/pesquisa/web/tudo?q="+q,

//"https://www.kiddle.co/s.php?q=$q",
//"https://web.search.ch/?q=$q",

//"http://leit.is/company_search?search=$q",
//"https://fireball.de/search?q="+q,
//"https://freespoke.com/search/web?q=$q",
//"https://qmamu.com/search?q="+q,
//"https://cyb.ai/search/$q",

//"https://kagi.com/search?q=$q", // need login
//"https://www.alexandria.org/?q=$q", // no results
//"https://wiby.me/?q="+q,
//"https://search.naver.com/search.naver?query=$q", //closed

// without

//"https://www.ask.com/web?q="+q,

//"https://search.lycos.com/web/?q="+q,
//"https://andisearch.com/?q=$q",
//"https://startpage.com/sp/search?q="+q,
//"https://yep.com/web?q="+q,
//"https://teclis.com/search?q="+q, // maitenance

//"https://www.ekoru.org/?q="+q,// no result
//"https://search.lilo.org/?q="+q,
//"https://searx.ninja/?q=$q&categories=general",


//"https://peekier.com/?#!"+q,

//"https://engine.presearch.org/search?q="+q,

//"https://www.dogpile.com/serp?q=$q",
//"https://metager.org/meta/meta.ger3?eingabe="+q,
//"https://ellpedia.com/search?q="+q,
//"https://search.niriv.com/web?q=$q",
//"https://www.zapmeta.com/search?q="+q,
//"https://gibiru.com/results.html?q="+q,
//"https://www.webcrawler.com/serp?q=$q",
//"https://www.metacrawler.com/serp?q=$q",
//"https://results.excite.com/serp?q=$q",
//"https://www.infospace.com/serp?q=$q",
//"https://search.daum.net/search?q="+q
//"https://www.petalsearch.com/search?query=$q"

//"https://www.mojeek.com/search?q=$q"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"?=o"
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
"https://www.ecosia.org/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.qwant.com/",
"https://you.com/",
"https://www.ecosia.org/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 'q#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q="+ q,
"https://www.bing.com/search?q="+ q,
"?q="+q+" o",
"?q="+q+" oo"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
break;


default:
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+ q,
"https://www.bing.com/search?q="+ q,
"?q="+q+" o",
"?q="+q+" oo"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
}





if(sRedirUrl != ''&&sRedirUrl != undefined&&sRedirUrl != null){
window.location.href = "/projects/25-redirects/?rUrl="+sRedirUrl;
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
"bin", "goo", "n", "x", "red"
];

var b = '';
a.forEach((item, index) => { 
b  += item+ ', ';
 });

if(document.getElementById('print') != null){
document.getElementById('print').innerHTML = '<div class="bg padding border2 light op">Redirects commands list: '+b+'<br />Example redirects: "Google n" - news about Google, etc</div>';
}





//fuWorker('on');




