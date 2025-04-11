import { describe, expect, it } from "vitest";
import { calculator } from "../src/calculator";

describe("calculator", () => {
	const invalidInputs = [
		[null, 2],
		[1, undefined],
		["a", "b"],
		[{}, []],
		[() => {}, 3],
	];

	describe("input validation", () => {
		for (const [a, b] of invalidInputs) {
			it(`throws on invalid input for add(${a}, ${b})`, () => {
				expect(() => calculator.add(a, b)).toThrow();
			});

			it(`throws on invalid input for subtract(${a}, ${b})`, () => {
				expect(() => calculator.subtract(a, b)).toThrow();
			});

			it(`throws on invalid input for multiply(${a}, ${b})`, () => {
				expect(() => calculator.multiply(a, b)).toThrow();
			});

			it(`throws on invalid input for divide(${a}, ${b})`, () => {
				expect(() => calculator.divide(a, b)).toThrow();
			});
		}
	});

	describe("divide by zero", () => {
		it("throws when dividing by zero", () => {
			expect(() => calculator.divide(1, 0)).toThrow();
		});
	});

	describe("correct results", () => {
		it("adds numbers correctly", () => {
			expect(calculator.add(2, 3)).toBe(5);
		});

		it("subtracts numbers correctly", () => {
			expect(calculator.subtract(2, 3)).toBe(-1);
		});

		it("multiplies numbers correctly", () => {
			expect(calculator.multiply(5, 3)).toBe(15);
		});

		it("divides numbers correctly", () => {
			expect(calculator.divide(6, 3)).toBe(2);
		});
	});
});
