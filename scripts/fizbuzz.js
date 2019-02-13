function fizzBuzz(number) {
	if(number % 3 == 0 && number % 5 == 0) {
		console.log("both");
	}
	else if(number % 3 == 0 || number % 5 == 0) {
		console.log("3 or 5");
	}
	else {
		console.log("Neither");
	}
}