/* v.4.0.2 */

var result = '';



themeListOption.forEach((element) => {
if(element == ''){ result += ''; }
//if(element == 'light'){ result += '<hr>'; }
if(element == 'light'){ result += '<div><p>Light:<p>'; }
if(element == 'dark'){ result += '</div><div><p>Dark:<p>'; }
if(element == 'o-blue'){ result += '</div><div><p>Other light:<p>'; }
if(element == 'od-blue'){ result += '</div><div><p>Other dark:<p>'; }
if(element == 'rand-l'){ result += '</div></div><p>Random mode:<p>'; }
if(element == 'auto'){ result += '<p>Auto mode:<p>'; }

if(element == theme){
result += '<span id="'+element+'" class="tehemeListItem light4 margin padding border3List" style="font-size: 100%; padding: 6px;">'+element+'</span>';
}else{
result += '<span id="'+element+'" class="tehemeListItem light margin padding border3List" style="font-size: 100%; padding: 6px;">'+element+'</span>';
}

});

result = `





<style>

.tehemeList {
display: grid;
/*grid-template-areas: "a a a a a";*/
grid-template-columns: repeat(auto-fill, minmax(100px, max-content));
/*grid-auto-columns: 1fr;*/
grid-gap: 5px;

grid-gap: 5px;

margin: 0 auto;
justify-content: center;

}

@media(max-width: 90px) { .tehemeList { display: block; width: 100%; }}

.tehemeListItem {
display: inline-block;
justify-content: center;
align-content: center;
text-transform: lowercase;
padding: 10px 4px; margin:0;
cursor: pointer;
border-radius: 5px;
}

.tehemeList .tehemeListItem { display: flex; }

.tehemeListWrappaer { display: inline-block; }
</style>

<div class="block tCenter small">
<div class="tehemeListWrappaer">
<div class="tehemeList">
${result}
</div>
</div>
</div>

`;

document.getElementById("themeOption").innerHTML = result;

//document.getElementById("themeselect").innerHTML = theme;
themeListOption.forEach(myFunction);

function light(e){
themeListOption.forEach((element) => {
if(e == element){
//document.getElementById(e).innerHTML = 'test';
var element = document.getElementById(e);
element.classList.add("light4");
}else{
var el = document.getElementById(element);
el.classList.remove("light4");
//document.getElementById(element).innerHTML = element;
}
});
}

function myFunction(item, index) {
document.getElementById(item).addEventListener("click", function() {
//document.getElementById("themeselect").innerHTML = item;
//document.getElementById("fTheme").innerHTML = 'mode: '+item;
document.getElementById("fTheme").innerHTML =  item;

setTheme(item);
light(item);
localStorage.setItem('themeMain', item);
});

}


document.getElementById("confTheme").innerHTML =  'device theme: <b>'+confDeviceTheme+' </b>';









