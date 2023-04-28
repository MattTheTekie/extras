// v.1.0.0

var result = [];

var apiWeather = "https://api.open-meteo.com/v1/forecast?latitude=[latitude]&longitude=[longitude]&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

var apiLocation = "https://ipapi.co/json/";

function printWeather(){

result[0] += `

<span class="op padding margin">
API:<br>
<a href="https://open-meteo.com/">open-meteo.com</a>,
<a href="https://ipapi.co/">ipapi.co</a>

`;

document.getElementById("result").innerHTML = result[0];
}

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function weather(apiWeather2){
async function logJSONData() {
  const response = await fetch(apiWeather2);
  const jsonData = await response.json();

if(logJSONData != ""){ result[0] += '<h3>'+jsonData['current_weather']['temperature']+' °C, '+jsonData['current_weather']['windspeed']+' Km/h </h3>'; printWeather(jsonData); }
}
logJSONData();

//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

}

/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
const jsonData = this.responseText;

//console.log(jsonData);
if(jsonData != ''){
result[0] = `
<h1 class="op">${jsonData['city']},
${jsonData['country']}</h1>
`;

apiWeather = apiWeather.replaceAll('[latitude]', jsonData['lat']);
apiWeather = apiWeather.replaceAll('[longitude]', jsonData['lon']);
//console.log(apiWeather);

weather(apiWeather);
}
    }
};
xmlhttp.open("GET", apiLocation, true);
xmlhttp.send();*/


async function getLocation() {
const response = await fetch(apiLocation);
const jsonData = await response.json();

console.log(jsonData);
if(jsonData != ''){
result[0] = `
<h1 class="op">${jsonData['city']},
${jsonData['country']}</h1>
`;

apiWeather = apiWeather.replaceAll('[latitude]', jsonData['latitude']);
apiWeather = apiWeather.replaceAll('[longitude]', jsonData['longitude']);
//console.log(apiWeather);

weather(apiWeather);
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
}


getLocation();

