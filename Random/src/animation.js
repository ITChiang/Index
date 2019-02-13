//-----------------Initial Two.js----------------------
var two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

var linesArrary1 = [];
var linesArrary2 = [];
var linesArrary3 = [];
var colorBlockArrary = [];

two.bind("update", function(framecount) {
  // main animation function

  if (slider_6.value == 1) {
    _arraryConfig.arrary1[0] = slider_1.value;
    _arraryConfig.arrary1[1] = slider_2.value;
    _arraryConfig.arrary1[2] = slider_3.value;
    _arraryConfig.arrary1[3] = slider_4.value;
    _arraryConfig.arrary1[4] = slider_4_1.value;
    _arraryConfig.arrary1[5] = checkbox_1.checked;
    _arraryConfig.arrary1[6] = drops;
  } else if (slider_6.value == 2) {
    _arraryConfig.arrary2[0] = slider_1.value;
    _arraryConfig.arrary2[1] = slider_2.value;
    _arraryConfig.arrary2[2] = slider_3.value;
    _arraryConfig.arrary2[3] = slider_4.value;
    _arraryConfig.arrary2[4] = slider_4_1.value;
    _arraryConfig.arrary2[5] = checkbox_1.checked;
    _arraryConfig.arrary2[6] = drops;
  } else if (slider_6.value == 3) {
    _arraryConfig.arrary3[0] = slider_1.value;
    _arraryConfig.arrary3[1] = slider_2.value;
    _arraryConfig.arrary3[2] = slider_3.value;
    _arraryConfig.arrary3[3] = slider_4.value;
    _arraryConfig.arrary3[4] = slider_4_1.value;
    _arraryConfig.arrary3[5] = checkbox_1.checked;
    _arraryConfig.arrary3[6] = drops;
  }

  rotationEarth(linesArrary1, 600 / _arraryConfig.arrary1[0], framecount);
  rotationEarth(linesArrary2, 600 / _arraryConfig.arrary2[0], framecount);
  rotationEarth(linesArrary3, 600 / _arraryConfig.arrary3[0], framecount);
  rotationSun(linesArrary1, _arraryConfig.arrary1[1], framecount);
  rotationSun(linesArrary2, _arraryConfig.arrary2[1], framecount);
  rotationSun(linesArrary3, _arraryConfig.arrary3[1], framecount);
  changingScale(linesArrary1, _arraryConfig.arrary1[2], framecount);
  changingScale(linesArrary2, _arraryConfig.arrary2[2], framecount);
  changingScale(linesArrary3, _arraryConfig.arrary3[2], framecount);
  colorPicker(linesArrary1, _arraryConfig.arrary1[3]);
  colorPicker(linesArrary2, _arraryConfig.arrary2[3]);
  colorPicker(linesArrary3, _arraryConfig.arrary3[3]);
  //fullScreenMode(linesArrary1);
  if (_arraryConfig.arrary1[5] == true) {
    reWidth(linesArrary1, 5);
  } else {
    reWidth(linesArrary1, 1);
  }

  if (_arraryConfig.arrary2[5] == true) {
    reWidth(linesArrary2, 5);
  } else {
    reWidth(linesArrary2, 1);
  }
  if (_arraryConfig.arrary3[5] == true) {
    reWidth(linesArrary3, 5);
  } else {
    reWidth(linesArrary3, 1);
  }
  /* For rain mode and need to modify  */

  if (_arraryConfig.arrary1[6] == true) {
    rainMode(linesArrary1);
    _arraryConfig.arrary1[7] = 1;
  } else if (
    _arraryConfig.arrary1[6] == false &&
    _arraryConfig.arrary1[7] > 0
  ) {
    backToCenter(linesArrary1, 0.4, 0.3);
    _arraryConfig.arrary1[7]--;
  }

  if (_arraryConfig.arrary2[6] == true) {
    rainMode(linesArrary2);
    _arraryConfig.arrary2[7] = 1;
  } else if (
    _arraryConfig.arrary2[6] == false &&
    _arraryConfig.arrary2[7] > 0
  ) {
    backToCenter(linesArrary2, 0.4, 0.3);
    _arraryConfig.arrary2[7]--;
  }

  if (_arraryConfig.arrary3[6] == true) {
    rainMode(linesArrary3);
    _arraryConfig.arrary3[7] = 1;
  } else if (
    _arraryConfig.arrary3[6] == false &&
    _arraryConfig.arrary3[7] > 0
  ) {
    backToCenter(linesArrary3, 0.4, 0.3);
    _arraryConfig.arrary3[7]--;
  }
  /* For rain mode and need to modify  */

  if (slider_5.value == 1) {
    changingOpacity(linesArrary2, 0);
    changingOpacity(linesArrary3, 0);
  } else if (slider_5.value == 2) {
    changingOpacity(linesArrary2, 1);
    changingOpacity(linesArrary3, 0);
  } else {
    changingOpacity(linesArrary2, 1);
    changingOpacity(linesArrary3, 1);
  }
});

function drawLines(target, x, y, count, color) {
  for (var i = 0; i < count; i++) {
    for (var j = 0; j < count; j++) {
      var lines = two.makeRectangle(
        two.width * x + two.height * 0.04 * i,
        two.height * y + two.height * 0.04 * j,
        two.height * 0.03,
        0
      );
      lines.stroke = color;
      target.push(lines);
    }
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawColorBlock(x, y) {
  var rects = two.makeRectangle(x, y, Math.random() * 100, Math.random() * 100);
  rects.fill = getRandomColor();
  rects.noStroke();
  colorBlockArrary.push(rects);
}

function rotationEarth(target, rate, frame) {
  if (rate == 0) {
    rate = 1;
  }
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      target[i * 10 + j].rotation = (frame / rate) * Math.PI;
    }
  }
}
function rotationSun(target, rate, frame) {
  if (rate == 0) {
    rate = 1;
  }
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      target[i * 10 + j].translation.x +=
        Math.sin(frame / rate) * two.width * 0.00008 * 10;
      target[i * 10 + j].translation.y +=
        Math.cos(frame / rate) * two.width * 0.00008 * 10;
    }
  }
}

function zIndexFadeIn(target, rate, frame) {
  for (var i = 0; i < 100; i++) {}
}

function changingOpacity(target, value) {
  for (var i = 0; i < 100; i++) {
    target[i].opacity = value;
  }
}
function changingXPosition(target, value) {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      target[i * 10 + j].translation.x =
        value * two.width * 0.01 + two.width * 0.4 + two.height * 0.04 * i;
    }
  }
}
function changingYPosition(target, value) {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      target[i * 10 + j].translation.y =
        value * two.width * 0.01 + two.height * 0.3 + two.height * 0.04 * j;
    }
  }
}
function changingScale(target, value, frame) {
  if (value <= 0) {
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        target[j * 10 + i].scale = Math.cos(frame * 0.005 * value * (j + 1));
      }
    }
  } else {
    for (var i = 0; i < 100; i++) {
      target[i].scale = Math.cos((frame * 0.5) / value) * 2;
    }
  }
}
function reColor(target, row) {
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < 10; j++) {
      target[j * 10 + i].stroke = getRandomColor();
      target[j * 10 + i].fill = getRandomColor();
    }
  }
  for (var i = 9; i > row; i--) {
    for (var j = 0; j < 10; j++) {
      target[j * 10 + i].stroke = "white";
      target[j * 10 + i].fill = "white";
    }
  }
  console.debug("color change");
}
function colorPicker(target, value) {
  if (value < 255) {
    var valueR = value;
    var valueB = 0;
    var valueG = 0;
  } else if (value > 255 && value < 510) {
    var valueR = 255;
    var valueB = value - 255;
    var valueG = 0;
  } else if (value > 510 && value < 765) {
    var valueR = 765 - value;
    var valueB = 255;
    var valueG = 0;
  } else if (value > 765 && value < 1020) {
    var valueR = 0;
    var valueB = 255;
    var valueG = value - 765;
  } else if (value > 1020 && value < 1275) {
    var valueR = 0;
    var valueB = 1275 - value;
    var valueG = 255;
  } else if (value > 1275 && value < 1530) {
    var valueR = value - 1275;
    var valueB = 0;
    var valueG = 255;
  }

  var colorIndexR = parseInt(valueR, 10).toString(16);
  var colorIndexG = parseInt(valueG, 10).toString(16);
  var colorIndexB = parseInt(valueB, 10).toString(16);
  var color = "#" + pad(colorIndexR) + pad(colorIndexG) + pad(colorIndexB);

  for (var i = 0; i < 100; i++) {
    target[i].stroke = color;
    target[i].fill = color;
  }
}
function pad(n) {
  //  Color picking
  return n.length < 2 ? "0" + n : n;
}

function reWidth(target, size) {
  for (i = 0; i < 100; i++) {
    target[i].width = size * two.height * 0.05;
    target[i].height = size;
    if (size == 1) {
      target[i].height = 0;
    } else {
      target[i].height = size;
    }
  }
}

function rainMode(target) {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      target[i * 10 + j].translation.x =
        two.width * -0.1 + i * two.width * 0.2 * Math.random();
      target[i * 10 + j].translation.y =
        two.height * -0.1 + j * two.height * 0.2 * Math.random();
    }
  }
}
function backToCenter(target, x, y) {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      target[i * 10 + j].translation.x = two.width * x + two.height * 0.04 * i;
      target[i * 10 + j].translation.y = two.height * y + two.height * 0.04 * j;
    }
  }
}
