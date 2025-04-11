import { describe, expect, it } from "vitest";
import reverseString from "../src/reverseString";

describe("reverseString", () => {
	it("reverse the string of an input", () => {
		expect(reverseString("hello")).toBe("olleh");
		expect(reverseString("Hello World")).toBe("dlroW olleH");
		expect(reverseString("123")).toBe("321");
	});

	it("does not alter whitespace-only strings", () => {
		expect(reverseString(" ")).toBe(" ");
	});

	it("returns empty string for empty input", () => {
		expect(reverseString("")).toBe("");
	});

	it("returns an error for non-string input", () => {
		expect(() => reverseString()).toThrow();
		expect(() => reverseString(null)).toThrow();
		expect(() => reverseString(undefined)).toThrow();
		expect(() => reverseString(0)).toThrow();
		expect(() => reverseString({})).toThrow();
		expect(() => reverseString([])).toThrow();
		expect(() => reverseString(() => {})).toThrow();
	});
});
