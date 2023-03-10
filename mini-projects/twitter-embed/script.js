// v.1.0.0

var twitterUserName = 'twitter';
var twitterDataTweetLimit = '3';
//var twitterDataTheme = 'light';

if (typeof twitterDataTheme === 'undefined') {
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
var twitterDataTheme= 'dark';
}else{
var twitterDataTheme= 'light';
}
}

document.getElementById("embedTwitter").innerHTML = `

<a data-tweet-limit="${twitterDataTweetLimit}" data-theme="${twitterDataTheme}" data-chrome="nofooter noborders noheader" class="twitter-timeline" href="https://twitter.com/${twitterUserName}?ref_src=twsrc%5Etfw"></a>


<br />
<a class="button block light border3List op bold" href="https://twitter.com/${twitterUserName}">https://twitter.com/${twitterUserName}</a>

`;
