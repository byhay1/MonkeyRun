#pragma strict

var small_pref : Transform;
var med_pref : Transform;
var big_pref : Transform;
var monkey: Transform;

function OnCollisionEnter2D(hitInfo: Collision2D) {
  Destroy(this.gameObject);
  Destroy(hitInfo.gameObject);
   if(hitInfo.gameObject.name == "Poo(Clone)" || hitInfo.gameObject.name == "Poo2(Clone)" || hitInfo.gameObject.name == "Poo3(Clone)") {
    if(hitInfo.rigidbody.position.x < 7 && hitInfo.rigidbody.position.y < 3 && hitInfo.rigidbody.position.x > -7 && hitInfo.rigidbody.position.y > -3) {
      GameManager.Score(hitInfo.gameObject.name);
    }
  }
}

function Update () {
  if(rigidbody2D.position.x > 8 || rigidbody2D.position.x < -8 || rigidbody2D.position.y > 6 || rigidbody2D.position.y < -6) {
    Destroy(this.gameObject);
  }
}