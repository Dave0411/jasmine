/*describe("calculator", function() {

	beforeEach(function() {
		calc = new Calculator;
	});
	


	describe("Addition tests", function() {
		it("should return 42", function() {
			calc.add(20);
			calc.add(22);
			expect(calc.value).toBe(42);
		});
		it("should return 26", function(){
			calc.add(19);
			calc.add(7);
			expect(calc.value).toBe(26);
		});
		it("should return and error if we dont supply two numbers", function(){
			spyOn(window, "alert");
			calc.add("hitchhikers");
			expect(window.alert).toHaveBeenCalledWith("error");
		});
	});
});
	*/
	describe("FizzBuzz", function() {


		describe("Modulus Test", function(){
			it("should be 0", function() {
			expect(fizzBuzz(9)).toBe("Fizz");
			});
			it("should be 0", function() {
			expect(fizzBuzz(15)).toBe("FizzBuzz");
			});
			it("should be 0", function() {
			expect(fizzBuzz(10)).toBe("Buzz");
			});
			it("should be 0", function() {
			expect(fizzBuzz(11)).toBe(11);
			});
	});
});



	/*describe("Addition tests", function() {
		it("should return 42", function() {
			expect(addition(20,22)).toBe(42);
		});
		it("should return 26", function(){
			expect(addition(7,19)).toBe(26);
		});
		it("should return and error if we dont supply two numbers", function(){
			spyOn(window, "alert");
			addition("hitchhikers", "Guide");
			expect(window.alert).toHaveBeenCalledWith("error");
		});
	});
});*/