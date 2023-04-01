// v.1.0.0


// v.1.0.0



var json = musJsonVar;

//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}




//alert(json[getRandomInt(json.length)]);
//alert(json.length);

var id = getRandomInt(json.length);

var randomTitle = json[id]['text'];
var randomURL = json[id]['url'];

var tmp = document.createElement ('a');
tmp.href   = randomURL;
var host = tmp.hostname;


document.getElementById("lPrint").innerHTML = `
<div class="center2">
<div class="wrapper2">

<!-- post -->
<div class="post2 bgList brand border3List" id="`+id+`">
<span class="pre">`+highlightText2(randomTitle+` `+randomURL)+`</span><br>
<a class="tag padding light border margin" onclick="reload()"  style="display: block; text-align: center;" href="#">reload</a>
</div>
<!-- // post -->

</div>
</div>
`;

var multiEmbedStatus = 'off';



// from blog
// 2
// highlight Text2 with autoplay when pressed id (date)
function highlightText2(text, hrefInOut){
//text = decodeURIComponent(text); // error sometimes

// if code


text = text.replace(/</g, "&lt;");
text = text.replace(/>/g, "&gt;");

let text2 = '';
let embed = '';
let embed2 = '';

let w = '100%';
let h = '190px'; 

text = [...text];
let forSplit = [`
`, " "
]
text.forEach((item) => {
forSplit.forEach((item2) => { // foreach
if(item == item2){
item = item+symbolForSplit;
}
});
text2 += item;
});

//return text = text.toString();
//return text = text.join("");

//return text = text2;
//text = [...text];

text = '';
const myArray = text2.split(symbolForSplit);
myArray.forEach((item) => {
//text += item.hostname;
//if(item.search("http") != -1){ 
/*if(item[0]+item[1]+item[2]+item[3] == 'http'&&item.search("http|://") != -1){ 
var host = new URL(item).hostname; // stop working when error
}
*/

let checkEmbedEmpty = item.split('/');
//if(item.split('/').length > 4){
if(checkEmbedEmpty[3]){
var host = item.split('/');
if(host[3] != undefined){
switch (host[2]) {


case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
embed = `<iframe src="https://tunein.com/embed/player/${play}/?autoplay=true&background=${confThemeEmbed}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`;
break;

//default:



}
}
}

/*
if(item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1){ 
embed = `<a href="${item}"><img class="border3" src="${item}" width=""></a>`
}*/





if(item.search("tunein.com") == -1&&item.slice(0, 4) == 'http'&&item.search("http|://") != -1) {
embed2 = `<iframe width="${w}" height="600" src="${item}"></iframe>`;
}



//if(item.search("http") != -1){
if(item.slice(0, 4) == 'http'&&item.search("http|://") != -1){
item = `<a target="_blank" href="${item}">${item}</a>`;
}


text += item;



// multi embed
if(multiEmbedStatus == 'on'&&embedStatus != 'off'){
text += embed+embed2;
embed = '';
embed2 = '';
}

// multi embed end


});

// single embed
if(multiEmbedStatus != 'on'){ text += embed+embed2; }

return text;
}



