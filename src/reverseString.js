export default function reverseString(str) {
	if (typeof str !== "string") {
		throw new Error("Input must be a string");
	}
	if (str.length <= 0) return "";
	return str.split("").reverse().join("");
}
