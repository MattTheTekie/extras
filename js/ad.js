/* v.1.2.7 */
// print ads from json var list: fuAds('', 'ads2 - id where print', '');

function fuAds(none, idAds, comAds){

// none - Reserved variable









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

