#pragma strict
var laserSpeed:int;
function Start () {

}

function Update () {
	//to move laser beam forward
	transform.Translate(Vector3.up*-laserSpeed*Time.deltaTime);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "asteroid")
	{
		Destroy(other.gameObject);
	}
}