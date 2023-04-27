/* v.1.1.18 */

function fuAds(themeAds, idAds, maxAds, comAds){

if(document.getElementById(idAds) != null){

let ads = [];
var adsPrint = '';


//ads = JSON.parse(adsJson);

if (typeof linksListJsonVar != 'undefined') { ads = ads.concat(linksListJsonVar); }
if (typeof adsJsonVar != 'undefined') { ads= ads.concat(adsJsonVar); }


//ads = JSON.parse(adsJson);

if(ads != null){
const random = Math.floor(Math.random() * ads.length);
//console.log(ads[random]['text']);
adsText = ads[random]['text']; if(adsText == null) { adsText = ''; }
adsURL = ads[random]['url'];	if(adsURL == null){ adsURL = ''; }






// privacy
if(adsText.search("src=") != -1&&confDataCollection != 'on'){ adsText = ''; }
if(adsText.search("src=") != -1){
adsPrint = '<div class="adsHeader"><a class="zero op" href="/ads.'+confExt+'">ads, links</a></div><div class="adsBody"><br />'+adsText+' <br /><a target="blank" href="'+adsURL+'">'+adsURL+'</a></div>';
}else{
adsPrint = '<div class="adsHeader"><a class="zero op" href="/ads.'+confExt+'">ads, links</a></div><div class="adsBody"><br />'+adsText+' <a target="blank" href="'+adsURL+'">'+adsURL+'</a></div>';
}


if(adsText != ''&&adsText.search("src=") == -1){
document.getElementById(idAds).innerHTML = '<div class="center"><div class="post brand light border3 ads" style="text-align: left; margin: 10px 0;">'+adsPrint+'</div></div>';
}else if(adsText != ''){
document.getElementById(idAds).innerHTML = '<div class="center"><div class="light border3 ads" style="text-align: left; display: inline-block; padding: 7px;  max-width: 100%; margin: 10px 0;">'+adsPrint+'</div></div>';
}



if(comAds == 'all'){
adsPrint = '';
ads.forEach((item, index) => {

// privacy
if(ads[index]['text'].search("src=") != -1&&confDataCollection != 'on'){
ads[index]['text'] = `<span class="op" title=""><a class="brand" href="/privacy.${confExt}">hidden (privacy), need allow cookie</a></span>`;
}

adsPrint  += '<div class="post2 brand  border4List">'+ads[index]['text']+' <a target="blank" href="'+ads[index]['url']+'">'+ads[index]['url']+'</a></div>';
 });


adsPrint  += `<br><br><div class="post2 brand  border4List"><a  target="blank" href="/links-list.${confExt}"><span class="green">Links List (add your link!) </span><span class="blue">/links-list.${confExt}</span></a></div>`;



 document.getElementById(idAds).innerHTML = '<div class="center"><div class="post2 border3 light">'+adsPrint+'</div></div>';
}




}

}




// Google Analytics 
// privacy part
if(confDataCollection == 'on'){


// duplicated in main.js
// analytics
//<!-- Google tag (gtag.js) -->
var scriptStat = document.createElement('script');
scriptStat.type='text/javascript';
scriptStat.src = 'https://www.googletagmanager.com/gtag/js?id=G-JZ4TN0KQJW';      
document.getElementsByTagName('head')[0].appendChild(scriptStat);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JZ4TN0KQJW');





/*
// Google Ads 
var scriptGads = document.createElement('script');
scriptGads.type='text/javascript';
scriptGads.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-91344978none'; scriptGads.crossOrigin = 'anonymous';
document.getElementsByTagName('head')[0].appendChild(scriptGads);
*/


  
}











}








