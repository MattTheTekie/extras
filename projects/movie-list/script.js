// v.1.0.1
// parse IMDB WATCHLIST.csv

parseList("result", "/data2/WATCHLIST.csv");


function parseList(printId, fileCsv){
var print = ``;


const response = fetch(fileCsv)
.then(response => response.text())
.catch(err => console.log(err))
//https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/
.then(text => {
//Use CSV text
text = text.split(`
`);

text = text.slice(1);
text.pop();


var movieList = [];

text.forEach(myFunction);
function myFunction(item, key) {
item = item.split(`,`);
//print += `<a href="${item[6]}">${item[5]} (${item[10]})<br>`;
//movieList = `<a href="${item[6]}">${item[5]} (${item[10]})<br>`;

//get arr for sort
movieList.push({
title: `${item[5]}`,
data: `<a href="${item[6]}">${item[5]} (${item[10]})<br>`
});

}

//https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
// sort
function compare( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}



var randomMovie = Math.floor(Math.random() * movieList.length);

movieList.sort( compare );
//console.log(movieList);

//print data
movieList.forEach(myFunction2);
function myFunction2(item, key) {
print += item['data'];
}

randomMovie = movieList[randomMovie]['data'];
print = `
<span class="op">random movie:</span><br>
${randomMovie}<br>
<a class="op" href="#" onclick="reload()">reload</a>
<hr>
<span class="op">list:</span><br>
${print}
`;


echo(printId, print);

});

function echo(id, text){
document.getElementById(id).innerHTML = `
<div class="wrapperL">${text}</div>
`;
}

}
