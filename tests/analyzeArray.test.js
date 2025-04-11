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
		expect(capitalize([])).toBe([]);
	});

	it("returns an error for non-array input", () => {
		expect(() => capitalize()).toThrow();
		expect(() => capitalize(null)).toThrow();
		expect(() => capitalize(undefined)).toThrow();
		expect(() => capitalize(0)).toThrow();
		expect(() => capitalize("a")).toThrow();
		expect(() => capitalize({})).toThrow();
		expect(() => capitalize(() => {})).toThrow();
	});
});
