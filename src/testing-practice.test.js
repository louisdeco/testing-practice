import {
  helloWorld,
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./testing-practice.js";

test("returns the string 'hello world'", () => {
  expect(helloWorld()).toBe("hello world");
});

it("capitalize the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

it("reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

describe("calculator", () => {
  it("addition", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  it("subtraction", () => {
    expect(Calculator.subtract(1, 2)).toBe(-1);
  });

  it("divide", () => {
    expect(Calculator.divide(1, 2)).toBeCloseTo(0.5);
  });

  it("multiply", () => {
    expect(Calculator.multiply(1, 2)).toBe(2);
  });
});

describe("caesar cipher", () => {
  it("shift with 1 character", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  it("shift with 3 characters", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  it("shift with uppercase and lowercase", () => {
    expect(caesarCipher("aBc", 1)).toBe("bCd");
  });

  it("shift with wrapping from z to a", () => {
    expect(caesarCipher("xyz", 2)).toBe("zab");
  });

  it("shift with wrapping from Z to A", () => {
    expect(caesarCipher("XYZ", 2)).toBe("ZAB");
  });

  it("shift with wrapping from Z to A with uppercase and lowercase", () => {
    expect(caesarCipher("XyZ", 2)).toBe("ZaB");
  });

  it("shift with other characters", () => {
    expect(caesarCipher("xY!", 2)).toBe("zA!");
  });
});

it("analyze an array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
