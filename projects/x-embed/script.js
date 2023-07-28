// v.1.1.0

function xEmbed(id, userName, postLimit, theme){
var xUserName = userName;
var xDataTweetLimit = postLimit;
//var xDataTheme = 'light';
var xDataTheme = theme;

if (typeof theme === 'undefined'||theme == undefined||theme == '') {
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
var xDataTheme= 'dark';
}else{
var xDataTheme= 'light';
}
}

document.getElementById(id).innerHTML = `

<a data-tweet-limit="${xDataTweetLimit}" data-theme="${xDataTheme}" data-chrome="nofooter noborders noheader" class="x-timeline" href="https://twitter.com/${xUserName}?ref_src=twsrc%5Etfw"></a>

<a class="button block light border3List op bold" href="https://twitter.com/${xUserName}">https://twitter.com/${xUserName}</a>

`;

var scriptStat = document.createElement('script');
scriptStat.type='text/javascript';
scriptStat.async = 'async';
scriptStat.src = 'https://platform.twitter.com/widgets.js';      
document.getElementsByTagName('head')[0].appendChild(scriptStat);

}
