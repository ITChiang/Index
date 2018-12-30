//-----------------Initial Two.js----------------------
var two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(document.body); // initialize two.js
two.pause();
//-----------------------------------------------------
var midifile = [];
var recrA = []; // For drawing Rectangle
var finishLineArray = []; //For drawing the finish line
var uiLineArray = [];
var midiArray = [];
var midiInstrument = []; // array for recording type of intsrument
var midiSaver = [];
var midiEachPos = [];
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
var colorlistS = [];
var colorStyle = 1;
var playBool = true;
//-----------------Initial Sound----------------------
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
var player = new WebAudioFontPlayer();
player.loader.decodeAfterLoading(audioContext, "_tone_0560_Aspirin_sf2_file"); //trumpet  (audioContext,fileName)
player.loader.decodeAfterLoading(audioContext, "_tone_0270_Aspirin_sf2_file"); //E-guitar
player.loader.decodeAfterLoading(
  audioContext,
  "_tone_0250_GeneralUserGS_sf2_file"
); //A-guitar
player.loader.decodeAfterLoading(audioContext, "_tone_0640_SBLive_sf2"); //saxphone
player.loader.decodeAfterLoading(audioContext, "_tone_0000_Chaos_sf2_file"); //piano
player.loader.decodeAfterLoading(audioContext, "_tone_0330_Aspirin_sf2_file"); //bass
player.loader.decodeAfterLoading(audioContext, "_tone_0400_Aspirin_sf2_file"); //violin
player.loader.decodeAfterLoading(audioContext, "_tone_0730_Aspirin_sf2_file"); //flute
player.loader.decodeAfterLoading(audioContext, "_tone_0420_Aspirin_sf2_file"); //cello
//-----------------------------------------------------

function drawingLines() {
  // drawing the background (gray parts) and the finish line
  var finishLine = two.makeRectangle(
    0.6 * two.width,
    two.height * 0.415,
    two.width / 200,
    two.height * 0.63
  );
  finishLineArray.push(finishLine);
  finishLine.fill = "#d0c9d0";

  for (i = 0; i < 6; i += 2) {
    // Gray parts
    var lineV = two.makeRectangle(
      0,
      two.height * 0.1 + two.height * 0.09 * (i + 1.5),
      two.width * 2,
      two.height / 10
    );
    lineV.fill = "#d0c9d0";
    lineV.opacity = 0.5;
    lineV.noStroke();
    uiLineArray.push(lineV);
  }
  var lineV = two.makeRectangle(
    // Bottom borderline
    0,
    two.height * 0.73,
    two.width * 2,
    two.height / 150
  );
  lineV.fill = "#d0c9d0";
  lineV.noStroke();
  uiLineArray.push(lineV);

  var lineV = two.makeRectangle(
    // Top borderline
    0,
    two.height * 0.1,
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
  MidiConvert.load("midiScript/" + e, function(midi) {
    midiSaver.push(midi);
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
  });
}
// --------------Animation Parts--------------------
two.bind("update", function(frameCount) {
  if (colorStyle == 1) {
    // for script 3 dual of fate
    finishLineArray[0].noStroke();
  } else {
    finishLineArray[0].stroke = "black";
    finishLineArray[0].linewidth = 3;
  }
  var second = frameCount / 45; // the controller of playing rate
  for (j = 0; j < midiSaver[0].tracks.length; j++) {
    if (
      midiEachPos[j] != -1 &&
      midiEachPos[j] < midiSaver[0].tracks[j].length // if the track isn't an empty array
    ) {
      if (second >= midiSaver[0].tracks[j].notes[midiEachPos[j]].time) {
        var Rect = two.makeRectangle(
          // drawing the Rectangle of each note
          two.width * -0.3,
          0.73 * two.height -
            ((midiSaver[0].tracks[j].notes[midiEachPos[j]].midi - 20) *
              two.height *
              0.63) /
              87,
          (midiSaver[0].tracks[j].notes[midiEachPos[j]].duration * two.width) /
            25,
          two.height / 60
        );
        midiEachPos[j] += 1;
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
        recrA.push(Rect);
        midiArray.push(midiSaver[0].tracks[j].notes[midiEachPos[j]]); // recording the arrary for later using
        midiInstrument.push(midiSaver[0].tracks[j].instrumentNumber);
      }
    }
  }

  for (i = 0; i < recrA.length; i++) {
    recrA[i].translation.set(
      (recrA[i].translation.x += two.width * 0.004), // the Rectangle moving speed controller
      recrA[i].translation.y
    );

    var rectToTail = recrA[i].translation.x - recrA[i].width / 2; // The leftmost side of the Rectangle
    var rectToHead = recrA[i].translation.x + recrA[i].width / 2; // The rightmost side of the Rectangle

    if (
      rectToHead.toFixed(0) > 0.6 * two.width &&
      rectToHead.toFixed(0) < 0.605 * two.width
    ) {
      recrA[i].height = two.height / 45;
      recrA[i].linewidth = 5;
      finishLineArray[0].fill = recrA[i].fill;

      player.queueWaveTable(
        audioContext,
        audioContext.destination,
        _tone_0000_Chaos_sf2_file,
        0,
        midiArray[i].midi,
        midiArray[i].duration
      );
    }
    if (
      rectToTail.toFixed(0) > 0.62 * two.width &&
      rectToTail.toFixed(0) < 0.625 * two.width
    ) {
      recrA[i].noStroke();
      recrA[i].fill = "#b2cace";
      recrA[i].height = two.height / 60;
      finishLineArray[0].fill = "#d0c9d0";
    }
    if (rectToTail > 1.2 * two.width) {
      // remove rectangles outside of the screen
      two.remove(recrA[i]);
      recrA.shift();
      midiArray.shift();
      midiInstrument.shift();
    }
  }
});
