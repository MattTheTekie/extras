// v.1.2.7


function randomURL(printId, jsonVar){

//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}




var url = jsonVar[getRandomInt(jsonVar.length)]['url'];

document.getElementById("result").innerHTML = `

<div class="wrapper">
<div class="block tCenter">

<span class="bold orange">${url}</span><br>
<br><br><span class="green">redirect after 3s.</span>

</div>
</div>

`; 

const RSS_URL = "https://www.reddit.com/r/technology/.rss";
//https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/
fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <article>
          <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
          <h2>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h2>
        </article>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });

/*
setTimeout(function() {
window.location.href = url;
}, 3000);
*/

}
