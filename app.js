var btnTrans = document.querySelector("#click_me");
var txtInput = document.querySelector("#input-txt");
var output = document.querySelector("#output");

var server = "https://api.funtranslations.com/translate/minion.json";

function translationUrl(text) {
    return server + "?" + "text=" + text }

function errorhandler (){
    alert("Server have some issue please try again after sometime")
}

function translate() {
    var usertxt = txtInput.value;
fetch(translationUrl(usertxt))
    .then ( response => response.json() )
    .then (json => {
    var translatedTxt = json.contents.translated;
    output.innerText = translatedTxt;
    speechSynthesis.speak(
    new SpeechSynthesisUtterance(json.contents.translated) );
    } )
    .catch(errorhandler)
};
btnTrans.addEventListener("click", translate) 