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



`;
