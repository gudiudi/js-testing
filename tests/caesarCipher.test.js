import { describe, expect, it } from "vitest";
import caesarCipher from "../src/caesarCipher";

describe("capitalize", () => {
	it("returns the correct encrypted strings", () => {
		expect(caesarCipher("xyz", 3)).toBe("abc");
		expect(caesarCipher("XYZ", 3)).toBe("ABC");
	});

	it("punctuation, spaces, and other non-alphabetical characters should remain unchanged", () => {
		expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
	});

	it("returns empty string for empty input", () => {
		expect(caesarCipher("", 3)).toBe("");
	});

	it("throws an error for non-string or non-number inputs", () => {
		expect(() => caesarCipher()).toThrow();
		expect(() => caesarCipher(null)).toThrow();
		expect(() => caesarCipher(undefined)).toThrow();
		expect(() => caesarCipher(0)).toThrow();
		expect(() => caesarCipher("Hello")).toThrow(); // missing shift
		expect(() => caesarCipher("Hello", null)).toThrow();
		expect(() => caesarCipher("Hello", "3")).toThrow();
		expect(() => caesarCipher({}, 3)).toThrow();
		expect(() => caesarCipher([], 3)).toThrow();
		expect(() => caesarCipher(() => {}, 3)).toThrow();
	});
});
