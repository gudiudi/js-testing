import { describe, expect, it } from "vitest";
import capitalize from "../src/capitalize";

describe("capitalize", () => {
	it("capitalizes the first letter of a word", () => {
		expect(capitalize("hello")).toBe("Hello");
	});

	it("does not alter whitespace-only strings", () => {
		expect(capitalize(" ")).toBe(" ");
	});

	it("returns empty string for empty input", () => {
		expect(capitalize("")).toBe("");
	});

	it("returns an error for non-string input", () => {
		expect(() => capitalize()).toThrow();
		expect(() => capitalize(null)).toThrow();
		expect(() => capitalize(undefined)).toThrow();
		expect(() => capitalize(0)).toThrow();
		expect(() => capitalize({})).toThrow();
		expect(() => capitalize([])).toThrow();
		expect(() => capitalize(() => {})).toThrow();
	});
});
