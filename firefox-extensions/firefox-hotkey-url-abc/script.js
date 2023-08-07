// v.1.0.3
// firefox



//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) {
console.log(`Error: ${error}`);

}


function onGot(result) {
// if not set key
let getData = [/*
{"key":"F1","url":"https://google.com/"},
{"key":"F2","url":"https://bing.com/"},
{"key":"F3","url":"https://x.com/"},
{"key":"F4","url":"https://reddit.com"}*/
];

if(result.hotkey) {

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
getData =  JSON.parse(result.hotkey);
}

hotkeyRedirect(getData);
}





function hotkeyRedirect(getData){








let hotkeyKeyHistoryArr = [];
let hotkeyKeyHistoryArr2 = 'ljaksldfkj';
let hotkeyKeyHistoryArr3 = 'asdljfkaslkfj';

document.addEventListener("keydown", function(event) {

// disabe hotkey if input
//https://stackoverflow.com/questions/15637192/js-how-to-detect-whether-cursor-is-in-textfield
  if( event.target.nodeName == "INPUT" || event.target.nodeName == "TEXTAREA" ) return;
  if( event.target.isContentEditable ) return;
// else resum below

//https://stackoverflow.com/questions/5163785/how-do-i-get-the-last-character-of-a-string
hotkeyKeyHistoryArr.push(event.key);

//https://stackoverflow.com/questions/23238363/code-to-get-last-2-items-from-an-array
hotkeyKeyHistoryArr = hotkeyKeyHistoryArr.slice(-4);
hotkeyKeyHistoryArr2 = hotkeyKeyHistoryArr.slice(-2);
hotkeyKeyHistoryArr2 = hotkeyKeyHistoryArr2.join('')
hotkeyKeyHistoryArr3 = hotkeyKeyHistoryArr.slice(-3), 
hotkeyKeyHistoryArr3 = hotkeyKeyHistoryArr3.join('')

getData.forEach((item, index) => {



let keyFromSetting = getData[index].key;
let urlFromSetting =  getData[index].url;

if(keyFromSetting[0] != '+'){ keyFromSetting = keyFromSetting.replaceAll('+',''); }




if(event.key == keyFromSetting||hotkeyKeyHistoryArr2 == keyFromSetting||hotkeyKeyHistoryArr3 == keyFromSetting||event.keyCode == keyFromSetting){

event.returnValue = false;
event.preventDefault();

let hotkeySelection = '';
if(window.getSelection().toString().length > 0) {
// Get selected text and encode it
hotkeySelection = encodeURIComponent(window.getSelection().toString()).replace(/[!'()*]/g, escape);
}

urlFromSetting = urlFromSetting.replaceAll('%selection', hotkeySelection);
urlFromSetting = urlFromSetting.replaceAll('%title', encodeURIComponent(document.title));
urlFromSetting = urlFromSetting.replaceAll('%url', document.URL);

window.location.href = urlFromSetting; 
}

})

})



};





const getting = browser.storage.sync.get("hotkey");
//const getting = browser.storage.local.get("rUrl");
getting.then(onGot, onError);


