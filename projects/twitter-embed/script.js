// v.1.1.0

function twitterEmbed(id, userName, postLimit, theme){
var twitterUserName = userName;
var twitterDataTweetLimit = postLimit;
//var twitterDataTheme = 'light';
var twitterDataTheme = theme;

if (typeof theme === 'undefined'||theme == undefined||theme == '') {
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
var twitterDataTheme= 'dark';
}else{
var twitterDataTheme= 'light';
}
}

document.getElementById(id).innerHTML = `

<a data-tweet-limit="${twitterDataTweetLimit}" data-theme="${twitterDataTheme}" data-chrome="nofooter noborders noheader" class="twitter-timeline" href="https://twitter.com/${twitterUserName}?ref_src=twsrc%5Etfw"></a>

<a class="button block light border3List op bold" href="https://twitter.com/${twitterUserName}">https://twitter.com/${twitterUserName}</a>

`;

var scriptStat = document.createElement('script');
scriptStat.type='text/javascript';
scriptStat.async = 'async';
scriptStat.src = 'https://platform.twitter.com/widgets.js';      
document.getElementsByTagName('head')[0].appendChild(scriptStat);

}
