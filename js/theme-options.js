/* v.3.1.3 */

var result = '';
themeListOption.forEach((element) => {
if(element == ''){ result += '<br />'; }
if(element == 'light'){ result += '<br />'; }
if(element == 'dark'){ result += '<br />'; }
if(element == 'o-blue'){ result += '<br />'; }
if(element == 'od-blue'){ result += '<br />'; }
if(element == 'rand-l'){ result += '<br /><br />'; }
if(element == 'auto'){ result += '<br /><br />'; }

if(element == theme){
result += '<button id="'+element+'" class="m tag light4 margin padding" style="font-size: 100%; padding: 6px;">'+element+'</button>';
}else{
result += '<button id="'+element+'" class="m tag light margin padding" style="font-size: 100%; padding: 6px;">'+element+'</button>';
}

});
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









