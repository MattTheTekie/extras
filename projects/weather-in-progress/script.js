// v.1.0.0

var result = [];

var apiWeather = "https://api.open-meteo.com/v1/forecast?latitude=[latitude]&longitude=[longitude]&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

var apiLocation = "http://ip-api.com/json/?fields=61439";

function printWeather(data){
console.log(data);
document.getElementById("result").innerHTML = result[0];
}

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function weather(apiWeather2){
async function logJSONData() {
  const response = await fetch(apiWeather2);
  const jsonData = await response.json();

if(logJSONData != ""){ result[0] += jsonData['current_weather']['temperature']+' '+jsonData['current_weather']['windspeed']; printWeather(jsonData); }
}
logJSONData();

//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

}

async function getLocation() {
const response = await fetch(apiLocation);
const jsonData = await response.json();

console.log(jsonData);
if(jsonData != ''){
result[0] = jsonData['city']+jsonData['country'];

apiWeather = apiWeather.replaceAll('[latitude]', jsonData['lat']);
apiWeather = apiWeather.replaceAll('[longitude]', jsonData['lon']);
console.log(apiWeather);

weather(apiWeather);
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
}

getLocation();

