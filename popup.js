var r=document.getElementById('result');
function start(){
    
       var speechRecogniser=new webkitSpeechRecognition;
       speechRecogniser.continuous=true;
       speechRecogniser.lang='en-IN';
       speechRecogniser.start();
       var finalTranscripts='';
       speechRecogniser.onresult=function(event)
       {
           for(var i=0;i<event.results.length;i++)
           {
               var transcript=event.results[i][0].transcript;
               finalTranscripts+=transcript;
               r.innerHTML=finalTranscripts;
           }
       };
       

    speechRecogniser.onerror=function(event){
        r.innerHTML='error';
    };

}
