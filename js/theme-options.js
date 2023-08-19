/* v.4.0.4 */

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
result += '<div id="'+element+'" class="tehemeListItem light4 margin border3List">'+element+'</div>';
}else{
result += '<div id="'+element+'" class="tehemeListItem light margin border3List">'+element+'</div>';
}

});

result = `





<style>

.tehemeList {
display: grid;
/*grid-template-areas: "a a a a a";*/
grid-template-columns: repeat(auto-fill, minmax(100px, max-content));
grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
/*grid-auto-columns: 1fr;*/
grid-gap: 5px;
width: 100%;
max-width: 450px;
margin: 0 auto;
}

@media(max-width: 90px) { .tehemeList { display: block; width: 100%; }}

.tehemeListItem {
display: inline-block;
justify-content: start;
align-content: center;
text-transform: lowercase;
padding: 5px 15px; margin:0;
cursor: pointer;
border-radius: 5px;
text-wrap: balance;
}

.tehemeList .tehemeListItem { display: flex; }


</style>

<div class="block small tCenter">
<div class="tehemeList">
${result}
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









