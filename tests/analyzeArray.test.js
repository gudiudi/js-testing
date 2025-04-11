import { describe, expect, it } from "vitest";
import analyzeArray from "../src/analyzeArray";

describe("analyzeArray", () => {
	it("returns an object with the correct properties and result", () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
			average: 4,
			min: 1,
			max: 8,
			length: 6,
		});
	});

	it("handles an array with a single number", () => {
		expect(analyzeArray([5])).toEqual({
			average: 5,
			min: 5,
			max: 5,
			length: 1,
		});
	});

	it("handles an array with all identical numbers", () => {
		expect(analyzeArray([7, 7, 7, 7])).toEqual({
			average: 7,
			min: 7,
			max: 7,
			length: 4,
		});
	});

	it("handles an array with negative numbers", () => {
		expect(analyzeArray([-5, -10, -3])).toEqual({
			average: -6,
			min: -10,
			max: -3,
			length: 3,
		});
	});

	it("handles an array with decimal numbers", () => {
		expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
			average: 2.5,
			min: 1.5,
			max: 3.5,
			length: 3,
		});
	});

	it("returns null for empty array values", () => {
		expect(analyzeArray([])).toEqual(null);
	});

	it("throws error when array contains non-numeric values", () => {
		expect(() => analyzeArray([1, "two", 3])).toThrow();
	});

	it("returns an error for non-array input", () => {
		expect(() => analyzeArray()).toThrow();
		expect(() => analyzeArray(null)).toThrow();
		expect(() => analyzeArray(undefined)).toThrow();
		expect(() => analyzeArray(0)).toThrow();
		expect(() => analyzeArray("a")).toThrow();
		expect(() => analyzeArray({})).toThrow();
		expect(() => analyzeArray(() => {})).toThrow();
	});
});
