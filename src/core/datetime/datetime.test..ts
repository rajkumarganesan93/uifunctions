import { describe, it, expect } from "vitest";
import { formatDate, timeAgo } from "./dateUtils";
import { convertTimezone } from "./timezone";

describe("dateUtils", () => {
  it("formats date correctly", () => {
    const result = formatDate("2026-02-16T12:00:00Z", "dd/MM/yyyy");
    expect(result).toBe("16/02/2026");
  });

  it("returns 'just now' for current time", () => {
    const result = timeAgo(new Date());
    expect(result).toBe("just now");
  });

  it("returns minutes ago", () => {
    const past = new Date(Date.now() - 5 * 60000); // 5 minutes ago
    const result = timeAgo(past);
    expect(result).toContain("5 minutes ago");
  });

  it("returns hours ago", () => {
    const past = new Date(Date.now() - 2 * 3600000); // 2 hours ago
    const result = timeAgo(past);
    expect(result).toContain("2 hours ago");
  });

  it("returns days ago", () => {
    const past = new Date(Date.now() - 3 * 86400000); // 3 days ago
    const result = timeAgo(past);
    expect(result).toContain("3 days ago");
  });
});

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