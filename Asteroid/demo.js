//ammo cache, overall available ammo
var totalAmmo=20;
//ammo in the six shooter
var maxAmmo=6;
//how much ammo is in our gun after shooting
var currentAmmo=maxAmmo;

function shoot() {
	if(currentAmmo>0){
		currentAmmo--; //take one bullet away by 1
	}
	
	updatescreen(); //updates available bullets, both total and current ammo
	
}

function updatescreen(){
	//updates ammo cache
	document.getElementById("total-ammo").innerHTML=""+totalAmmo;
	
	//updates gun ammo
	document.getElementById("current-ammo").innerHTML=""+currentAmmo;
}

//difference function

function getDiff(a,b){
	var c=a-b;
	return c;
}

//Reloading Function
function reload(){
	var difference=getDiff(maxAmmo,currentAmmo);
	
	if(totalAmmo>=difference){
		currentAmmo+=difference;
		totalAmmo-=difference;
	}
	
	else {
		currentAmmo+=totalAmmo;
		totalAmmo-=currentAmmo;
	}
	updatescreen();
}