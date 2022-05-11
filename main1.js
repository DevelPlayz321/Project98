var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

 function convertToText() {

 	document.getElementById("textbox").innerHTML = "";
 	recognition.start();
 }
 recognition.onresult = function(event) { console.log(event);
 	var Content = event.results[0][0].transcript;
 	document.getElementById("textbox").innerHTML = Content;
 	console.log(Content);
 	speak();
 }


 	function speak()
 	{ var synth = window.speechSynthesis;
    Webcam.attach(camera);
 		speak_data = "taking your selfie in 5 seconds"
 		var utterThis = new SpeechSynthesisUtterance(speak_data);
 		synth.speak(utterThis);
    setTimeout(function() {
      img_id = "selfie1";
      take_snapshot();
      speak_data = "taking your next selfie in 10 seconds";
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
    },5000);

    setTimeout(function() {
      img_id = "selfie2";
      take_snapshot();
      speak_data = "taking your next selfie in 15 seconds";
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
    },10000);

    setTimeout(function() {
      img_id = "selfie3";
      take_snapshot()
    },15000);
  }

  camera = document.getElementById("camera")
  Webcam.set({
    width : 500,
    height : 400,
    img_format : "png",
    png_quality : 90
  });

  function take_snapshot() {
    Webcam.snap( function(data_uri) {

      if (img_id == "selfie1") {
        document.getElementById("result_1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>'
      }
      if (img_id == "selfie2") {
        document.getElementById("result_2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>'
      }
      if (img_id == "selfie3") {
        document.getElementById("result_3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>'
      }
    });
  }

  setTimeout(function() {
    img_id = "selfie1";
    take_snapshot();
    speak_data = "taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  },5000);

  setTimeout(function() {
    img_id = "selfie2";
    take_snapshot();
    speak_data = "taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  },10000);

  setTimeout(function() {
    img_id = "selfie3";
    take_snapshot();
    speak_data = "taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  },15000);
