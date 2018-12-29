var styles = {
  family: "proxima-nova, sans-serif",
  size: Math.random() * 100,
  leading: 50,
  weight: 900
};
var sound = {
  Q: new Howl({
    src: ["./component/TabAudio/DV1.mp3"]
  }),
  W: new Howl({
    src: ["./component/TabAudio/ReallyV3.mp3"]
  }),
  E: new Howl({
    src: ["component/TabAudio/OV1.mp3"]
  }),
  R: new Howl({
    src: ["./component/TabAudio/DV2.mp3"]
  }),
  T: new Howl({
    src: ["component/TabAudio/OV2.mp3"]
  }),
  Y: new Howl({
    src: ["./component/TabAudio/ReallyV6.mp3"]
  }),
  U: new Howl({
    src: ["./component/TabAudio/SV3.mp3"]
  }),
  I: new Howl({
    src: ["component/TabAudio/OV3.mp3"]
  }),
  O: new Howl({
    src: ["./component/TabAudio/ReallyV7.mp3"]
  }),
  P: new Howl({
    src: ["component/TabAudio/OV4.mp3"]
  }),
  A: new Howl({
    src: ["./component/TabAudio/DV4.mp3"]
  }),
  S: new Howl({
    src: ["./component/TabAudio/ReallyV8.mp3"]
  }),
  D: new Howl({
    src: ["./component/TabAudio/DV3.mp3"]
  }),
  F: new Howl({
    src: ["component/TabAudio/OV5.mp3"]
  }),
  G: new Howl({
    src: ["component/TabAudio/OV6.mp3"]
  }),
  H: new Howl({
    src: ["component/TabAudio/OV7.mp3"]
  }),
  J: new Howl({
    src: ["./component/TabAudio/ReallyV2.mp3"]
  }),
  K: new Howl({
    src: ["./component/TabAudio/SV1.mp3"]
  }),
  L: new Howl({
    src: ["./component/TabAudio/ReallyV1.mp3"]
  }),
  Z: new Howl({
    src: ["component/TabAudio/OV8.mp3"]
  }),
  X: new Howl({
    src: ["./component/TabAudio/SV4.mp3"]
  }),
  C: new Howl({
    src: ["component/TabAudio/OV9.mp3"]
  }),
  V: new Howl({
    src: ["./component/TabAudio/ReallyV5.mp3"]
  }),
  B: new Howl({
    src: ["./component/TabAudio/ReallyV4.mp3"]
  }),
  N: new Howl({
    src: ["./component/TabAudio/SV2.mp3"]
  }),
  M: new Howl({
    src: ["component/TabAudio/OV10.mp3"]
  })
};

function pressAndplay(e) {
  var character = String.fromCharCode(e.which);
  if (character == "Q") {
    sound.Q.play();
  } else if (character == "W") {
    sound.W.play();
  } else if (character == "E") {
    sound.E.play();
  } else if (character == "R") {
    sound.R.play();
  } else if (character == "T") {
    sound.T.play();
  } else if (character == "Y") {
    sound.Y.play();
  } else if (character == "U") {
    sound.U.play();
  } else if (character == "I") {
    sound.I.play();
  } else if (character == "O") {
    sound.O.play();
  } else if (character == "P") {
    sound.P.play();
  } else if (character == "A") {
    sound.A.play();
  } else if (character == "S") {
    sound.S.play();
  } else if (character == "D") {
    sound.D.play();
  } else if (character == "F") {
    sound.F.play();
  } else if (character == "G") {
    sound.G.play();
  } else if (character == "H") {
    sound.H.play();
  } else if (character == "J") {
    sound.J.play();
  } else if (character == "K") {
    sound.K.play();
  } else if (character == "L") {
    sound.L.play();
  } else if (character == "Z") {
    sound.Z.play();
  } else if (character == "X") {
    sound.X.play();
  } else if (character == "C") {
    sound.C.play();
  } else if (character == "V") {
    sound.V.play();
  } else if (character == "B") {
    sound.B.play();
  } else if (character == "N") {
    sound.N.play();
  } else if (character == "M") {
    sound.M.play();
  }
}

window.addEventListener("keydown", pressAndplay);
