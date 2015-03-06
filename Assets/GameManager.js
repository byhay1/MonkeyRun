#pragma strict

static var score: int = 0;
var theSkin: GUISkin;

static function Score (pooSize: String) {
  if(pooSize == "Poo(Clone)") {
    score += 300;
  }
  else if(pooSize == "Poo2(Clone)") {
  	score += 100;
  }
  else{
    score += 200;
  }
}

function OnGUI() {
  GUI.skin = theSkin;
  GUI.Label(new Rect (20, 20, 150, 100), "Score: "+score);
}