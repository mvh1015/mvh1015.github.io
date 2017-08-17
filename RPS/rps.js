//Array that will store the actual images that are used
//an array stores multiple values in a single variable
var pics=new Array();

pics[0]="images/rock.jpg";
pics[1]="images/paper.jpg";
pics[2]="images/scissors.jpg";
pics[3]="images/lizard.jpg";
pics[4]="images/spock.jpg";

//Array the highlighted images

var pics2=new Array();

pics2[0]="images/rock2.jpg";
pics2[1]="images/paper2.jpg";
pics2[2]="images/scissors2.jpg";
pics2[3]="images/lizard2.jpg";
pics2[4]="images/spock2.jpg";

//Player ID'savePreferences
var pId=new Array("rock_p","paper_p","scissors_p","lizard_p","spock_p");

//computer

var cId=new Array("rock_c","paper_c","scissors_c","lizard_c","spock_c");

//below is the function to swap the images with highlighted ones.

function swap(id,image){
	document.getElementById(id).src=image;
}

//play function that runs the game
//determine who's playing

function play(id){
	
	swap(pId[0],pics[0]);
	swap(pId[1],pics[1]);
	swap(pId[2],pics[2]);
	swap(pId[3],pics[3]);
	swap(pId[4],pics[4]);
	
	swap(cId[0],pics[0]);
	swap(cId[1],pics[1]);
	swap(cId[2],pics[2]);
	swap(cId[3],pics[3]);
	swap(cId[4],pics[4]);

//variable that stores whatever player picks 0,1,2,3, or 4

var p_choice=id;

//variable that stores the computer's choice

var c_choice=id;

//Math.floor to round the choices that the computer makes

var c_choice=Math.floor(Math.random()*4.999);

swap(pId[p_choice], pics2[p_choice]);
swap(cId[c_choice], pics2[c_choice]);

//determine who wins or losers

switch(p_choice){
	case 0:
	if(c_choice==0){
		alert("Rock and Rock!? Try again!");
	}else if(c_choice==1){
		alert("Sorry, Paper covers Rock");
	}else if(c_choice==2){
		alert("You win! Rock crushes Scissors");
	}else if(c_choice==3){
		alert("You win! Rock crushes Lizard");
	}else{
		alert("Sorry, Spock vaporizes Rock");
	}
	break;
	
	case 1:
	if(c_choice==0){
		alert("You win! Paper covers Rock");
	}else if(c_choice==1){
		alert("Paper and Paper!? Try again!");
	}else if(c_choice==2){
		alert("Sorry, Scissors cuts Paper");
	}else if(c_choice==3){
		alert("Sorry, Lizard eats paper");
	}else{
		alert("You win! Paper disproves Spock!");
	}
	break;
	
	case 2:
	if(c_choice==0){
		alert("Sorry, Rock crushes Scissors");
	}else if(c_choice==1){
		alert("You win! Scissors cuts Paper");
	}else if(c_choice==2){
		alert("Scissors and Scissors!? Try again!");
	}else if(c_choice==3){
		alert("You win! Scissors decapitates Lizard");
	}else{
		alert("Sorry, Spock smashes scissors!");
	}
	break;
	
	case 3:
	if(c_choice==0){
		alert("Sorry, Rock crushes Lizard");
	}else if(c_choice==1){
		alert("You win! Lizard eats Paper");
	}else if(c_choice==2){
		alert("Sorry, Scissors decapitates Lizard");
	}else if(c_choice==3){
		alert("Lizard and Lizard!? Try again!");
	}else{
		alert("You win! Lizard poisons Spock");
	}
	break;
	
	case 4:
	if(c_choice==0){
		alert("You win! Spock vaporizes Rock");
	}else if(c_choice==1){
		alert("Sorry, Paper disproves Spock");
	}else if(c_choice==2){
		alert("You win! Spock vaporizes Scissors");
	}else if(c_choice==3){
		alert("Sorry, Lizard poisons Spock");
	}else{
		alert("Spock and Spock!? Try again!");
	}
	break;
}
	
}