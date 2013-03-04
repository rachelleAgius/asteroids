#pragma strict
var direction:int;
function Start () {

	direction = Mathf.Round(Random.Range(1,3));
	Debug.Log(direction);
}

function Update () {
	var rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,Screen.height,0)).x;
	var leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	var bottom = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,Screen.height,0)).y;
	var top = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;

	transform.Rotate(Vector3.forward*50*Time.deltaTime);
	
	if(direction == 1)
	{
		transform.Translate(Vector3.left*5*Time.deltaTime,Space.World);
	}
	if(direction == 2)
	{
		transform.Translate(Vector3.right*5*Time.deltaTime,Space.World);
	}
	
	if(transform.position.x < leftmost)
		Destroy(this.gameObject);
		
	if(transform.position.x > rightmost)
		Destroy(this.gameObject);
		
	if(transform.position.y > bottom)
		Destroy(this.gameObject);
		
	if(transform.position.y < top)
		Destroy(this.gameObject);
	
}