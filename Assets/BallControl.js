#pragma strict

var poo: Transform;

function Update () {
  if(poo.position.x > 7 || poo.position.x < -7 || poo.position.y > 3 || poo.position.y < -3) {
    Destroy(poo.gameObject);  
  }
}