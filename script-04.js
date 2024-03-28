let decision = prompt("Would you rather have chicken or pizza? ");

function wyr(decision){
	if (decision == "chicken"){
		return "Correct option";
	}
	else if (decision == "pizza"){
		return "Wrong option";
	}
	else{
		return "You typed an invalid option silly";
	}
}

alert(wyr(decision));