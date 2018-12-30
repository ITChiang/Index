$(document).ready(function() {
  $("#pinkTriangle").mouseover(function() {
    $("#bottomHint").fadeIn("fast");
    $("#pinkTriangle").css("opacity", "0.1");
  });
  $("#pinkTriangle").mouseout(function() {
    $("#bottomHint").fadeOut("fast");
    $("#pinkTriangle").css("opacity", "0.5");
  });
});
$(document).ready(function() {
  $("#testLabel").mouseover(function() {
    $(".custom-file-upload").css("bottom", "7%");
    $(".custom-file-upload").css("right", "5vw");
  });
  $("#testLabel").mouseout(function() {
    $("link_general").css("bottom", "8%");
  });
});

$(document).ready(function() {
  // Pickin' the midi file
  $("#pickScript1").mousedown(function() {
    readMidiFile("download1.mid");
    $(".link_general ").css("opacity", "0");
    $(".menu_opener_label ").css("opacity", "0");
    $("#arrowIcon ").css("opacity", "0");
    $("#intro ").css("opacity", "0");
  });
  $("#pickScript2").mousedown(function() {
    readMidiFile("download2.mid");
    $(".link_general ").css("opacity", "0");
    $(".menu_opener_label ").css("opacity", "0");
    $("#arrowIcon ").css("opacity", "0");
    $("#intro ").css("opacity", "0");
  });
  $("#pickScript3").mousedown(function() {
    readMidiFile("download5.mid");
    $(".link_general ").css("opacity", "0");
    $(".menu_opener_label ").css("opacity", "0");
    $("#arrowIcon ").css("opacity", "0");
    $("#intro ").css("opacity", "0");
    var linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "src/styleS.css";
    document.head.append(linkElement);
    colorStyle = 2;
    document.getElementById("title").innerHTML = "Star Wars - Duel of Fates";
  });
  $("#pickScript4").mousedown(function() {
    readMidiFile("download3.mid");
    $(".link_general ").css("opacity", "0");
    $(".menu_opener_label ").css("opacity", "0");
    $("#arrowIcon ").css("opacity", "0");
    $("#intro ").css("opacity", "0");
  });
});
$(document).ready(function() {
  $(window).resize(function() {
    // resize the ui
    two.pause();
    playBool = false;
    $("#playIcon").attr("src", "src/component/playIcon.png");
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
  var key = e.keyCode;
  if (key == 32 && playBool == true) {
    // keycode of spacebar
    playBool = false;
    $("#playIcon").attr("src", "src/component/playIcon.png");
    two.pause();
  } else if (key == 32 && playBool == false) {
    playBool = true;
    $("#playIcon").attr("src", "src/component/pauseIcon.png");
    two.play();
  }
}

document.addEventListener("keydown", playbutton);
