//-----------------Initial Two.js----------------------
var two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(document.body);
two.pause(); // pause the animation (update function)
//-----------------------------------------------------
var recrA = []; // For drawing Rectangle
var finishLineArray = []; //For drawing the finish line
var midiArray = [];
var uiLineArray = []; // For re-drawing the UI, resize
var midiInstrument = []; // Array for recording type of the instrument
var midiContainer = [];
var midiEachPos = []; // Record the progress rate of each track
var cololist = [
  "#d43f53",
  "#00cc44",
  "#00802b",
  "#2a3d82",
  "#63caf7",
  "#373634",
  "#bf80ff",
  "#751aff",
  "#fcc000"
]; // color list for each instrument
var playBool = true; // animation playing or not
var frame = 0;
var sampleName = "";
var audioPlayBool = false;
var colorStyle = 1;
function drawingLines() {
  // drawing the background (Gray parts) and the finish line
  var finishLine = two.makeRectangle(
    0.2 * two.width,
    two.height * 0.425,
    two.width / 200,
    two.height * 0.35
  );
  finishLineArray.push(finishLine);
  finishLine.fill = "#d0c9d0";
  finishLine.noStroke();

  for (i = 0; i < 6; i += 2) {
    // Gray parts
    var lineV = two.makeRectangle(
      0,
      two.height * 0.25 + two.height * 0.05 * (i + 1.5),
      two.width * 2,
      two.height * 0.05
    );
    lineV.fill = "#d0c9d0";
    lineV.opacity = 0.5;
    lineV.noStroke();
    uiLineArray.push(lineV);
  }
  var lineV = two.makeRectangle(
    // Bottom borderline
    0,
    two.height * 0.6,
    two.width * 2,
    two.height / 150
  );
  lineV.fill = "#d0c9d0";
  lineV.noStroke();
  uiLineArray.push(lineV);

  var lineV = two.makeRectangle(
    // Top borderline
    0,
    two.height * 0.25,
    two.width * 2,
    two.height / 150
  );
  lineV.fill = "#d0c9d0";
  lineV.noStroke();
  uiLineArray.push(lineV);
}
drawingLines();
// --------------Parsering MIDI--------------------
function readMidiFile(e) {
  MidiConvert.load("midiScript/" + e + ".mid", function(midi) {
    midiContainer.push(midi);
    console.debug(midi);
    for (j = 0; j < midi.tracks.length; j++) {
      // Checking whether the track is an empty array
      if (midi.tracks[j].length == 0) {
        midiEachPos.push(-1); // Empty array marks it by -1
      } else {
        midiEachPos.push(0);
      }
    }

    two.play(); // after Parsering midi files , start the animation and drawing the UI
    playBool = true;
  });
} //-----------------for checking-------------------

// --------------Animation Part--------------------
two.bind("update", function(frameCount) {
  // binding function in Two.js

  if (colorStyle == 1) {
    // for script 3 dual of fate
    finishLineArray[0].noStroke();
  } else {
    finishLineArray[0].stroke = "black";
    finishLineArray[0].linewidth = 3;
  }
  frame++;
  var playingRate = frame / 60; // the controller of playing rate

  for (j = 0; j < midiContainer[0].tracks.length; j++) {
    if (
      midiEachPos[j] != -1 &&
      midiEachPos[j] < midiContainer[0].tracks[j].length // if the track isn't an empty array
    ) {
      if (
        playingRate >= midiContainer[0].tracks[j].notes[midiEachPos[j]].time
      ) {
        var Rect = two.makeRectangle(
          // drawing and initialing the Rectangle of each note
          two.width * 1.2 +
            (midiContainer[0].tracks[j].notes[midiEachPos[j]].duration *
              two.width) /
              50,
          0.6 * two.height -
            ((midiContainer[0].tracks[j].notes[midiEachPos[j]].midi - 20) *
              two.height *
              0.35) /
              87,
          (midiContainer[0].tracks[j].notes[midiEachPos[j]].duration *
            two.width) /
            25,
          two.height / 60
        );
        if (colorStyle == 1) {
          Rect.fill = cololist[j - 2];

          Rect.noStroke();
        } else {
          Rect.opacity = 1;
          if (j % 2 == 0) {
            Rect.fill = "#F9051D";
            Rect.stroke = "#D90116";
            Rect.linewidth = 2;
          } else {
            Rect.fill = "#33FE01";
            Rect.stroke = "#3AE60F";
            Rect.linewidth = 2;
          }
        } // NEED TO MODIFY THE COLOR
        Rect.opacity = 0.75;
        Rect.noStroke();
        recrA.push(Rect); // Saving the Rectangle into recrA
        midiArray.push(midiContainer[0].tracks[j].notes[midiEachPos[j]]); // recording the arrary for later using
        midiInstrument.push(midiContainer[0].tracks[j].instrumentNumber);
        midiEachPos[j] += 1;
      }
    }
  }

  for (i = 0; i < recrA.length; i++) {
    recrA[i].translation.set(
      (recrA[i].translation.x -= two.width * 0.008), // the Rectangle animation moving speed controller
      recrA[i].translation.y
    );

    var rectToTail = recrA[i].translation.x + recrA[i].width / 2; // The leftmost side of each Rectangle
    var rectToHead = recrA[i].translation.x - recrA[i].width / 2; // The rightmost side of each Rectangle

    if (
      rectToHead.toFixed(0) < 0.2 * two.width &&
      rectToHead.toFixed(0) > 0.18 * two.width
    ) {
      if (audioPlayBool == false) {
        playAudio();
        spacebarLocker = false;
      }
      recrA[i].height = two.height / 45;
      finishLineArray[0].fill = recrA[i].fill;
    }
    if (
      rectToTail.toFixed(0) < 0.185 * two.width &&
      rectToTail.toFixed(0) > 0.17 * two.width
    ) {
      recrA[i].fill = "#b2cace";
      recrA[i].height = two.height / 60;
      finishLineArray[0].fill = "#d0c9d0";
    }
    if (rectToTail < -0.3 * two.width) {
      // remove rectangles outside of the screen
      two.remove(recrA[0]);
      recrA.shift();
      midiInstrument.shift();
      midiArray.shift();
    }
  }
});
