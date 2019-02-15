var playBool = true;
var drops = false;
var _arraryConfig = {
  // config for each arrary
  arrary1: [1, 10, 0, 220, 0, false, false, 0],
  arrary2: [1, 10, 0, 720, 0, false, false, 0],
  arrary3: [1, 10, 0, 1520, 0, false, false, 0]
};
/*
  arrary: [rotationEarth, rotationSun, changingScale, 
          colorPicker, null(now), reWidth, 
          rainMode, rainModeCounter(1 or 0)],

*/
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
    $(".frontPage").fadeOut();
    scriptMidi.play();
  });
  $("#drops").mouseup(function() {
    if (drops == false) {
      drops = true;
      $("#drops").attr("src", "assets/dropBlack.png");
    } else {
      drops = false;
      $("#drops").attr("src", "assets/dropWhite.png");
    }
  });
});

var scriptMidi = new Audio("assets/bgm1.mp3");
document.addEventListener("keydown", playbutton);
