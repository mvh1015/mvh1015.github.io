//ammo cache, overall available ammo
var totalAmmo=20;
//ammo in the six shooter
var maxAmmo=6;
//how much ammo is in our gun after shooting
var currentAmmo=maxAmmo;

function shoot() {
	if(currentAmmo==0){
		click();
	}
	
	if(currentAmmo>0){
		fire();
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
	
	//stops reloading sound after ammo is depleted
	if(totalAmmo>0){
		if(currentAmmo<6){
			loadem();
		}
	}
	if(totalAmmo==0){
		noAmmo();
	}
	
	if(totalAmmo>=difference){
		currentAmmo+=difference;
		totalAmmo-=difference;
		
	}
	
	else {
		currentAmmo+=totalAmmo;
		totalAmmo-=currentAmmo;
		if(totalAmmo<0){
			totalAmmo=0;
		}
	}
	
	
	updatescreen();
}





//Audio Function

function fire(){
	document.getElementById("gun").play();
	//below rewinds sound for replay
	document.getElementById("gun").currentTime=0;
}

function loadem(){
	document.getElementById("reload").play();
	document.getElementById("reload").currentTime=0;
}

function click(){
	document.getElementById("click").play();
	document.getElementById("click").currentTime=0;
}

function noAmmo(){
	document.getElementById("noAmmo").play();
	document.getElementById("noAmmo").currentTime=0;
}