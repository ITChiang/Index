var functionLock = false;
var cssStyle = document.getElementById("cssStyle");
var audioName = "";
var spacebarLocker = true;
$(document).ready(function() {
  // Animation of Pickin' the midi file
  reStart();
  if (functionLock == false) {
    $("#pickScript1").mouseup(function() {
      reStart();
      spacebarLocker = true;
      menuDisplay();
      colorStyle = 1;
      readMidiFile("Sample1"); // 要改
      sampleName = "Sample1"; // 要改
      audioName = "Sample1";
      pickAudio("Sample1");
      $("body").css("background", "#e0d9db");
      $("#lightsaber").css("opacity", "0");
      document.getElementById("title").innerHTML = "Sample 1";
    });
    $("#pickScript2").mouseup(function() {
      reStart();
      spacebarLocker = true;
      menuDisplay();
      colorStyle = 1;
      readMidiFile("Sample2"); // 要改
      sampleName = "Sample2"; // 要改
      audioName = "Sample2";
      pickAudio("Sample2");
      $("body").css("background", "#e0d9db");
      $("#lightsaber").css("opacity", "0");

      document.getElementById("title").innerHTML = "Sample 2";
    });
    $("#pickScript3").mouseup(function() {
      reStart();
      spacebarLocker = true;
      menuDisplay();
      readMidiFile("Sample3"); // 要改
      sampleName = "Sample3"; // 要改
      audioName = "Sample3";
      pickAudio("Sample3");
      colorStyle = 2;
      $("body").css("background", "black");
      $("#lightsaber").css("opacity", "1");
      $("#title ").css("color", "white");
      document.getElementById("title").innerHTML = "Star Wars - Duel of Fates";
      var obj = document.createElement("audio");
      obj.src = "src/assets/Lightsaber Sound Effect HQ - HD.mp3";
      obj.play();
    });
    $("#pickScript4").mouseup(function() {
      reStart();
      spacebarLocker = true;
      menuDisplay();
      colorStyle = 1;
      readMidiFile("Sample4"); // 要改
      sampleName = "Sample4"; // 要改
      audioName = "Sample4";
      pickAudio("Sample4");
      $("body").css("background", "#e0d9db");
      $("#lightsaber").css("opacity", "0");
      document.getElementById("title").innerHTML = "Sample 4";
    });
  }
});
// ------pick instrument------
$(document).ready(function() {
  $("#pickScript1_2").mouseup(function() {
    reStart();
    readMidiFile(sampleName + "/" + sampleName + "_1");
    pickAudio(audioName + "/" + audioName + "_1");
    setTimeout("playAudio()", 3800);
    $("#playIcon").attr("src", "src/assets/pauseIcon.png");
  });
  $("#pickScript2_2").mouseup(function() {
    reStart();
    readMidiFile(sampleName + "/" + sampleName + "_2");
    pickAudio(audioName + "/" + audioName + "_2");

    $("#playIcon").attr("src", "src/assets/pauseIcon.png");
  });
  $("#pickScript3_2").mouseup(function() {
    reStart();
    readMidiFile(sampleName + "/" + sampleName + "_3");
    pickAudio(audioName + "/" + audioName + "_3");

    $("#playIcon").attr("src", "src/assets/pauseIcon.png");
  });
  $("#pickScript4_2").mouseup(function() {
    reStart();
    readMidiFile(sampleName + "/" + sampleName + "_4");
    pickAudio(audioName + "/" + audioName + "_4");

    $("#playIcon").attr("src", "src/assets/pauseIcon.png");
  });
});

$(document).ready(function() {
  $(window).resize(function() {
    // Resize the UI
    player.cancelQueue(audioContext);
    two.pause();
    playBool = false;
    $("#playIcon").attr("src", "src/assets/playIcon.png");
    two.remove(finishLineArray[0]);
    finishLineArray.shift();
    for (i = 0; i < 5; i++) {
      two.remove(uiLineArray[i]);
    }
    for (j = 0; j < 5; j++) {
      uiLineArray.shift();
    }
    drawingLines();
  });
});

function playbutton(e) {
  // Playing button and icon
  var key = e.keyCode;
  if (key == 32 && playBool == true && spacebarLocker == false) {
    // keycode of spacebar
    playBool = false;
    $("#playIcon").attr("src", "src/assets/playIcon.png");
    scriptMidi.pause();

    two.pause();
  } else if (key == 32 && playBool == false && spacebarLocker == false) {
    playBool = true;
    $("#playIcon").attr("src", "src/assets/pauseIcon.png");
    scriptMidi.play();
    two.play();
  }
}

$(document).ready(function() {
  $("#playIcon").mouseup(function() {
    if (playBool == true && spacebarLocker == false) {
      // keycode of spacebar
      playBool = false;
      $("#playIcon").attr("src", "src/assets/playIcon.png");
      scriptMidi.pause();
      two.pause();
    } else if (playBool == false && spacebarLocker == false) {
      playBool = true;
      $("#playIcon").attr("src", "src/assets/pauseIcon.png");
      scriptMidi.play();
      two.play();
    }
  });
});

//--------Restart Function------
function reStart() {
  two.clear();
  two.pause();
  instrumentColorReset();
  recrA.length = 0;
  finishLineArray.length = 0;
  midiArray.length = 0;
  uiLineArray.length = 0;
  midiInstrument.length = 0;
  midiContainer.length = 0;
  midiEachPos.length = 0;
  playBool = false;
  frame = 0;
  drawingLines();
  console.log("Re-start");
  scriptMidi.pause();
}
function instrumentColor(instrumentName) {
  if (instrumentName == "Piano") {
    $("#pianoIcon").attr("src", "src/assets/icon/icons8-piano-100.png");
  }
  if (instrumentName == "Flute") {
    $("#fluteIcon").attr("src", "src/assets/icon/icons8-flute-100.png");
  }
  if (instrumentName == "A-Guitar") {
    $("#a-guitarIcon").attr("src", "src/assets/icon/icons8-guitar-100.png");
  }
  if (instrumentName == "E-Guitar") {
    $("#e-guitarIcon").attr("src", "src/assets/icon/icons8-rock-music-100.png");
  }
  if (instrumentName == "Trumpet") {
    $("#saxphoneIcon").attr("src", "src/assets/icon/icons8-saxophone-100.png");
  }
  if (instrumentName == "Saxphone") {
    $("#trumpetIcon").attr(
      "src",
      "src/assets/icon/icons8-herald-trumpet-100.png"
    );
  }
  if (instrumentName == "Violin") {
    $("#violinIcon").attr("src", "src/assets/icon/icons8-violin-100.png");
  }
  if (instrumentName == "Cello") {
    $("#celloIcon").attr("src", "src/assets/icon/icons8-cello-100.png");
  }
  if (instrumentName == "Bass") {
    $("#bassIcon").attr(
      "src",
      "src/assets/icon/icons8-rock-music-filled-100.png"
    );
  }
}
function instrumentColorReset() {
  $("#pianoIcon").attr("src", "src/assets/icon/icons8-piano-100 (1).png");
  $("#fluteIcon").attr("src", "src/assets/icon/icons8-flute-100 (1).png");
  $("#a-guitarIcon").attr("src", "src/assets/icon/icons8-guitar-100 (1).png");
  $("#e-guitarIcon").attr(
    "src",
    "src/assets/icon/icons8-rock-music-100 (1).png"
  );
  $("#saxphoneIcon").attr(
    "src",
    "src/assets/icon/icons8-saxophone-100 (1).png"
  );
  $("#trumpetIcon").attr(
    "src",
    "src/assets/icon/icons8-herald-trumpet-100 (1).png"
  );
  $("#violinIcon").attr("src", "src/assets/icon/icons8-violin-100 (1).png");
  $("#celloIcon").attr("src", "src/assets/icon/icons8-cello-100 (1).png");
  $("#bassIcon").attr(
    "src",
    "src/assets/icon/icons8-rock-music-filled-100 (1).png"
  );
}

var initMeun = false;

function menuDisplay() {
  $("#menu_opener_id").prop("checked", false);
  $(".instrument_pic ").css("opacity", "1");
  $(".play_pic ").css("opacity", "1");
  functionLock = true;
}
var scriptMidi = new Audio();
function pickAudio(e) {
  scriptMidi = new Audio("audio/" + e + ".mp3");
}
function playAudio() {
  console.debug(scriptMidi);
  scriptMidi.play();
}
$(document).ready(function() {
  $("#playButton").mouseup(function() {
    $(".frontPage").css("z-index", "-5");
    $(".instrument_pic ").css("opacity", "0");
    $(".frontPage").css("opacity", "0");
  });
});

document.addEventListener("keydown", playbutton);
