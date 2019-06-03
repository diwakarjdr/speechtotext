var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

var r=document.getElementById('result');
function startlistening(){
    if('webkitSpeechRecognition' in window){
       var speechRecogniser=new SpeechRecognition();
       speechRecogniser.continuous=true;
       speechRecogniser.interimResults=true;
       speechRecogniser.maxAlternatives = 1;
       var speechRecognitionList = new SpeechGrammarList();
       speechRecognitionList.addFromString(grammar, 1);
       speechRecogniser.grammars = speechRecognitionList;
       speechRecogniser.lang='en-US';
       var finalTranscripts='';
       /*speechRecogniser.onresult=function(event)
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
       };*/
       speechRecogniser.onaudiostart = function() {
           console.log("Audio started");
       }

       speechRecogniser.onsoundstart = function() {
          console.log("Sound started");
       }

       speechRecogniser.onspeechstart = function() {
           console.log("Speech started");
       }

       speechRecogniser.onstart = function() {
          console.log("Speech recognition started");
       }

       speechRecogniser.onspeechend = function() {
        speechRecogniser.stop();
      }
      
      speechRecogniser.onnomatch = function(event) {
        console.log("I didn't recognise that color.");
      }
       

    speechRecogniser.onerror=function(event){
        r.innerHTML.value='error';
    };
    speechRecogniser.start();
}
else{
    r.innerHTML='browser not supported';

}

}
//document.getElementById('button').addEventListener("click",startlistening);
