
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
