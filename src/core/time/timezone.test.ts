import { describe, it, expect } from "vitest";
import { convertTimezone } from "./timezone";

describe("convertTimezone", () => {
  it("converts UTC to Asia/Kolkata correctly", () => {
    const input = "2026-02-16T12:00:00Z"; // noon UTC
    const result = convertTimezone(input, "UTC", "Asia/Kolkata");

    // Luxon will shift to IST (+5:30)
    expect(result).toContain("2026-02-16T17:30:00+05:30");
  });

  it("converts UTC to America/New_York correctly", () => {
    const input = "2026-02-16T12:00:00Z"; // noon UTC
    const result = convertTimezone(input, "UTC", "America/New_York");

    // EST is UTC-5 in February
    expect(result).toContain("2026-02-16T07:00:00-05:00");
  });

  it("throws error for invalid zone", () => {
    expect(() =>
      convertTimezone("2026-02-16T12:00:00Z", "UTC", "Invalid/Zone")
    ).toThrow();
  });
});