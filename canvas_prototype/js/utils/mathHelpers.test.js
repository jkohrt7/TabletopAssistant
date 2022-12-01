import { roundToMultipleOf } from "./mathHelpers";

describe("mathHelpers", () => {
  it("rounds a given number to a multiple of 50", () => {
    const testNum = roundToMultipleOf(55, 50);
    expect(testNum).toBe(50);
  })
});

