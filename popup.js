var r=document.getElementById('result');
function startlistening(){
    if('webkitSpeechRecognition' in window){
       var speechRecogniser=new webkitSpeechRecognition();
       speechRecogniser.continuous=true;
       speechRecogniser.interimResults=true;
       speechRecogniser.lang='en-IN';
       speechRecogniser.start();
       var finalTranscripts='';
       speechRecogniser.onresult=function(event)
       {  var interimTranscript='';
           for(var i=event.resultIndex;i<event.results.length;i++)
           {
               var transcript=event.results[i][0].transcript;
               transcript.replace("\n","<br>");
               if(event.results[i].isFinal){
                   finalTranscripts+=transcript;
               }else{
                   interimTranscript+=transcript;
               }
           }
           r.innerHTML=finalTranscripts+ '<span style = "color:#999">'+ interimTranscript + '</span>';
       };
       

    speechRecogniser.onerror=function(event){
        r.innerHTML.value='error';
    };
}
else{
    r.innerHTML='browser not supported';

}

}
//document.getElementById('button').addEventListener("click",startlistening);
