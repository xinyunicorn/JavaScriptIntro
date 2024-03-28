let decision = prompt("Would you rather have chicken or pizza? ");

function wyr(decision){
	if (decision == "chicken"){
		alert("Correct option");
	}
	else if (decision == "pizza"){
		alert("Wrong option");
	}
	else{
		alert("You typed an invalid option silly");
	}
}

wyr(decision);