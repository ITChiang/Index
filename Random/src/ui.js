document.addEventListener("keydown", playbutton);
var playBool = true;
var _arraryConfig = {
  // config for each arrary
  arrary1: [1, 10, 0, 220, 0],
  arrary2: [1, 10, 0, 720, 0],
  arrary3: [1, 10, 0, 1520, 0]
};

function playbutton(e) {
  var key = e.keyCode;
  if (key == 32 && playBool == true) {
    two.pause();
    scriptMidi.pause();
    playBool = false;
  } else if (key == 32 && playBool == false) {
    playBool = true;
    two.play();
    scriptMidi.play();
  }
}

$(document).ready(function() {
  $("#playButton").mouseup(function() {
    $(".frontPage").css("z-index", "-5");
    $(".frontPage").css("opacity", "0");
    scriptMidi.play();
  });
});

var scriptMidi = new Audio("assets/bgm1.mp3");
