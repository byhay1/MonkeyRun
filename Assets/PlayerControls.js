#pragma strict

var shoot : KeyCode;
var banana_pref : Transform;
var small_pref : Transform;
var med_pref: Transform;
var big_pref: Transform;
var clone: Transform;

var keyPressed = false;
var rand : float;
var whichPoo : float;

function Start () {
  rand = Random.Range(1.0, 2.0);
  whichPoo = Random.Range(1.0, 2.0); 
  //Spawn all three at start
  if(rand <= 1.3) {
    PooSpawn(small_pref);
    PooSpawn(med_pref);
    PooSpawn(big_pref);
  }
  //Spawn one at start
  else if(rand > 1.3 && rand <= 1.6) {
    //Spawn small poo
    if(whichPoo <= 1.3) {
      PooSpawn(small_pref);
    }
    //Spawn med poo
    else if (whichPoo > 1.3 && whichPoo <= 1.6) {
      PooSpawn(med_pref);
    }
    //Spawn big poo
    else{
      PooSpawn(big_pref);
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
  			  Vector2(GetComponent.<Rigidbody2D>().position.x, GetComponent.<Rigidbody2D>().position.y),
  			  Quaternion.identity);
  var pos = Camera.main.WorldToScreenPoint(transform.position);
  var dir = Input.mousePosition - pos;
  clone.GetComponent.<Rigidbody2D>().velocity = Vector3.MoveTowards(transform.position, dir, Time.deltaTime * 300);			  
}

function PooSpawn(pooSize: Transform) {
  var where: float = Random.Range(1.0,2.0);
  var randWidth: float = Random.Range(-7, 7);
  var randHeight: float = Random.Range(-3, 3);
  var monkey: Transform = this.transform;
  var clone: Transform;
  var zAxis: float = setZAxis(pooSize);
  print(zAxis);
 
  if(where > 0 && where <=1.25) {
    clone = Instantiate(pooSize, Vector3(-7, randHeight, zAxis),Quaternion.identity);
    clone.GetComponent.<Rigidbody2D>().AddForce(monkey.transform.position - clone.GetComponent.<Rigidbody2D>().position);
  }
  else if(where > 1.25 && where <= 1.5) {
    clone = Instantiate(pooSize, Vector3(7, randHeight, zAxis), Quaternion.identity);
	clone.GetComponent.<Rigidbody2D>().AddForce(monkey.transform.position - clone.GetComponent.<Rigidbody2D>().position);  }
  else if(where > 1.50 && where <= 1.75) {
    clone = Instantiate(pooSize, Vector3(randWidth, -3, zAxis), Quaternion.identity);
	clone.GetComponent.<Rigidbody2D>().AddForce(monkey.transform.position - clone.GetComponent.<Rigidbody2D>().position);
  }
  else if(where > 1.75 && where <= 2) {
    clone = Instantiate(pooSize, Vector3(randWidth, 3, zAxis), Quaternion.identity);
    clone.GetComponent.<Rigidbody2D>().AddForce(monkey.transform.position - clone.GetComponent.<Rigidbody2D>().position);
  }
  else if(where == 0) {
    clone = Instantiate(pooSize, Vector3(randWidth, randHeight, zAxis), Quaternion.identity);
    clone.GetComponent.<Rigidbody2D>().AddForce(monkey.transform.position - clone.GetComponent.<Rigidbody2D>().position);
  }
}

function setZAxis(pooSize: Transform) {
  if(pooSize.gameObject.name == "Poo") {
  	print(pooSize.gameObject.name);
  	return 1.0;
  } else if (pooSize.gameObject.name == "Poo2") {
    print(pooSize.gameObject.name);
  	return 2.0;
  } else {
    print(pooSize.gameObject.name);
  	return 0.0;
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

  rand = Random.Range(1.0, 2.0);
  whichPoo = Random.Range(1.0, 2.0);

  //Spawn all three right now
  if(rand <= 1.5) {
    PooSpawn(small_pref);
    PooSpawn(med_pref);
    PooSpawn(big_pref);
  }
  //Spawn one right now
  else if(rand > 1.5) {
    //Spawn small poo
    if(whichPoo <= 1.3) {
      PooSpawn(small_pref);
    }
    //Spawn med poo
    else if (whichPoo > 1.3 && whichPoo <= 1.6) {
      PooSpawn(med_pref);
    }
    //Spawn big poo
    else{
      PooSpawn(big_pref);
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
}