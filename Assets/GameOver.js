#pragma strict
var theSkin: GUISkin;

function OnGUI() {
  GUI.skin = theSkin;
  GUI.Label(new Rect (Screen.width/2-80, Screen.height/2+80, 250, 100), "Your Score was: "+GameManager.score);
}