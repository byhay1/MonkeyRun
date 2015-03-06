#pragma strict

var moveUp:KeyCode;
var moveDown:KeyCode;
var moveLeft:KeyCode;
var moveRight:KeyCode;
var shoot : KeyCode;
var banana_pref : Transform;
var small_pref : Transform;
var med_pref: Transform;
var big_pref: Transform;
var keyPressed = false;
var clone: Transform;

var speed: int = 1000;

var x : int = 0;

function Start () {
  
  var rand : float = Random.Range(1.0, 2.0);
  
  //Spawn all three at start
  if(rand <= 1.3) {
    PooSpawn(small_pref, this.transform,Random.Range(1.0,2.0), Random.Range(-7, 7), Random.Range(-3, 3), Random.Range(-7,7), Random.Range(-7,7));
    PooSpawn(med_pref, this.transform, Random.Range(1.0,2.0), Random.Range(-7, 7), Random.Range(-3, 3), Random.Range(-7,7), Random.Range(-7,7));
    PooSpawn(big_pref, this.transform, Random.Range(1.0,2.0), Random.Range(-7, 7), Random.Range(-3, 3), Random.Range(-7,7), Random.Range(-7,7));
  }
  //Spawn one at start
  else if(rand > 1.3 && rand <= 1.6) {
    var whichPoo : float = Random.Range(1.0, 2.0);
    var randWidth: float = Random.Range(-7, 7);
    var randHeight: float = Random.Range(-3, 3);
    var where: float = Random.Range(1.0,2.0);
    var randForce1: float = Random.Range(-7,7);
    var randForce2: float = Random.Range(-7,7);
    
    //Spawn small poo
    if(whichPoo <= 1.3) {
      PooSpawn(small_pref, this.transform, where, randWidth, randHeight, randForce1, randForce2);
    }
    //Spawn med poo
    else if (whichPoo > 1.3 && whichPoo <= 1.6) {
      PooSpawn(med_pref, this.transform, where, randWidth, randHeight, randForce1, randForce2);
    }
    //Spawn big poo
    else{
      PooSpawn(big_pref, this.transform, where, randWidth, randHeight, randForce1,randForce2);
    }
  }
}

function OnCollisionEnter2D (hitInfo: Collision2D) {
  if(hitInfo.gameObject.name == "Poo(Clone)" || hitInfo.gameObject.name == "Poo2(Clone)" || hitInfo.gameObject.name == "Poo3(Clone)") {
      Application.LoadLevel(1);
  }
  
}

function throwBanana() {
  clone = Instantiate(banana_pref, 
  			  Vector2(rigidbody2D.position.x, rigidbody2D.position.y),
  			  Quaternion.identity);
  var pos = Camera.main.WorldToScreenPoint(transform.position);
  var dir = Input.mousePosition - pos;
  clone.rigidbody2D.velocity = Vector3.MoveTowards(transform.position, dir, Time.deltaTime * 300);			  
}

static function PooSpawn(pooSize: Transform, monkey: Transform, where:float, randWidth:float, randHeight: float, randForce1: float, randForce2:float) {
	var clone: Transform;
  if(where > 0 && where <=1.25) {
    clone = Instantiate(pooSize, Vector2(-7, randHeight),Quaternion.identity);
    clone.rigidbody2D.AddForce(monkey.transform.position - clone.rigidbody2D.position);
  }
  else if(where > 1.25 && where <= 1.5) {
    clone = Instantiate(pooSize, Vector2(7, randHeight), Quaternion.identity);
	clone.rigidbody2D.AddForce(monkey.transform.position - clone.rigidbody2D.position);  }
  else if(where > 1.50 && where <= 1.75) {
    clone = Instantiate(pooSize, Vector2(randWidth, -3), Quaternion.identity);
	clone.rigidbody2D.AddForce(monkey.transform.position - clone.rigidbody2D.position);
  }
  else if(where > 1.75 && where <= 2) {
    clone = Instantiate(pooSize, Vector2(randWidth, 3), Quaternion.identity);
    clone.rigidbody2D.AddForce(monkey.transform.position - clone.rigidbody2D.position);
  }
  else if(where == 0) {
    clone = Instantiate(pooSize, Vector2(randWidth, randHeight), Quaternion.identity);
    clone.rigidbody2D.AddForce(monkey.transform.position - clone.rigidbody2D.position);
  }
}

while(true) {
  var randTime : float;
  if(Time.time <= 60 && Time.time < 120) {
    randTime = Random.Range(1.0, 6.0); 
  }
  else if(Time.time <= 120 && Time.time < 180) {
    randTime = Random.Range(1.0, 5.0); 
  }
  else if(Time.time <= 180 && Time.time < 240) {
    randTime = Random.Range(1.0, 4.0); 
  }
  else if(Time.time <= 240 && Time.time < 300) {
    randTime = Random.Range(1.0, 3.0); 
  }
  else if(Time.time <= 300 && Time.time < 360) {
    randTime = Random.Range(1.0, 2.0); 
  }
  else {
    randTime = Random.Range(1.0, 7.0); 
  }
  yield WaitForSeconds(randTime);
  
  var rand : float = Random.Range(1.0, 2.0);
  
  //Spawn all three right now
  if(rand <= 1.5) {
    PooSpawn(small_pref, this.transform, Random.Range(1.0,2.0), Random.Range(-7, 7), Random.Range(-3, 3), Random.Range(-7,7), Random.Range(-7,10));
    PooSpawn(med_pref, this.transform, Random.Range(1.0,2.0), Random.Range(-7, 7), Random.Range(-3, 3), Random.Range(-7,7), Random.Range(-7,10));
    PooSpawn(big_pref, this.transform, Random.Range(1.0,2.0), Random.Range(-7, 7), Random.Range(-3, 3), Random.Range(-7,7), Random.Range(-7,10));
  }
  //Spawn one right now
  else if(rand > 1.5) {
    var whichPoo : float = Random.Range(1.0, 2.0);
    var randWidth: float = Random.Range(-7, 7);
    var randHeight: float = Random.Range(-3, 3);
    var where: float = Random.Range(1.0,2.0);
    var randForce1: float = Random.Range(-7,7);
    var randForce2: float = Random.Range(-7,7);
    
    //Spawn small poo
    if(whichPoo <= 1.3) {
      PooSpawn(small_pref, this.transform, where, randWidth, randHeight, randForce1, randForce2);
    }
    //Spawn med poo
    else if (whichPoo > 1.3 && whichPoo <= 1.6) {
      PooSpawn(med_pref, this.transform, where, randWidth, randHeight, randForce1, randForce2);
    }
    //Spawn big poo
    else{
      PooSpawn(big_pref, this.transform, where, randWidth, randHeight, randForce1,randForce2);
    }
  }
}

function Update () {
  var pos = Camera.main.WorldToScreenPoint(transform.position);
  var dir = Input.mousePosition - pos;
  var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
  transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward); 
  
  if(Input.GetKeyDown(shoot) && keyPressed == false) {
    throwBanana();
    keyPressed = true;
  }
  else if (Input.GetKeyUp(shoot)) {
    keyPressed = false;
  }
  /*if(Input.GetKey(moveUp)) {
    rigidbody2D.velocity.y = speed;
    rigidbody2D.rotation = 90;
  }
  else if(Input.GetKey(moveDown)) {
    rigidbody2D.velocity.y = -speed;
    rigidbody2D.rotation = 270;
  }
  else if(Input.GetKey(moveLeft)) {
    rigidbody2D.velocity.x = -speed;
    rigidbody2D.rotation = 180;
  }
  else if(Input.GetKey(moveRight)) {
    rigidbody2D.velocity.x = speed;
    rigidbody2D.rotation = 0;
  }
  else {
    rigidbody2D.velocity.y = 0;
    rigidbody2D.velocity.x = 0;
  }*/
  
}