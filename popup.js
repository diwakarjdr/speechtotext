var recogniser=new webkitSpeechRecognition();
window.onload=function(){
var startbtn=document.getElementById('start');
var stopbtn=document.getElementById('stop');
var input=document.getElementById('result');
recogniser.continuous=true;
startbtn.onclick=function startlistening(){
    recogniser.start();
    
}
recogniser.onresult=function(event){
   input.innerHTML=event.results[event.result_index][0].transcript;
}
stopbtn.onclick=function stoplistening(){
   recogniser.stop();
}
}
chrome.runtime.onInstalled.addListener((details) => {
    
    chrome.tabs.create({
        url: chrome.extension.getURL("welcome.html"),
        active: true
    })
})
