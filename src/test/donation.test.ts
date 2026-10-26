import { describe, expect, it } from "vitest";
import { suggestedAmounts, validateAmount, isValidEmail, formatAmount } from "@/lib/donation";

describe("donation rules", () => {
  it("offers the specified UGX amounts", () => {
    expect(suggestedAmounts.UGX).toEqual([10000, 25000, 50000, 100000, 250000]);
  });
  it("offers the specified USD amounts", () => {
    expect(suggestedAmounts.USD).toEqual([5, 10, 25, 50, 100]);
  });
  it("rejects empty and non-positive amounts", () => {
    expect(validateAmount("")).not.toBeNull();
    expect(validateAmount("0")).not.toBeNull();
    expect(validateAmount("-5")).not.toBeNull();
    expect(validateAmount("25,000")).toBeNull();
  });
  it("validates email", () => {
    expect(isValidEmail("a@b.co")).toBe(true);
    expect(isValidEmail("nope")).toBe(false);
  });
  it("formats UGX", () => {
    expect(formatAmount(25000, "UGX")).toBe("UGX 25,000");
  });
});
