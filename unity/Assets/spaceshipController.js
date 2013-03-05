#pragma strict
var speed:int;
var rotation:int;
var turbo:int;
var normalSpeed:int;
var laserPrefab:Rigidbody;

function Start () {
	lives = 3;

}

function Update () {

	var rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,Screen.height,0)).x;
	var leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	var bottom = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,Screen.height,0)).y;
	var top = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	
	speed = normalSpeed;
	if(Input.GetKey(KeyCode.Space))
	{
		speed = turbo;
	}

	transform.Translate(Vector3.down*speed*Input.GetAxis("Vertical")*Time.deltaTime);
	transform.Rotate(Vector3.back*rotation*Input.GetAxis("Horizontal")*Time.deltaTime);
	
	if(transform.position.x < leftmost)
		transform.position.x = rightmost;
		
	if(transform.position.x > rightmost)
		transform.position.x = leftmost;
		
	if(transform.position.y > bottom)
		transform.position.y = top;
		
	if(transform.position.y < top)
		transform.position.y = bottom;	
		
	if(Input.GetKeyDown(KeyCode.LeftControl))
	{
		Instantiate(laserPrefab,transform.position,transform.rotation);
	}

}

var lives:int;


function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "asteroid")
	{
		lives--;
		if(lives == 0)
		{
			Destroy(this.gameObject);
		}
	}	
}

function OnGUI()
{
	GUI.Label(Rect(5,5,50,25), "Lives: "+lives);
	GUI.Label(Rect(5,30,100,25), "Speed: "+speed);
}