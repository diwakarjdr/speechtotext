var recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) {
        document.getElementById("tex").innerHTML.value="yeah";
      if (event.results.length > 0) {
        document.getElementById("tex").innerHTML.value = event.results[0][0].transcript;
      }
    }
