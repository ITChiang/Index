var active = 0;
var tempo = 4;
var barLenght = 16;
var ispaused = true;
var loopindex = 0;
var nowbpm = 1000;
var cssStyle = 1;

var instruments = {
  openhat: new Howl({
    src: ["./component/Audio/sb1.mp3"],
    volume: 0.5
  }),
  hihat: new Howl({
    src: ["./component/Audio/sb2.mp3"],
    volume: 0.5
  }),
  kick: new Howl({
    src: ["./component/Audio/sh.mp3"],
    volume: 0.3
  }),
  snare: new Howl({
    src: ["./component/Audio/sh2.mp3"],
    volume: 0.3
  }),
  cowbell: new Howl({
    src: ["./component/Audio/snare.mp3"],
    volume: 0.5
  }),
  crash: new Howl({
    src: ["./component/Audio/stab01.mp3"],
    volume: 0.5
  }),
  hitom: new Howl({
    src: ["./component/Audio/stab02.mp3"],
    volume: 0.5
  }),
  lowtom: new Howl({
    src: ["./component/Audio/stab03.mp3"],
    volume: 0.5
  })
};

// In JS, events are the "key" (no pun intended)
$("#tracker td").on({
  // On clicking, add or remove a note
  click: function() {
    var note = $(this).find("div");

    if (note.length) {
      note.remove(); // Remove ♪
    } else {
      $(this).append($("<div>")); // Add ♪
    }
  },

  // Play some tune when the moment comes
  isActive: function() {
    if ($(this).has("div").length) {
      // Does the bar has a note in ?
      // Play note ♪
      instruments[$(this).data("instrument")].play();

      // Shines header like a diamond ❖
      $("#header ." + $(this).data("instrument")).addClass("active");
    } else {
      $("#header ." + $(this).data("instrument")).removeClass("active"); // Calm the beaSt
    }
  }
});

function loopsize(e) {
  // for loop size icon
  // 8 = 55 , 9 = 56 , 10 = 57 , 0 = 48
  var key = e.keyCode;

  if (key == "55") {
    loopindex = 1;
    $("#loopIcon").attr("src", "component/gesture_iconi.png"); // choose the icon for block
  } else if (key == "56") {
    loopindex = 2;
    $("#loopIcon").attr("src", "component/gesture_iconii.png");
  } else if (key == "57") {
    loopindex = 3;
    $("#loopIcon").attr("src", "component/gesture_iconiii.png");
  } else if (key == "48") {
    loopindex = 4;
    $("#loopIcon").attr("src", "component/gesture_iconiiii.png");
  }
}

function loop() {
  $("#tracker td.active").removeClass("active");
  $("#tracker tr")
    .find("td:eq(" + active + ")")
    .addClass("active")
    .trigger("isActive");

  if (loopindex == "1") {
    // loop size ,loopindex = loop each 4blocks
    if (active == 3) {
      active = 0; //back to start
    } else {
      active = (active + 1) % barLenght;
    }
  } else if (loopindex == "2") {
    if (active == 7) {
      active = 0;
    } else {
      active = (active + 1) % barLenght;
    }
  } else if (loopindex == "3") {
    if (active == 11) {
      active = 0;
    } else {
      active = (active + 1) % barLenght;
    }
  } else if (loopindex == "4") {
    if (active == 15) {
      active = 0;
    } else {
      active = (active + 1) % barLenght;
    }
  } else {
    active = (active + 1) % barLenght;
  }
}

function setPaused() {
  ispaused = !ispaused;
}

function pauseloop(e) {
  // spacebar keycode =32
  var key = e.keyCode;
  if (key == "32" && ispaused == false) {
    setPaused();
    clearInterval(timer);
    $("#playIcon").attr("src", "component/play_icon.png");
  } else if (key == "32" && ispaused == true) {
    setPaused();
    timer = setInterval(loop, nowbpm / tempo);
    $("#playIcon").attr("src", "component/pause_icon.png");
  }
}

function bpmsetting(e) {
  // key code: 1 = 49  , 2 = 50 etc
  var key = e.keyCode;
  if (key == "49" && ispaused == false) {
    clearInterval(timer);
    timer = setInterval(loop, 1000 / tempo);
    nowbpm = 1000;
    $("#bpmIcon").attr("src", "component/gun_icon3.png");
  } else if (key == "50" && ispaused == false) {
    clearInterval(timer);
    timer = setInterval(loop, 750 / tempo);
    nowbpm = 750;
    $("#bpmIcon").attr("src", "component/gun_icon2.png");
  } else if (key == "51" && ispaused == false) {
    clearInterval(timer);
    timer = setInterval(loop, 500 / tempo);
    nowbpm = 500;
    $("#bpmIcon").attr("src", "component/gun_icon1.png");
  }
}
function changingstyle(e) {
  var linkElement = document.createElement("link");
  var key = e.keyCode;
  if (key == "52" && cssStyle == 1) {
    linkElement.rel = "stylesheet";
    linkElement.href = "style/style2.css";
    document.head.append(linkElement);
    cssStyle += 1;
  } else if (key == "52" && cssStyle == 2) {
    linkElement.rel = "stylesheet";
    linkElement.href = "style/style3.css";
    document.head.append(linkElement);
    cssStyle += 1;
  } else if (key == "52" && cssStyle == 3) {
    linkElement.rel = "stylesheet";
    linkElement.href = "style/style1.css";
    document.head.append(linkElement);
    cssStyle = 1;
  }
}

var helppopout = function() {
  uglipop({
    class: "popout",
    content: '<img src="../component/instructionpic.png"></img>'
  });
};
window.addEventListener("keydown", bpmsetting);
window.addEventListener("keydown", pauseloop);
window.addEventListener("keydown", loopsize);
window.addEventListener("keydown", changingstyle);

var timer = setInterval(loop, 1000 / tempo); // Start the magic.
clearInterval(timer);
