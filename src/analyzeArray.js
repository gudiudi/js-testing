export default function analyzeArray(nums) {
	if (!Array.isArray(nums)) {
		throw new Error("Input must be an array");
	}

	if (nums.length < 1) return null;

	let min = nums[0];
	let max = nums[0];
	let sum = 0;

	for (const num of nums) {
		if (typeof num !== "number")
			throw new Error("Array values must be a number");
		if (num < min) min = num;
		if (num > max) max = num;
		sum += num;
	}

	return {
		average: sum / nums.length,
		min,
		max,
		length: nums.length,
	};
}
