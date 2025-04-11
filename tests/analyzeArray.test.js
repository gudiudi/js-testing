import { describe, expect, it } from "vitest";
import analyzeArray from "../src/analyzeArray";

describe(() => {
	it("returns an object with the correct properties and result", () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe({
			average: 4,
			min: 1,
			max: 8,
			length: 6,
		});
	});

	it("returns empty array for empty input", () => {
		expect(analyzeArray([])).toBe([]);
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
