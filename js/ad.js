/* v.1.2.7 */
// print ads from json var list: fuAds('', 'ads2 - id where print', '');

function fuAds(none, idAds, comAds){

// none - reserver var

//
const confGoogleAnalyticsId = 'G-5S4DEE8WLV';


// Google Analytics 
// privacy part
if(confDataCollection == 'on'){

// analytics
//<!-- Google tag (gtag.js) -->
var scriptStat = document.createElement('script');
scriptStat.type='text/javascript';
scriptStat.src = `https://www.googletagmanager.com/gtag/js?id=${confGoogleAnalyticsId}`;      
document.getElementsByTagName('head')[0].appendChild(scriptStat);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', confGoogleAnalyticsId);



  
}



var adsStatus = '';




switch (localStorage.getItem('confAdsStatus')){

case 'off':
adsStatus = 'off';
break;

case 'random':
var items = ['on', 'off'];
item = items[Math.floor(Math.random()*items.length)];
adsStatus = item;
break;

default:
adsStatus = 'on';
}


if(adsStatus != 'off'&&document.getElementById(idAds) != null){

let ads = [];
var adsPrint = '';


//ads = JSON.parse(adsJson);

//if (typeof linksListJsonVar != 'undefined') { ads = ads.concat(linksListJsonVar); }
if (typeof adsJsonVar != 'undefined') { ads= ads.concat(adsJsonVar); }


//ads = JSON.parse(adsJson);


if(ads != null&&ads != ''){
const random = Math.floor(Math.random() * ads.length);
//console.log(ads[random]['text']);
adsText = ads[random]['text']; if(adsText == null) { adsText = ''; }
adsURL = ads[random]['url'];	if(adsURL == null){ adsURL = ''; }


// privacy
if(adsText.search("src=") != -1&&confDataCollection != 'on'){ adsText = ''; }
if(adsText.search("src=") != -1){
adsPrint = '<div class="adsHeader"><a class="brand" href="/ads.'+confExt+'"><del>ads</del>, links</a></div><div class="adsBody"><br />'+adsText+' <br /><a class="brand" target="blank" href="'+adsURL+'">'+adsURL+'</a></div>';
}else{
adsPrint = '<div class="adsHeader"><a class="brand" href="/ads.'+confExt+'"><del>ads</del>, links</a></div><div class="adsBody"><br />'+adsText+' <a class="brand" target="blank" href="'+adsURL+'">'+adsURL+'</a></div>';
}


// print ads aaaaaaaaaaaaaaaaaaaaaaaaaaa end
if(adsText != ''&&adsText.search("src=") == -1){
document.getElementById(idAds).innerHTML = '<div class="center"><div class="post light border3 ads" style="text-align: left;">'+adsPrint+'</div></div>';
}else if(adsText != ''){
document.getElementById(idAds).innerHTML = '<div class="center"><div class="light border3 ads" style="text-align: left; display: inline-block; padding: 7px;  max-width: 100%;">'+adsPrint+'</div></div>';
}



if(comAds == 'all'){

adsPrint = '';
ads.forEach((item, index) => {

// hide, privacy
if(ads[index]['text'].search("src=") != -1&&confDataCollection != 'on'){
ads[index]['text'] = `<span class="op" title=""><a class="brand" href="/privacy.${confExt}">hidden (privacy), need allow cookie</a></span>`;
}

adsPrint  += '<div class="post2 border4List">'+ads[index]['text']+' <a class="brand" target="blank" href="'+ads[index]['url']+'">'+ads[index]['url']+'</a></div>';
 });


/*adsPrint  += `<br><br><div class="post2 brand  border4List"><a class="brand" target="blank" href="/links-list.${confExt}"><span class="green">Links List (add your link!) </span><span class="blue">/links-list.${confExt}</span></a></div>`;*/



document.getElementById(idAds).innerHTML = '<div class="center"><div class="post2 border3 light">'+adsPrint+'</div></div>';
}




}

}


}




// v.1.1.2
// start Cookie Consent Popups
// if not selected: popup

if(confDataCollection == 'not selected'){
if(document.getElementById("cookiePopup") != null){

mainPrintMsg('cookiePopup', `

<style>
#cookiePopup{
position: fixed;
bottom: 20px;
left: 0;
right: 0;
display: none;
z-index: 2;
}

#cookiePopup .button { font-size: 100%; min-width: 50px; }
.cookieBtnYes { border-color: var(--green); }
</style>

<div class="wrapperL">
<div class="wrapperL cookiePopup post bg3 border margin tCenter shadow">
<p><b>Allow Cookies for third parties?</b></p>
This is necessary to improve the site.
(for relevant Ads, Statistics)
<p>
<button class="button light3 border cookieBtnYes" onclick="cookiePopup('on')">Yes</button>
<button class="button light3 border" onclick="cookiePopup('off')">No</button>
</p>
</div>
</div>

`);

document.getElementById("cookiePopup").style.display = "block";
}
}

function cookiePopup(option){
localStorage.setItem('confDataCollection', option);
if(document.getElementById("cookiePopup") != null){
document.getElementById("cookiePopup").style.display = "none";
mainPrintMsg('fPrivacy', `<a href="/privacy.${confExt}">cookies: ${option}</a>`); 
}
}
// end 



