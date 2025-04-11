export default function caesarCipher(str, shift) {
	if (typeof str !== "string" || typeof shift !== "number") {
		throw new Error("Input must be a string and number");
	}

	if (str.length <= 0) return "";

	const shiftChar = (char, base) =>
		String.fromCharCode(((char.charCodeAt() - base + shift) % 26) + base);

	let encrypted = "";

	for (const char of str) {
		const charCode = char.charCodeAt();
		if (charCode > 96 && charCode < 123) {
			encrypted += shiftChar(char, 97);
		} else if (charCode > 64 && charCode < 91) {
			encrypted += shiftChar(char, 65);
		} else {
			encrypted += char;
		}
	}

	return encrypted;
}
