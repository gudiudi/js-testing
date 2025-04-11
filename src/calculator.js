function add(a, b) {
	validateNumbers(a, b);
	return a + b;
}

function subtract(a, b) {
	validateNumbers(a, b);
	return a - b;
}

function divide(a, b) {
	validateNumbers(a, b);
	validateNonZero(b);
	return a / b;
}

function multiply(a, b) {
	validateNumbers(a, b);
	return a * b;
}

function validateNumbers(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("Both arguments must be a number");
	}
}

function validateNonZero(b) {
	if (b === 0) {
		throw new Error("Cannot divide by zero");
	}
}

export const calculator = {
	add,
	subtract,
	divide,
	multiply,
};
