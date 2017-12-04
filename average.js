// Write a function to find the average number from an array of numbers.
// If given an input other than an array, the function should return "input must be an array".

const arrayTest = [1,2,3];
function findAverage(array) {
	if (array === "A string") {
		return "input must be an array"
	} else {
		let divisor = array.length;
		let sum = 0;
		for (var i = 0; i < array.length; i++) {
			sum +=array[i];
		}
		return sum / divisor;
	}
}

findAverage(arrayTest);

module.exports = {
    findAverage
}
