function fizzBuzz(number) {
	if(number % 3 == 0 && number % 5 == 0) {
		console.log("FizzBuzz");
		return "FizzBuzz"
	}
	else if(number % 3 == 0) {
		console.log("fizz");
		return "Fizz"
	}
	else if(number % 5 == 0) {
		console.log("Buzz");
		return "Buzz"
	}
	else {
		console.log("Failure :(");
		return number;
	}
}

fizzBuzz(3);