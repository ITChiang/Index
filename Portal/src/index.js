var two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

var styles = {
  family: "Quicksand, monospace, sans-serif",
  size: 48,
  leading: 50,
  weight: 100
};

var background = two.makeRectangle(0, 0, two.width * 2, two.height * 2);
var character = [""];
background.fill = "black";
var timesCount = 250;
var xPosition = two.width * 0.1;
var yPosition = two.height * 0.1;
var startPosition = [xPosition]; // 記錄起點
var text = two.makeText("", two.width / 2, two.height / 2, styles); //初始化主要text
var rotationBool = false; // 選轉動畫用
var checkingBool = false; // 動畫跑完確定用
var keylockerBool = true; // 鎖鍵盤
var musicISplay = false; // background music playing check
var hintBool = false;
var backgroundMusic = new Audio("src/As_Colorful_As_Ever.mp3");
var subTextarray = [""];
var textRArray = [];
var hintArray = [];
var textGroup = two.makeGroup();
var cololist = ["red", "orange", "yellow", "green", "blue", "Indigo", "Purple"];
two.pause();

function inputkey(e) {
  if (keylockerBool == false) {
    var key = String.fromCharCode(e.keyCode);
    two.play();
    if (e.keyCode == 32 || e.keyCode == 13) {
      timesCount = 0;
    } else if (e.keyCode == 8) {
      checkingBool = true;
      character.length = 0; //clear arrary
      timesCount = 250;
      text.value = "";
    } else {
      if (checkingBool == false) {
        character.push(key);
        text.value += key;
      } else {
        checkingBool = false;
        timesCount = 250;
        character.push(key);
        text.value += key;
        two.play();
      }
    }
  }
}
two.bind("update", function(frameCount) {
  text.scale = timesCount / 150;
  text.fill = colorMatching(text.value); //call colormatching

  if (text.value == "ROTATION") rotationBool = true; //rotation test
  if (rotationBool == true) text.rotation += 0.05; // rotation

  if (timesCount == 0) {
    // 250 -> 0
    if (
      //keyword matching
      text.value == "PORTFOLIO" ||
      text.value == "ABOUT" ||
      text.value == "WORK"
    ) {
      var text4 = two.makeText(
        "I will bring you to my Portfolio in three seconds",
        two.width / 2,
        two.height / 2,
        styles
      );
      text4.opacity = 0;
      setInterval(function() {
        keylockerBool = true;
        text4.opacity += 30 / 3500; //text fade in
        two.play();
      }, 30);
      text4.fill = "white";
      setTimeout(function() {
        window.location.href = "https://itungchiang.com"; //轉跳
      }, 3500);
    } else if (text.value == "PLAY" || text.value == "MUSIC") {
      var text4 = two.makeText(
        "Enjoy the Great music made by Broke For Free",
        two.width / 2,
        two.height / 2,
        styles
      );

      var text5 = two.makeText(
        "Enter BFF to link to his webpage",
        two.width / 2,
        (2 * two.height) / 3,
        styles
      );
      text4.visible = true;
      text5.visible = true;
      text5.size = 20;
      text4.opacity = 0;
      text5.opacity = 0;
      text5.fill = "white";
      text4.fill = "white";
      var myVar = setInterval(function() {
        keylockerBool = true;

        text4.opacity += 30 / 3500; //text fade in
        text5.opacity += 30 / 3500; //text fade in
        two.play();
        if (text4.opacity > 0.9) {
          clearInterval(myVar);
          var myVar2 = setInterval(function() {
            text4.opacity -= 30 / 3500; //text fade in
            text5.opacity -= 30 / 3500; //text fade in
            two.play();
            if (text4.opacity <= 0.0) {
              clearInterval(myVar2);
              text4.visible = false;
              text5.visible = false;
              keylockerBool = false;
            }
          }, 30);
        }
      }, 30); //fade in fade out function
      playSound();
    } else if (text.value == "PAUSE" || text.value == "STOP") {
      pauseSound();
    } else if (text.value == "BFF") {
      var text4 = two.makeText(
        "I will bring you to Broke-For-Free in three seconds",
        two.width / 2,
        two.height / 2,
        styles
      );
      text4.opacity = 0;
      setInterval(function() {
        keylockerBool = true;
        text4.opacity += 30 / 3500; //text fade in
        two.play();
      }, 30);
      text4.fill = "white";
      setTimeout(function() {
        window.location.href = "http://brokeforfree.com/"; //轉跳
      }, 3500);
    } else if (text.value == "GOOGLE") {
      var text4 = two.makeText(
        "As your wish, Let's go !",
        two.width / 2,
        two.height / 2,
        styles
      );
      text4.opacity = 0;
      setInterval(function() {
        keylockerBool = true;
        text4.opacity += 30 / 3500; //text fade in
        two.play();
      }, 30);
      text4.fill = "white";
      setTimeout(function() {
        window.location.href = "https://google.com/"; //轉跳
      }, 3500);
    } else if (
      text.value == "CHEAT" ||
      text.value == "HELP" ||
      text.value == "KEYWORD" ||
      text.value == "KEYWORDS"
    ) {
      if (hintBool == false) {
        hintBool = true;
        var hintText1 = two.makeText(
          " KeyWord : MUSIC , PLAY , PAUSE , HINT , TUTORIAL , GOOGLE ",
          two.width / 2,
          0.05 * two.height,
          styles
        );
        var hintText2 = two.makeText(
          " KeyWord : ABOUT, PORTFOLIO , EMAIL , ",
          two.width / 2,
          0.08 * two.height,
          styles
        );

        hintText1.opacity = 0;
        hintArray.push(hintText1);
        hintText2.opacity = 0;
        hintArray.push(hintText2);
        hintText1.fill = "blue";
        hintText2.fill = "green";
        hintText1.size = two.weight / 100;
        hintText2.size = two.weight / 100;
        setTimeout(function() {
          var myVar = setInterval(function() {
            keylockerBool = true;
            two.play();
            for (i = 0; i < 7; i++) {
              hintText1.opacity += 30 / 2200; //text fade in
              hintText2.opacity += 30 / 2200;
            }

            if (hintText1.opacity > 0.9) {
              clearInterval(myVar);
              keylockerBool = false;
            }
          }, 30); //fade in fade out function
        }, 100);

        xPosition = startPosition[0];
        yPosition += 20;
      } else {
        hintBool = false;
        setTimeout(function() {
          var myVar = setInterval(function() {
            keylockerBool = true;
            two.play();

            hintArray[0].opacity -= 30 / 2200; //text fade in
            hintArray[1].opacity -= 30 / 2200;

            if (hintArray[0].opacity <= 0.0) {
              clearInterval(myVar);
              keylockerBool = false;
              hintArray.length = 0;
            }
          }, 30); //fade in fade out function
        }, 100);
      }
    } else if (text.value == "EMAIL" || text.value == "CONTACT") {
      fadeInAndOut(" itungchiang AT gmail.com ", 1);
    } else if (text.value == "COLOR") {
      for (i = 0; i < subTextarray.length; i++) {
        subTextarray[i].fill = "red";
      }
      var text4 = two.makeText(
        "Try the NAME of the color !",
        two.width / 2,
        two.height / 2,
        styles
      );

      text4.visible = true;
      text4.opacity = 0;
      text4.fill = "white";

      var myVar = setInterval(function() {
        keylockerBool = true;

        text4.opacity += 30 / 3500; //text fade in
        two.play();
        if (text4.opacity > 0.9) {
          clearInterval(myVar);
          var myVar2 = setInterval(function() {
            text4.opacity -= 30 / 3500; //text fade in
            two.play();
            if (text4.opacity <= 0.0) {
              clearInterval(myVar2);
              text4.visible = false;
              keylockerBool = false;
            }
          }, 30);
        }
      }, 30); //fade in fade out function
    } else if (text.value == "HINT") {
      fadeInAndOut("Enter Any KEYWORD to interact with me ", 1);
      fadeInAndOut("Entering KEYWORD to get more INFORMATION", 2);
    } else if (text.value == "HI" || text.value == "HELLO") {
      fadeInAndOut("  HI  :)", 1);
    } else if (text.value == "RAINBOW") {
      var intext =
        "01001100 01101111 01110110 01100101 00001101 00001010 , 01010000 01100101 01100001 01100011 01100101";
      for (i = 0; i < 7; i++) {
        yPosition = two.height * 0.1 * (i + 1);
        var textR = two.makeText(intext, two.width / 2, yPosition, styles);
        textR.opacity = 0;
        textR.fill = cololist[i];
        textR.size = two.weight / 100;
        textRArray.push(textR);
      }
      setTimeout(function() {
        textRArray[0].opacity;

        var myVar = setInterval(function() {
          keylockerBool = true;
          two.play();
          for (i = 0; i < 7; i++) {
            textRArray[i].opacity += 30 / 2200; //text fade in
          }

          if (textRArray[0].opacity > 0.9) {
            clearInterval(myVar);
            var myVar2 = setInterval(function() {
              for (i = 0; i < 7; i++) {
                textRArray[i].opacity -= 30 / 2200; //text fade out
              }
              two.play();
              if (textRArray[0].opacity <= 0.0) {
                clearInterval(myVar2);
                textRArray[0].visible = false;
                keylockerBool = false;
              }
            }, 30);
          }
        }, 30); //fade in fade out function
      }, 100);
    }
    checkingBool = true; //初始化
    text.value = "";
    var contxt = [""]; //存字元成字串
    text.rotation = 0; //回水平
    rotationBool = false; //stop rotation
    for (i = 0; i < character.length; i++) {
      contxt += character[i];
    }
    if (keylockerBool == false) {
      xPosition += 13 * (character.length / 2) + 15; //不同單字 間距xPosition後段 + 空白處， 找下一個字間距用
      // startPosition.push(xPosition); //存換行的起點
    }
    if (xPosition > two.width * 0.9) {
      //超出邊界
      xPosition = startPosition[0];
      yPosition += 20;
    } //換行用

    two.pause();
  } else {
    timesCount--;
  }
});
function playSound() {
  musicISplay = true;
  backgroundMusic.volume = 0.3;
  backgroundMusic.play();
}
function pauseSound() {
  if (musicISplay == true) {
    backgroundMusic.pause();
    musicISplay = false;
  }
}
function fadeInAndOut(input, priority = 1) {
  // input is a string !!!! and it only support one line
  // priority is a number , it will delay the time which show the sentence. And default is 1;
  var delayTime = 0;
  delayTime = (priority - 1) * 3800;
  setTimeout(function() {
    var text4 = two.makeText(input, two.width / 2, two.height / 2, styles);

    text4.visible = true;
    text4.opacity = 0;
    text4.fill = "white";

    var myVar = setInterval(function() {
      keylockerBool = true;
      two.play();
      text4.opacity += 30 / 2200; //text fade in
      console.debug("here  " + delayTime + "  " + keylockerBool);
      if (text4.opacity > 0.9) {
        clearInterval(myVar);
        var myVar2 = setInterval(function() {
          text4.opacity -= 30 / 2200; //text fade in
          two.play();
          if (text4.opacity <= 0.0) {
            clearInterval(myVar2);
            text4.visible = false;
            keylockerBool = false;
          }
        }, 30);
      }
    }, 30); //fade in fade out function
  }, delayTime);
}

$(document).keydown(inputkey);
// ------ keylocker
//keyboard locker timer for the start animation.
setTimeout(function() {
  keylockerBool = false;
}, 12000);
