import { describe, it, expect } from "vitest";
import { isLove } from "../src/app.js";

describe("isLove", () => {
  it("Should return true when Timmy has 1 petal and Sarah has 4 petals", () => {
    expect(isLove(1, 4)).toBe(true);
});

  it("Should return false when Timmy has 2 petals and Sarah has 2 petals", () => {
    expect(isLove(2, 2)).toBe(false);
  });

  it("Should return true when Timmy has 0 petals and Sarah has 1 petal", () => {
    expect(isLove(0, 1)).toBe(true);
  });

  it("Should return false when Timmy has 0 petals and Sarah has 0 petals", () => {
    expect(isLove(0, 0)).toBe(false);
  });

  it("Should return the numbers of petals must be an interger when Timmy or Sarah have a number of petals that is not an integer", () => {
    expect(isLove(2, 3.5)).toBe("The numbers of petals must be a interger");
  });
  
});
