import { roundToMultipleOf } from "./mathHelpers";

describe("roundToMultipleOf", () => {
  it("Rounds down to closest multiple", () => {
    const testNum = roundToMultipleOf(60.5,50);
    expect(testNum).toBe(50);
  })

  it("Rounds up to the closest multiple", () => {
    const testNum = roundToMultipleOf(49, 50);
    expect(testNum).toBe(50);
  })

  it("Rounds up if exactly in the middle", () => {
    const testNum = roundToMultipleOf(25, 50);
    expect(testNum).toBe(50);
  })
});

