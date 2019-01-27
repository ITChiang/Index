var pianoSoundpack = _tone_0000_GeneralUserGS_sf2_file;
var aGuitarSoundpack = _tone_0250_GeneralUserGS_sf2_file;
var eGuitarSoundpack = _tone_0270_GeneralUserGS_sf2_file;
var trumpetSoundpack = _tone_0560_GeneralUserGS_sf2_file;
var saxphoneSoundpack = _tone_0660_GeneralUserGS_sf2_file;
var bassSoundpack = _tone_0320_GeneralUserGS_sf2_file;
var violinSoundpack = _tone_0400_GeneralUserGS_sf2_file;
var celloSoundpack = _tone_0420_GeneralUserGS_sf2_file;
var fluteSoundpack = _tone_0730_GeneralUserGS_sf2_file;
console.log(pianoSoundpack);
//-----------------Initial Sound----------------------
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
var player = new WebAudioFontPlayer();
player.loader.decodeAfterLoading(
  audioContext,
  "_tone_0560_GeneralUserGS_sf2_file"
); //trumpet  (audioContext,fileName)
player.loader.decodeAfterLoading(
  audioContext,
  "_tone_0270_GeneralUserGS_sf2_file"
); //E-guitar
player.loader.decodeAfterLoading(
  audioContext,
  "_tone_0250_GeneralUserGS_sf2_file"
); //A-guitar
player.loader.decodeAfterLoading(
  audioContext,
  " _tone_0660_GeneralUserGS_sf2_file"
); //saxphone
player.loader.decodeAfterLoading(
  audioContext,
  "_tone_0000_GeneralUserGS_sf2_file"
); //piano
player.loader.decodeAfterLoading(
  audioContext,
  "_tone_0320_GeneralUserGS_sf2_file"
); //bass
player.loader.decodeAfterLoading(
  audioContext,
  "_tone_0400_GeneralUserGS_sf2_file"
); //violin
player.loader.decodeAfterLoading(
  audioContext,
  "_tone_0730_GeneralUserGS_sf2_file"
); //flute
player.loader.decodeAfterLoading(
  audioContext,
  "_tone_0420_GeneralUserGS_sf2_file"
); //cello
//-----------------------------------------------------
